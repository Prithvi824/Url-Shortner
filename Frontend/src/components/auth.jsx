import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const Authorize = createContext(null);

function Authenticator({ children }) {
  const [user, setUser] = useState({});

  return (
    <Authorize.Provider value={{ user, setUser }}>
      {children}
    </Authorize.Provider>
  );
}

Authenticator.propTypes = {
  children: PropTypes.node,
};

export default Authenticator;
