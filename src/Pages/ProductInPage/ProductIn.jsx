import React from "react";
import ReactImageMagnify from "react-image-magnify";
import { useParams } from "react-router-dom";
import Layout from "../../Components/Layout/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBox,
  faCheck,
  faRing,
  faShield,
  faTicket,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { selectAllProducts } from "../HomePage/ProductSlice";
import ProductInData from "./ProductInData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import Product from "../../Components/Product/Product";
export default function ProductIn() {
  const param = useParams();
  const SlugId = param.slug;
  const Alldata = useSelector(selectAllProducts);
  const GetDataById = Alldata.filter((product) => {
    return product.id == parseInt(SlugId);
  });
  const IteritData = GetDataById.map((product) => {
    return (
      <ProductInData
        key={product.id}
        img={product.img}
        name={product.name}
        price={product.price}
        id={product.id}
      />
    );
  });

  const rndIds = [];
  for (let index = 0; index < 6; index++) {
    const rndnum = Math.round(Math.random() * 14) + 1;
    rndIds.push(rndnum);
  }
  const rndproducts = Alldata.filter((product) => {
    return rndIds.includes(product.id);
  });
  const IteritProducts = rndproducts.map((product) => {
    return (
      <SwiperSlide key={product.id} className="flex justify-center">
        <Product
          id={product.id}
          name={product.name}
          price={product.price}
          img={product.img}
        />
      </SwiperSlide>
    );
  });
  return (
    <Layout>
      <div className="container mt-20">{IteritData}</div>
      <div className="container">
      <div className="mt-0">
        <div>
          <b className="text-2xl inline-block mt-40 2xl:mt-20 md:mt-20 xl:mt-20">
             دیگر محصولات
          </b>
        </div>
        <Swiper
          autoplay={true}
          spaceBetween={30}
          slidesPerView={4}
          className="py-2 px-2 text-center mt-5"
          scrollbar={{ draggable: true }}
          breakpoints={{
            1880: {
              width: 1500,
              slidesPerView: 5,
            },
            500: {
              width: 500,
              slidesPerView: 2,
            },
            312: {
              width: 312,
              slidesPerView: 1,
            },
            280: {
              width: 280,
              slidesPerView: 1,
            },
          }}
        >
          {IteritProducts}
        </Swiper>
      </div>
      </div>
    </Layout>
  );
}
