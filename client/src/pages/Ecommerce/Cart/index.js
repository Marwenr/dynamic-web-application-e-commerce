import React, { useState } from "react";
import WithGuard from "../../../util/WithGuard";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { postInvoice } from "../../../store/invoiceSlice";
import { putUpdateArticle } from "../../../store/shopSlice";

const Cart = () => {
  const {
    card,
    cardBody,
    cardHeaderFlex,
    cartTable,
    cartEmpty,
    prdctDelete,
    productImg,
    prdctQtyBtn,
    prdctQtyContainer,
    qtyInputBox,
  } = styles;
  const dispatch = useDispatch();
  const { myCart } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const [products, SetProducts] = useState(myCart);

  const increaseQuantity = (i) => {
    SetProducts((preValue) =>
      preValue.map((data) => {
        if (i === data._id) {
          if (data.qty < data.quantity)
            return {
              ...data,
              qty: data.qty + 1,
            };
        }
        return data;
      })
    );
  };

  const decreaseQuantity = (i) => {
    SetProducts((preValue) =>
      preValue.map((data) => {
        if (i === data._id) {
          if (data.qty > 1) {
            return { ...data, qty: data.qty - 1 };
          } else {
            return data;
          }
        }
        return data;
      })
    );
  };

  const removeFromCart = (i) => {
    if (window.confirm("Are you sure you want to remove into your cart?")) {
      SetProducts((prevCart) =>
        prevCart.filter((item) => {
          return i !== item._id;
        })
      );
    } else {
      // alert('No');
    }
  };

  const emptycart = () => {
    if (window.confirm("Remove all items into your cart?")) {
      SetProducts([]);
    } else {
      // alert('No');
    }
  };

  const cartTotalQty = products.reduce((acc, data) => acc + data.qty, 0);
  const cartTotalAmount = products.reduce(
    (acc, data) => acc + data.price * data.qty,
    0
  );

  const handleValidate = () => {
    const invoice = {
      validation: false,
      client: user.displayName,
      cashier: "e-commerce",
      date: Date(Date.now()).toString().slice(4, 15),
      total: cartTotalAmount,
      articles: products,
    };
    products.map((product) =>
      dispatch(
        putUpdateArticle({
          reference: product.reference,
          quantity: product.quantity - product.qty,
        })
      )
    );
    dispatch(postInvoice(invoice));
    SetProducts([]);
  };

  return (
    <div className="row justify-content-center m-0">
      <div className="col-md-8 mt-5 mb-5">
        <div className={card}>
          <div className="card-header bg-dark p-3">
            <div className={cardHeaderFlex}>
              <h5 className="text-white m-0">
                Cart Calculation
                {products.length > 0 ? `(${products.length})` : ""}
              </h5>
              {products.length > 0 ? (
                <button
                  className="btn btn-danger mt-0 btn-sm"
                  onClick={() => emptycart()}
                >
                  <AiOutlineClose />
                  <span>Empty Cart</span>
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className={`${cardBody} p-0`}>
            {products.length === 0 ? (
              <table className={`table ${cartTable} mb-0`}>
                <tbody>
                  <tr>
                    <td colSpan="6">
                      <div className={cartEmpty}>
                        <i className="fa fa-shopping-cart"></i>
                        <p>Your Cart Is empty</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <table className={`table ${cartTable} mb-0`}>
                <thead>
                  <tr>
                    <th>Action</th>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th className="text-right">
                      <span id="amount" className="amount">
                        Total Amount
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((data) => {
                    const { _id, image, name, price, qty } = data;
                    return (
                      <tr key={_id}>
                        <td>
                          <button
                            className={prdctDelete}
                            onClick={() => removeFromCart(_id)}
                          >
                            <AiOutlineClose />
                          </button>
                        </td>
                        <td>
                          <div className={productImg}>
                            <img src={image} alt="" />
                          </div>
                        </td>
                        <td>
                          <div className="product-name">
                            <p>{name}</p>
                          </div>
                        </td>
                        <td>${price}</td>
                        <td>
                          <div className={prdctQtyContainer}>
                            <button
                              className={prdctQtyBtn}
                              type="button"
                              onClick={() => decreaseQuantity(_id)}
                            >
                              <AiOutlineMinus />
                            </button>
                            <input
                              type="text"
                              name="qty"
                              className={qtyInputBox}
                              value={qty}
                              disabled
                            />
                            <button
                              className={prdctQtyBtn}
                              type="button"
                              onClick={() => increaseQuantity(_id)}
                            >
                              <AiOutlinePlus />
                            </button>
                          </div>
                        </td>
                        <td className="text-right">
                          ${(qty * price).toFixed(0)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot>
                  <tr>
                    <th>&nbsp;</th>
                    <th colSpan="3">&nbsp;</th>
                    <th>
                      Items in Cart<span className="ml-2 mr-2">:</span>
                      <span className="text-danger">{cartTotalQty}</span>
                    </th>
                    <th className="text-right">
                      Total Price<span className="ml-2 mr-2">:</span>
                      <span className="text-danger">
                        $ {cartTotalAmount.toFixed(0)}
                      </span>
                    </th>
                  </tr>
                </tfoot>
              </table>
            )}
          </div>
          {products.length !== 0 && (
            <div className="p-3 position-absolute" style={{ right: "20%" }}>
              <Button onClick={handleValidate}>Validate</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WithGuard(Cart);
