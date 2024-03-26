import React, { Component, useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";
import Link from "next/link";
import PropTypes from "prop-types";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
//Helper
// import farsiNumber from "@/Helper/FarsiNumber";

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

import { CustomCarousel } from "@/components/digi/Sliders/bases";
import Styles from "@/styles/Slides.module.css";

function farsiNumber(n) {
  return n;
}
class SpecialOffersSlider extends Component {
  constructor(props) {
    super(props);
    this.breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
      { width: 850, itemsToShow: 4 },
      { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
      { width: 1450, itemsToShow: 5 },
      { width: 1750, itemsToShow: 6 },
    ];

    this.state = {
      offers: [],
      loaded: false,
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/offers")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ offers: data });
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching offers:", error);
      });
    this.setState({ loaded: true });
  }

  render() {
    const { offers } = this.state;

    return (
      <CustomCarousel
        Item={Item}
        data={offers}
        breakPoints={this.breakPoints}
        style={Styles.offersItem}
      />
    );
  }
}

// Item Component

const Item = (data) => {
  const offer = data.product;
  const [time, setTime] = useState(12);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    timer(time);

    return () => setTime(0);
  }, [time]);

  const finalPrice = (price, discount) => {
    let result = price - price * (discount / 100);
    return farsiNumber(result);
  };

  const timer = (time) => {
    let miliSeconds;
    miliSeconds = time * (60 * 60 * 1000);
    setInterval(() => {
      miliSeconds = miliSeconds - 1000;

      setHours(
        farsiNumber(
          Math.floor((miliSeconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        )
      );
      setMinutes(
        farsiNumber(Math.floor((miliSeconds % (1000 * 60 * 60)) / (1000 * 60)))
      );
      setSeconds(farsiNumber(Math.floor((miliSeconds % (1000 * 60)) / 1000)));
    }, 1000);
  };
  return (
    <>
      <div className={Styles.offerImageContainer}>
        <img
          src={offer.images ? "http://127.0.0.1:8000/" + offer.image : ""}
          alt=""
        />
      </div>
      <div>
        <p className={Styles.offerTitle}>{offer.name}</p>
      </div>
      <div className={Styles.offerPriceSection}>
        <del>{farsiNumber(offer.price)}</del>
        <div className={Styles.discount}>
          {`${farsiNumber(offer.discount)}%`}
        </div>
        <div className={Styles.finalPrice}>
          {finalPrice(offer.price, offer.discount)}
          <span>تومان</span>
        </div>
      </div>
      <div className={Styles.timer}>
        <p>{`${hours} : ${minutes} : ${seconds}`}</p>
        <FontAwesomeIcon icon={faClock} />
      </div>
    </>
  );
};

SpecialOffersSlider.propTypes = {
  offers: PropTypes.array,
};

Item.propTypes = {
  offer: PropTypes.object,
};

export default SpecialOffersSlider;
