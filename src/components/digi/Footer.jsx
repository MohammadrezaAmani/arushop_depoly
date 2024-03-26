import React from "react";
import Link from "next/link";
// import Image from "next/img";
// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

//Styles
import Style from "../../styles/Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={Style.footer}>
        <section className={Style.iconsContainer}>
          <div className={Style.singleIcon}>
            <img style={{ maxWidth: "30%" }} src="/img/Icons/02.svg" alt="" />
            <p>تحویل اکسپرس</p>
          </div>
          <div className={Style.singleIcon}>
            <img src="/img/Icons/04.svg" alt="" />
            <p>پشتیبانی 24 ساعته</p>
          </div>
          <div className={Style.singleIcon}>
            <img src="/img/Icons/03.svg" alt="" />
            <p>پرداخت در محل</p>
          </div>
          <div className={Style.singleIcon}>
            <img src="/img/Icons/05.svg" alt="" />
            <p>هفت روز ضمانت بازگشت</p>
          </div>
          <div className={Style.singleIcon}>
            <img src="/img/Icons/01.svg" alt="" />
            <p>ضمانت اصل‌ بودن کالا</p>
          </div>
        </section>

        <section className={Style.footerLinks}>
          <div className={Style.footerCol}>
            <p className={Style.colTitle}>راهنمای خرید از آریوشاپ</p>
            <p className={Style.footerLink}>نحوه ثبت سفارش</p>
            <p className={Style.footerLink}>رویه ارسال سفارش</p>
            <p className={Style.footerLink}>شیوه‌های پرداخت</p>
          </div>
          <div className={Style.footerCol}>
            <p className={Style.colTitle}>خدمات مشتریان</p>
            <p className={Style.footerLink}>پاسخ به پرسش های متداول</p>
            <p className={Style.footerLink}>رویه های بازگرداندن کالا</p>
            <p className={Style.footerLink}>شرایط استفاده</p>
            <p className={Style.footerLink}>حریم خصوصی</p>
            <p className={Style.footerLink}>گزارش باگ</p>
          </div>
          <div className={Style.footerCol}>
            <p className={Style.colTitle}>با آریوشاپ</p>
            <p className={Style.footerLink}>اتاق خبر آریوشاپ</p>
            <p className={Style.footerLink}>فروش در آریوشاپ</p>
            <p className={Style.footerLink}>فرصت‌های شغلی</p>
            <p className={Style.footerLink}>تماس با آریوشاپ</p>
            <p className={Style.footerLink}>درباره آریوشاپ</p>
            <p className={Style.footerLink}>راهنمای هویت بصری</p>
          </div>
          <div className={Style.footerCol}>
            <div className={Style.footerContact}>
              <p>از تخفیف‌ها و جدیدترین‌های آریوشاپ باخبر شوید:</p>
              <div className={Style.footerForm}>
                <input type="text" placeholder="آدرس ایمیل خود را وارد کنید" />
                <button type="submit">ارسال</button>
              </div>
              <p>آریوشاپ را در شبکه‌های اجتماعی دنبال کنید:</p>
              <div className={Style.footerSocialIcons}>
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faLinkedin} />
                <FontAwesomeIcon icon={faFacebook} />
              </div>
            </div>
          </div>
        </section>

        <section className={Style.footerInfo}>
          <p>هفت روز هفته ، ۲۴ ساعت شبانه‌روز پاسخگوی شما هستیم</p>
          <p>
            شماره تماس :
            <Link href="tel:02161930000">
              <>۶۱۹۳۰۰۰۰ - ۰۲۱</>
            </Link>
          </p>
          <p>
            آدرس ایمیل :
            <Link href="mailto:info@digikala.com">
              <>info@arushop.com</>
            </Link>
          </p>
          <div className={Style.footerAppLink}>
            <div className={Style.app}>
              <img src="/img/App/01.png" alt="" />
            </div>
            <div className={Style.app}>
              <img
                style={{ height: "100%", marginTop: "-4px" }}
                src="/img/App/02.svg"
                alt=""
              />
            </div>
            <div className={Style.app}>
              <img src="/img/App/03.svg" alt="" />
            </div>
            <div className={Style.app}>
              <img src="/img/App/04.png" alt="" />
            </div>
          </div>
        </section>
      </div>

      <section className={Style.about}>
        <div>
          <div className={Style.text}>
            <h1 className={Style.aboutTitle}>
              فروشگاه اینترنتی آریوشاپ، بررسی، انتخاب و خرید آنلاین
            </h1>
            <p>
              آریوشاپ به عنوان یکی از قدیمی‌ترین فروشگاه های اینترنتی با بیش از
              یک دهه تجربه، با پایبندی به سه اصل، پرداخت در محل، 7 روز ضمانت
              بازگشت کالا و تضمین اصل‌بودن کالا موفق شده تا همگام با فروشگاه‌های
              معتبر جهان، به بزرگ‌ترین فروشگاه اینترنتی ایران تبدیل شود. به محض
              ورود به سایت آریوشاپ با دنیایی از کالا رو به رو می‌شوید! هر آنچه
              که نیاز دارید و به ذهن شما خطور می‌کند در اینجا پیدا خواهید کرد.
            </p>
          </div>
          <div className={Style.warrants}>
            <ul>
              <li>
                <img src="/img/Warrants/01.png" alt="" />
              </li>
              <li>
                <img src="/img/Warrants/02.png" alt="" />
              </li>
              <li>
                <img src="/img/Warrants/01.png" alt="" />
              </li>
            </ul>
          </div>
        </div>
        {/* <div className={Style.partnersLogo}>
          <div>
            <img src="/img/Logo/01.svg" alt="" />
          </div>
          <div>
            <img src="/img/Logo/02.svg" alt="" />
          </div>
          <div>
            <img style={{ height: "25px" }} src="/img/Logo/03.svg" alt="" />
          </div>
          <div>
            <img src="/img/Logo/04.svg" alt="" />
          </div>
          <div>
            <img src="/img/Logo/05.svg" alt="" />
          </div>
          <div>
            <img src="/img/Logo/06.svg" alt="" />
          </div>
        </div> */}

        <div className={Style.copyRight}>
          <p>
            استفاده از مطالب فروشگاه اینترنتی آریوشاپ فقط برای مقاصد غیرتجاری و
            با ذکر منبع بلامانع است. کلیه حقوق این سایت متعلق به شرکت نوآوران فن
            آوازه (فروشگاه آنلاین آریوشاپ) می‌باشد.
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;
