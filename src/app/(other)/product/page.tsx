import React from "react";

//Components
import BackToTop from "@/components/digi/BackToTop";
import Footer from "@/components/digi/Footer";
import Gallery from "@/components/digi/ProductPage/Gallery";
import ProductDetails from "@/components/digi/ProductPage/ProductDetails";
import SellDetails from "@/components/digi/ProductPage/SellDetails";
import VendorsList from "@/components/digi/ProductPage/VendorsList";
import ProductDetailsAll from "@/components/digi/ProductPage/ProductDetailsAll";

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore } from "@fortawesome/free-solid-svg-icons";
//Styles
import Style from "@/styles/Product.module.css";

const product = () => {
  return (
    <>
      <div className={Style.productPage}>
        <div className={Style.meta}>
          <p>
            <span>آریوشاپ</span> / <span>خانه و آشپزخانه</span> /{" "}
            <span>صوتی و تصویری</span> / <span>کنسول بازی</span> /{" "}
            <span>کنسول خانگی</span>
          </p>
          <p>
            کالای خود را در آریوشاپ بفروشید
            <FontAwesomeIcon icon={faStore} className={Style.storeIcon} />
          </p>
        </div>
        <div className={Style.firstSection}>
          <Gallery />
          <ProductDetails />
          <SellDetails />
        </div>
        <VendorsList />
        <ProductDetailsAll />
      </div>
      <BackToTop />
      <Footer />
    </>
  );
};

export default product;

// import React from "react";

// function page() {
//   return <div></div>;
// }

// export default page;
