import React, { useState } from "react";
import Layout from "../../Components/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { RequestToGetData, selectAllProducts } from "../HomePage/ProductSlice";
import GetProducts from "./GetProducts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";

export default function Search() {
  const [searchText, setsearchText] = useState("");
  const dispatch = useDispatch();
  dispatch(RequestToGetData());

  return (
    <Layout>
      <div className="container">
        <div className="text-center">
          <div className="mt-5">
            <input
              type="text"
              placeholder="جستجو..."
              className="shadow-md w-1/2 rounded-md h-16 px-2 outline-none border-1"
              value={searchText}
              onChange={(e) => setsearchText(e.target.value)}
            />
          </div>
        </div>
        {/* <div className="mt-5 cursor-pointer">
          <span>فیلتر</span>
          <FontAwesomeIcon icon={faBarsStaggered} />
        </div>
        <div className="text-center">
          <div className="inline-block">
            <div className="inline-block">
              <label>جواهر</label>
              <input type="checkbox" name="" id="" />
            </div>
            <div className="inline-block mx-2">
              <label>طلا</label>
              <input type="checkbox" name="" id="" />
            </div>
            <div className="inline-block">
              <label>نقره</label>
              <input type="checkbox" name="" id="" />
            </div>
          </div>
        </div> */}
        <GetProducts searchText={searchText} />
      </div>
    </Layout>
  );
}
