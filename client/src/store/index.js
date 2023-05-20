import { configureStore } from "@reduxjs/toolkit";
import auth from "./authSlice" 
import shop from "./shopSlice" 

export default configureStore({ reducer: { auth, shop } });
