import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image"
import toFarsiNumber from "@/Helper/FarsiNumber";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGifts, faFlag, faGift } from "@fortawesome/free-solid-svg-icons";

//StylesImage
import Style from "@/styles/Header.module.css";

const DigiClubDropDown = () => {
  const [remainTime, setRemainTime] = useState(0);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    timer(remainTime);

    return () => setRemainTime(0);
  }, [remainTime]);

  const timer = (time) => {
    time !== 0 &&
      setInterval(() => {
        let now = new Date().getTime();
        let distance = time - now;

        setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
        setHours(
          Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        );
        setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
        setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
      }, 1000);
  };

  return (
    <>
      <div className={Style.digiPlus}>
        <div style={{ width: "300px", padding: "0 10px" }}>
          <p>
            <Image width={200} height={100} 
              className={Style.DigiClubLogo}
              src="/DigiClub/DigiClubLogo.svg"
              alt=" لوگوی دیجی کلاب"
            />
          </p>
          <p style={{ fontSize: "12pt" }}>
            <Link href="#">
              صفحه اصلی دیجی کلاب <span>&#10097;</span>
            </Link>
          </p>
          <div style={{ marginTop: "10px", color: "#616161" }}>
            <Link href="#">
              <FontAwesomeIcon icon={faGifts} />
              اطلاعات بیشتر و عضویت
            </Link>
          </div>
          <div style={{ marginTop: "10px", color: "#616161" }}>
            <Link href="#">
              <FontAwesomeIcon icon={faFlag} />
              ماموریت های دیجی کلابی
            </Link>
          </div>
          <hr />
          <div className={Style.digiClubCounter}>
            <Link href="#">
              <FontAwesomeIcon icon={faGift} />
              قرعه کشی
            </Link>
            <p className={Style.timer}>{`${toFarsiNumber(
              days
            )} : ${toFarsiNumber(hours)} : ${toFarsiNumber(
              minutes
            )} : ${toFarsiNumber(seconds)}`}</p>
          </div>
        </div>
        <div>
          <Image width={200} height={100} 
            className={Style.DigiPlusBanner}
            src="/img/DigiClub/DigiClubBanner.jpg"
            alt="دیجی کلاب"
          />
        </div>
      </div>
    </>
  );
};

export default DigiClubDropDown;
