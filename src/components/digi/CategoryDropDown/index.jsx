import React, { useState } from "react";
import Link from "next/link";

//Components
import Digital from "./Digital";
import Car from "./Car";

//Styles
import Style from "@/styles/Header.module.css";

const CategoryDropDown = (props) => {
  const [active, setActive] = useState(true);

  const activate = () => {
    setActive(false);
  };

  const deactivate = () => {
    setActive(true);
  };

  return (
    <div className={Style.catContent}>
      <div
        className={
          active === true ? Style.catListItemActive : Style.catListItem
        }
      >
        <Link href={"/category"}>کالای دیجیتال</Link>
        <div
          className={Style.subCat}
          style={{ display: `${active === true ? "block" : "none"}` }}
        >
          <Digital />
        </div>
      </div>
      <div
        className={Style.catListItem}
        onMouseOver={activate}
        onMouseLeave={deactivate}
      >
        <Link href={"/category"}>خودرو</Link>
        <div className={Style.subCat}>
          <Car />
        </div>
      </div>
      <div
        className={Style.catListItem}
        onMouseOver={activate}
        onMouseLeave={deactivate}
      >
        <Link href={"/category"}>مد و پوشاک</Link>
        <div className={Style.subCat}>
          <Digital />
        </div>
      </div>
      <div
        className={Style.catListItem}
        onMouseOver={activate}
        onMouseLeave={deactivate}
      >
        <Link href={"/category"}>اسباب بازی، کودک و نوزاد</Link>
        <div className={Style.subCat}>
          <Car />
        </div>
      </div>
      <div
        className={Style.catListItem}
        onMouseOver={activate}
        onMouseLeave={deactivate}
      >
        <Link href={"/category"}>خوردنی و آشامیدنی</Link>
        <div className={Style.subCat}>
          <Digital />
        </div>
      </div>
      <div
        className={Style.catListItem}
        onMouseOver={activate}
        onMouseLeave={deactivate}
      >
        <Link href={"/category"}>زیبایی و سلامت</Link>
        <div className={Style.subCat}>
          <Car />
        </div>
      </div>
      <div
        className={Style.catListItem}
        onMouseOver={activate}
        onMouseLeave={deactivate}
      >
        <Link href={"/category"}>خانه و آشپزخانه</Link>
        <div className={Style.subCat}>
          <Digital />
        </div>
      </div>
      <div
        className={Style.catListItem}
        onMouseOver={activate}
        onMouseLeave={deactivate}
      >
        <Link href={"/category"}>کتاب، لوازم التحریر و هنر</Link>
        <div className={Style.subCat}>
          <Car />
        </div>
      </div>
      <div
        className={Style.catListItem}
        onMouseOver={activate}
        onMouseLeave={deactivate}
      >
        <Link href={"/category"}>ورزش و سفر</Link>
        <div className={Style.subCat}>
          <Digital />
        </div>
      </div>
    </div>
  );
};

export default CategoryDropDown;
