import React from "react";
import Carousel from "react-elastic-carousel";
import Link from "next/link";
import PropTypes from "prop-types";
import Image from "next/image";
//Helper
import farsiNumber from "@/Helper/FarsiNumber";

//Styles
import Styles from "@/styles/Slides.module.css";

const SingleItemSlider = ({ data }) => {
  return (
    <div className={Styles.singleContainer}>
      <div className={Styles.singleTitle}>
        <p>پیشنهادات لحظه ای برای شما</p>
        <div className={Styles.progressBar}></div>
      </div>
      <div>
        <Carousel
          itemsToShow={1}
          isRTL={true}
          pagination={false}
          showArrows={false}
          enableAutoPlay={true}
        >
          {data.offers.map((offer) => (
            <Link href="/product" key={offer.id} className={Styles.singleItem}>
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
        <Image width={200} height={100} src={offer.src} alt="" />
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

SingleItemSlider.propTypes = {
  data: PropTypes.object,
};

Item.propTypes = {
  offer: PropTypes.object,
};

export default SingleItemSlider;
