import { configureStore } from "@reduxjs/toolkit";
import auth from "./authSlice"
import shop from "./shopSlice"
import invoice from "./invoiceSlice"
import page from "./pageSlice"
import cart from "./cartSlice"

export default configureStore({ reducer: { auth, shop, invoice, page, cart } });
