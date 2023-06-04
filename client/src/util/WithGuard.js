import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const WithGuard = (Component) => {
  const Wrapper = (props) => {
    const { isLogIn } = useSelector((state) => state.auth);
    return isLogIn ? (
      <Component {...props} />
    ) : (
      <Navigate to="/login" />
    );
  };
  return Wrapper;
};

export default WithGuard;
