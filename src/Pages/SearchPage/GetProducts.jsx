import React from "react";
import { useSelector } from "react-redux";
import { selectAllProducts } from "../HomePage/ProductSlice";
import Product from "../../Components/Product/Product";

export default function GetProducts({ searchText }) {
  const data = useSelector(selectAllProducts);
  const filterByText =
    searchText != "" &&
    data.filter((product) => {
      return (
        product.category.includes(searchText) || product.name.includes(searchText)
      );
    });
  const IteritData =
    searchText == ""
      ? data.map((product) => {
          return (
            <div className="text-center col-12 col-md-6 col-xl-4 col-xxl-3 mt-3">
              <div className="inline-block">
                <Product
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  id={product.id}
                  img={product.img}
                />
              </div>
            </div>
          );
        })
      : filterByText.map((product) => {
          return (
            <div className="text-center col-12 col-md-4 col-xl-4 col-xxl-3 mt-3">
              <div className="inline-block">
                <Product
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  id={product.id}
                  img={product.img}
                />
              </div>
            </div>
          );
        });

  return (
    <div className="text-center mt-5">
      <div className="inline-block">
        <div className="row">{IteritData}</div>
      </div>
    </div>
  );
}
