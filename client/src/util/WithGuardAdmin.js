import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const WithGuardAdmin = (Component) => {
  const Wrapper = (props) => {
    const { user } = useSelector((state) => state.auth);
    return user.displayName === "admin" ? (
      <Component {...props} />
    ) : (
      <Navigate to="/" />
    );
  };
  return Wrapper;
};

export default WithGuardAdmin;
