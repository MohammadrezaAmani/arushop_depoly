import React from 'react';
import Image from "next/image"

//Styles
import Styles from "@/styles/Banner.module.css";

const FourBannersSection = () => {
    return (
        <div className={Styles.mainSection}>
            <article>
                <div className={Styles.smallBanner}>
                    <img  src="/img/Banners/smallBanner03.jpg" alt=""/>
                </div>
                <div className={Styles.smallBanner}>
                    <img  src="/img/Banners/smallBanner04.jpg" alt=""/>
                </div>
                <div className={Styles.smallBanner}>
                    <img  src="/img/Banners/smallBanner05.jpg" alt=""/>
                </div>
                <div className={Styles.smallBanner}>
                    <img  src="/img/Banners/smallBanner06.jpg" alt=""/>
                </div>
            </article>
        </div>
    )
}

export default FourBannersSection
