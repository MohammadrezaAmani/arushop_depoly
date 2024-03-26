import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

//Components
import Slider from "./Sliders/SpecialOffersSlider.jsx";

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import Styles from "@/styles/SpecialOffers.module.css";
import { siteConfig } from "@/config/site";
import { SpecialMessages } from "@/translation/translations";
const SpecialOffers = ({ data }: any) => {
  return (
    <section
      className={
        data.color === "red" ? Styles.containerRed : Styles.containerGreen
      }
    >
      <div className={Styles.main}>
        <div className={Styles.firstCol}>
          <Link href="/offers">
            <img src={data.mainPic} alt="" />
          </Link>
          <Link href="/offers">
            <div className={Styles.btn}>
              <p>{SpecialMessages.show_all["fa"]}</p>
              <div>
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  className={Styles.btnIcon}
                />
              </div>
            </div>
          </Link>
        </div>
        <div className={Styles.slideContainer}>
          <Slider offers={data.offers} />
        </div>
      </div>
    </section>
  );
};

SpecialOffers.propTypes = {
  data: PropTypes.object,
};

export default SpecialOffers;
