import React from "react";

//Components
import Slider from "@/components/digi/Sliders/FisrtSectionSlider";
import Image from "next/image"
//Styles
import Styles from "@/styles/Banner.module.css";

const FisrtSection = () => {
  return (
    <div className={Styles.mainSection}>
      <article>
        <div className={Styles.firstCol}>
          <Slider />
        </div>
        <div className={Styles.secondCol}>
          <div>
            <img  src="/img/Banners/smallBanner01.jpg" alt="محصولات دارویی" title="محصولات دارویی" />
          </div>
          <div>
            <img  src="/img/Banners/smallBanner02.jpg" alt="دیجی استایل" title="دیجی استایل" />
          </div>
        </div>
      </article>
    </div>
  );
};

export default FisrtSection;
