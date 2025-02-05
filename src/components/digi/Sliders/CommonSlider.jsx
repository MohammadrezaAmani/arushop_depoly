import React from "react";
import Carousel from "react-elastic-carousel";
import Link from "next/link";
import PropTypes from "prop-types";
import Image from "next/image"

//Helper
import farsiNumber from "@/Helper/FarsiNumber";

//Styles
import Styles from "@/styles/Slides.module.css";

const CommonSlider = ({ data }) => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 5 },
    { width: 1150, itemsToShow: 5, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];

  return (
    <div className={Styles.commonContainer}>
      <div className={Styles.header}>
        <div className={Styles.commonTitle}>
          <p>{data.title}</p>
        </div>
        <div className={Styles.headerSpace}></div>
      </div>
      <div className={Styles.commonSlider}>
        <Carousel breakPoints={breakPoints} isRTL={true} pagination={false}>
          {data.products.map((offer) => (
            <Link href="/product" key={offer.id} className={Styles.commonItem}>
                <Item offer={offer} />
            </Link>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

const Item = ({ offer }) => {
  return (
    <>
      <div className={Styles.offerImageContainer}>
        <Image width={200} height={100}  src={offer.src} alt="" />
      </div>
      <div>
        <p className={Styles.offerTitle}>{offer.name}</p>
      </div>
      <div className={Styles.offerPriceSection}>
        <div className={Styles.finalPrice}>
          {farsiNumber(offer.price)}
          <span>تومان</span>
        </div>
      </div>
    </>
  );
};

CommonSlider.propTypes = {
  data: PropTypes.object,
};

Item.propTypes = {
  offer: PropTypes.object,
};

export default CommonSlider;
