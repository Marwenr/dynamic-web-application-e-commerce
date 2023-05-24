import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataByName } from "../../../store/shopSlice";
import styles from "./styles.module.css";
import {
  AiOutlineFileAdd,
  AiOutlineDelete,
  AiOutlineCreditCard,
  AiOutlineAudit,
  AiOutlineAppstore,
  AiOutlineUserAdd,
  AiOutlineUserDelete,
  AiOutlinePercentage,
} from "react-icons/ai";
import { FaCashRegister } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const dispatch = useDispatch();
  const { content, group, groupBtn, button, title, svgStyle } = styles;
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getDataByName("categories"));
    dispatch(getDataByName("subcategories"));
  }, [dispatch]);


  return (
    <div className={content}>
      <div className={group}>
        <h3>Article</h3>
        <div className={groupBtn}>
          <p className={button} onClick={() => navigate("article")}>
            <AiOutlineFileAdd className={svgStyle} />
            <span className={title}>Add Article</span>
          </p>
          <p className={button} onClick={() => navigate("deletearticle")}>
            <AiOutlineDelete className={svgStyle} />
            <span className={title}>Delete Article</span>
          </p>
        </div>
      </div>
      <div className={group}>
        <h3>Sales</h3>
        <div className={groupBtn}>
          <p className={button} onClick={() => navigate("cashdrawer")}>
            <FaCashRegister className={svgStyle} />
            <span className={title}>Cash Drawer</span>
          </p>
          <p className={button} onClick={() => navigate("receipts")}>
            <AiOutlineCreditCard className={svgStyle} />
            <span className={title}>Receipts</span>
          </p>
          <p className={button} onClick={() => navigate("customeraccount")}>
            <AiOutlineAudit className={svgStyle} />
            <span className={title}>Customer Account</span>
          </p>
        </div>
      </div>
      <div className={group}>
        <h3>Profil</h3>
        <div className={groupBtn}>
          <p className={button}>
            <AiOutlineUserAdd className={svgStyle} />
            <span className={title}>Add Admin</span>
          </p>
          <p className={button}>
            <AiOutlineUserDelete className={svgStyle} />
            <span className={title}>Delete Admin</span>
          </p>
          <p className={button} onClick={() => navigate("/")}>
            <AiOutlineAppstore className={svgStyle} />
            <span className={title}>My Ecommerce</span>
          </p>
        </div>
      </div>
      <div className={group}>
        <h3>Statistic</h3>
        <div className={groupBtn}>
          <p className={button}>
            <AiOutlinePercentage className={svgStyle} />
            <span className={title}>Financial Static</span>
          </p>
          <p className={button}>
            <AiOutlinePercentage className={svgStyle} />
            <span className={title}>Sales Static</span>
          </p>
          <p className={button}>
            <AiOutlinePercentage className={svgStyle} />
            <span className={title}>Stock Static</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
