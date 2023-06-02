import { configureStore } from "@reduxjs/toolkit";
import auth from "./authSlice"
import shop from "./shopSlice"
import invoice from "./invoiceSlice"
import page from "./pageSlice"

export default configureStore({ reducer: { auth, shop, invoice, page } });
