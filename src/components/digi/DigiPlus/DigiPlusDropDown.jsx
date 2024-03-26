import React from "react";
import Link from "next/link";
import Image from "next/image"

//Styles
import Style from "@/styles/Header.module.css";

const DigiPlusDropDown = () => {
  return (
    <>
      <div className={Style.digiPlus}>
        <div>
          <p>
            خدمات ویژه کاربران
            <img 
              className={Style.DigiPlusLogo}
              src="/img/DigiPlus/DigiPlusLogo.svg"
              alt=" لوگوی دیجی پلاس"
            />
          </p>
          <p>
            ارسال رایگان بدون محدودیت قیمت، هدیه نقدی و بازگشت کالا تا ۳۰ روز پس
            از تحویل
          </p>
          <p>
            <Link href="#" className="blueLink">
              اطلاعات بیشتر و عضویت <span>&#10097;</span>
            </Link>
          </p>
          <hr />
          <p>
            <Link href="#">
              کالاهای
              <img 
                className={Style.DigiPlusLogo}
                src="/img/DigiPlus/DigiPlusLogo.svg"
                alt=" لوگوی دیجی پلاس"
              />
            </Link>
          </p>
        </div>
        <div>
          <img 
            className={Style.DigiPlusBanner}
            src="/img/DigiPlus/DigiPlusBanner.jpg"
            alt="دیجی پلاس"
          />
        </div>
      </div>
    </>
  );
};

export default DigiPlusDropDown;
