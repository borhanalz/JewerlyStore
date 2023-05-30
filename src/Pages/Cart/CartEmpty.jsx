import React from "react";

export default function CartEmpty() {
  return (
    <div className="text-center my-32">
      <img
        src="./assets/cartemptysvg.svg"
        className="w-72 sm:w-64 inline-block"
      />
      <p className="mt-5">سبد خرید شما خالی می باشد</p>
    </div>
  );
}
