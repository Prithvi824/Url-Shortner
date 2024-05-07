import { useContext } from "react";
import { Authorize } from "./auth";

const useAuth = () => useContext(Authorize);

export default useAuth;
