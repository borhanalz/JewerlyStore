import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDeleteLeft,
  faRecycle,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import CustomNumeralNumericFormat from "../../Components/Price/Price";

export default function Cart({ name, id, price, img, count }) {
  const dispatch = useDispatch();

  const HndleDeleteByID = (id) => {
    dispatch({
      type: "cartslice/deletebyid",
      payload: id,
    });
  };

  return (
    <div>
      <div className="border-b px-4 cart cursor-pointer py-3">
        <div className="float-right">
          <div className="">
            <img src={`./assets/${img}`} className=" w-24 my-3 mx-3" />
          </div>
          <div className="py-3 px-22 ">
            <div>
              <button
                onClick={() =>
                  dispatch({ type: "cartslice/increaseCount", payload: id })
                }
                className="mx-2 border px-2 rounded-md transition hover:bg-blue-950 hover:text-white"
              >
                +
              </button>
              <span>
                <CustomNumeralNumericFormat value={count} />
              </span>
              <button
                onClick={() =>
                  dispatch({ type: "cartslice/decreaseCount", payload: id })
                }
                className="mx-2 border px-2 rounded-md transition hover:bg-blue-950 hover:text-white"
              >
                -
              </button>
            </div>
          </div>
        </div>
        <div className="inline-block float-right mx-0">
          <div className="mt-4 w-72 text-right">{name}</div>
          <div className="text-xs text-right mt-3 sm:w-44 md:w-56 xl:w-56 2xl:w-56">
            <p className="">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
            </p>
          </div>
        </div>
        <div className="clearfix"></div>
        <div className="clearfix"></div>
        <div className="text-right">
          <div className="inline-block mt-0 sm:mt-4">
            <CustomNumeralNumericFormat
              prefix="قیمت : "
              value={price * count}
              thousandSeparator=","
              suffix=" تومان "
            />
          </div>
          <div
            className="inline-block mx-4"
            onClick={() => HndleDeleteByID(id)}
          >
            <FontAwesomeIcon
              icon={faTrash}
              className="text-red-500 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
