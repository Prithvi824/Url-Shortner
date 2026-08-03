# Stage 1: Build the frontend
FROM node:slim AS frontend

WORKDIR /app/frontend

COPY Frontend/package*.json ./

RUN npm install --prefer-online

COPY Frontend/ ./

RUN npm run build

# Stage 2: Build the backend
FROM python:3.13 AS backend

WORKDIR /app/backend

COPY backend/requirements.txt ./
    
RUN pip install --no-cache-dir -r requirements.txt

COPY backend/ ./

# Stage 3: Combine frontend and backend
COPY --from=frontend /app/frontend/dist /var/www/html

# Install nginx
RUN apt-get update && apt-get install -y nginx

COPY nginx.conf /etc/nginx/sites-enabled/default

CMD ["sh", "-c" , "service nginx start && cd /app && uvicorn backend.main:app --host 0.0.0.0 --port 8000"]