import React from "react";
import { BsPerson } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import styles from "../HeaderCart/styles.module.css";
import { useNavigate } from "react-router-dom";
import { logOutFnc } from "../../../store/authSlice";
import { useDispatch, useSelector } from "react-redux";

const HeaderAuth = () => {
  const { container, icon, title } = styles;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      {
        (Object.keys(user).length === 0 && (
          <div className={container} onClick={() => navigate("login")}>
            <BsPerson className={icon} />
            <p className={title}>Sign In</p>
          </div>
        ))
      }
      {Object.keys(user).length > 0 && (
        <div className={container} onClick={() => dispatch(logOutFnc())}>
          <BiLogOut className={icon} style={{ color: "red" }} />
          <p className={title} style={{ color: "red" }}>
            LogOut
          </p>
        </div>
      )}
    </>
  );
};

export default HeaderAuth;
