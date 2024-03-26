"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingCart,
  faUser,
  faList,
  faPercentage,
  faAward,
  faInfinity,
} from "@fortawesome/free-solid-svg-icons";

import CategoryDropDown from "./CategoryDropDown/index";

import Style from "@/styles/Header.module.css";

import { Config } from "@/translation/config";
import { HeaderMessages } from "@/translation/translations";

import Image from "next/image";

const Header = (props) => {
  const [isSticky, setSticky] = useState(false);
  const [scrollPos, setScrollPos] = useState(13);
  const [showNavBar, setShowNavBar] = useState(true);
  const [lang, setLang] = useState("fa");
  const ref = useRef(null);
  const handleScroll = () => {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    setSticky(st > 0 ? true : false);
    if (st > scrollPos) {
      setShowNavBar(false);
    } else if (st < scrollPos) {
      setShowNavBar(true);
    }
    setScrollPos(st);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div className={Style.container} ref={ref}>
      <div
        id="top"
        className={`${Style.headerSection} ${isSticky ? Style.sticky : ""}`}
      >
        <div className={Style.mainHeader}>
          <div className={Style.logoAndSerach}>
            <Link href="/">
              <div className={Style.logo}>
                <Image
                  src={Config.icon[lang]}
                  alt="لوگوی آریو شاپ"
                  width={100}
                  height={100}
                />
              </div>
            </Link>

            <div className={Style.searchSection}>
              <FontAwesomeIcon icon={faSearch} className={Style.serachIcon} />
              <input
                className={Style.searchInput}
                type="text"
                placeholder={HeaderMessages.search[lang]}
              />
            </div>
          </div>
          <div className={Style.actionButtons}>
            <Link href={"/authentication/"}>
              <div className={Style.LoginButton}>
                <FontAwesomeIcon icon={faUser} className={Style.userIcon} />
                {HeaderMessages.login[lang]}
              </div>
            </Link>
            <div className={Style.devider}></div>
            <Link href={"/dashboard/"}>
              <div className={Style.cartIcon}>
                <FontAwesomeIcon icon={faShoppingCart} />
              </div>
            </Link>
          </div>
        </div>

        {/* Navigation Section */}
        <div className={`${Style.navBar} ${showNavBar ? "" : Style.hidden}`}>
          <div>
            <ul className={Style.navList}>
              <li className={`${Style.catHolder} ${Style.navItem}`}>
                <Link href="/category">
                  <FontAwesomeIcon icon={faList} />
                  {HeaderMessages.goods_category[lang]}
                </Link>
                <div className={Style.catDropDown}>
                  <CategoryDropDown />
                </div>
              </li>
              <div className={Style.devider}></div>
              <li className={Style.navItem}>
                <Link href="#">
                  <FontAwesomeIcon icon={faPercentage} />
                  {HeaderMessages.offers[lang]}
                </Link>
              </li>
              <li className={Style.navItem}>
                <Link href="/about">
                  <FontAwesomeIcon icon={faAward} />
                  {HeaderMessages.about_us[lang]}
                </Link>
              </li>
              <li className={Style.navItem}>
                <Link href="/contact">{HeaderMessages.contact_us[lang]}</Link>
                <div className={Style.dropDownContent}></div>
              </li>
              <li className={Style.navItem}>
                <Link href="/faq">
                  <FontAwesomeIcon icon={faInfinity} />
                  {HeaderMessages.faq[lang]}
                </Link>
                <div className={Style.dropDownContent}></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
