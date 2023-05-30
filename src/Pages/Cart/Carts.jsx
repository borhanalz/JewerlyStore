import React from "react";
import Layout from "../../Components/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDeleteLeft,
  faRecycle,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import Cart from "./Cart";
import CustomNumeralNumericFormat from "../../Components/Price/Price";
import CartEmpty from "./CartEmpty";

export default function Carts() {
  const GetCartData = useSelector((state) => state.cartSlice.carts);
  const IteritCartData =
    GetCartData &&
    GetCartData.map((product) => {
      return (
        <Cart
          count={product.product_count}
          key={product.id}
          name={product.product_name}
          price={product.product_price}
          id={product.product_id}
          img={product.product_img}
        />
      );
    });

  const Prices = [];
  const GetPrices = GetCartData.map((product) => {
    Prices.push(product.product_price * product.product_count);
  });

  const Counts = [];
  const GetCounts = GetCartData.map((product) => {
    Counts.push(product.product_count);
  });

  const CalcPrice = Prices.reduce((accumulator, currentval) => {
    return accumulator + currentval;
  }, 0);

  const CalcCounts = Counts.reduce((accumulator, currentval) => {
    return accumulator + currentval;
  }, 0);

  return (
    <>
      <Layout>
        {GetCartData.length ? (
          <div className="container">
            <div className="text-center mt-4 mb-2">
              <div className="inline-block">
                <div className="row">
                  <div className="col-xxl-9 col-xl-9 col-md-12 col-12">
                    <div className="shadow-md py-2">{IteritCartData}</div>
                  </div>
                  <div className="col-xxl-3 text-center col-xl-3 col-md-12 col-12">
                    <div className="inline-block w-80 shadow-md p-4">
                      <div className="text-right">
                        <p>تعداد نوع محصولات : {GetCartData.length}</p>
                      </div>
                      <div className="text-right">
                        <p>تعداد کل محصولات : {CalcCounts}</p>
                      </div>
                      <div className="mt-3 text-right">
                        <p>
                          جمع کل قیمت :{" "}
                          <CustomNumeralNumericFormat
                            suffix=" تومان "
                            value={CalcPrice}
                            thousandSeparator=","
                            className="text-red-500"
                          />
                        </p>
                      </div>
                      <div>
                        <button className="bg-blue-950 transition hover:bg-blue-900 mt-3 text-white px-5 py-2 rounded-md hover:">
                          ثبت سفارش
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <CartEmpty />
        )}
      </Layout>
    </>
  );
}
