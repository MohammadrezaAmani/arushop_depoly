import React from "react";
import Link from "next/link";

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

//Styles
import Styles from "@/styles/BackToTop.module.css";
import { backToTopMessages } from "@/translation/translations";
const BackToTop = () => {
  return (
    <div className={Styles.backToTop}>
      <Link href="#top">
        <div className={Styles.backToTopIcon}>
          <FontAwesomeIcon icon={faChevronUp} />
        </div>
        <p>{backToTopMessages.back_to_top["fa"]}</p>
      </Link>
    </div>
  );
};

export default BackToTop;
