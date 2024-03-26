"use client";
import SpecialOffers from "@/components/digi/SpecialOffers";
import FourBanners from "@/components/digi/BannersSection/FourBannersSection";
import CommonSlider from "@/components/digi/Sliders/CommonSlider";
import SingleItemSlider from "@/components/digi/Sliders/SingleItemSlider";
import BackToTop from "@/components/digi/BackToTop";

import Styles from "@/styles/Home.module.css";

import offers from "@/Data/SpecialOffers.json";
import superMarket from "@/Data/SuperMarketOffers.json";
import charger from "@/Data/Chargers.json";
import single from "@/Data/Single.json";
import mobile from "@/Data/Mobile.json";

export default function Home() {
  return (
    <>
      <SpecialOffers data={offers} />
      <FourBanners />
      <SpecialOffers data={superMarket} />
      <div className={Styles.twoSlidersContainer}>
        <div className={Styles.bigSlider}>
          <CommonSlider data={charger} />
        </div>
        <div className={Styles.smallSlider}>
          <SingleItemSlider data={single} />
        </div>
      </div>
      <FourBanners />
      <div className={Styles.commonSlidersContainer}>
        <CommonSlider data={mobile} />
      </div>
      <div className={Styles.commonSlidersContainer}>
        <CommonSlider data={charger} />
      </div>
      <BackToTop />
    </>
  );
}
