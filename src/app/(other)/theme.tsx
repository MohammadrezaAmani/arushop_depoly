import styled, { useTheme } from "styled-components";

export const theme = {
  colors: {
    primary: "#00bfd6",
    secondary: "#fb3449",
    background: "#f5f5f5",
    text: "#535353",
    border: "#e4e4e4",
    shadow: "0 2px 4px 0 rgb(0 0 0 / 3%)",
    icon: "#8d8d8d",
    whiteBackground: "#fff",
  },
  fonts: {
    default: "Arial, sans-serif",
  },
  sizes: {
    containerWidth: "1366px",
    sideBarWidth: "18%",
    offerImageSize: "180px",
  },
};

export const BackToTop = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: 20px 0;
`;

export const BackToTopLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BackToTopIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: $ ${({ theme }) => theme.colors.background};
  font-size: 12pt;
  padding: 10px;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  background-color: rgba(190, 190, 190, 0.41);
  margin: 0 10px;
`;

// Styled components
export const MainSection = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Article = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: ${({ theme }) => theme.sizes.containerWidth};
  margin: auto;
  margin-top: 20px;
`;

export const FirstCol = styled.div`
  width: 66.66%;
`;

export const SecondCol = styled.div`
  max-width: 33.33%;
`;

export const SecondColDiv = styled.div`
  width: 100%;
  height: 50%;
`;

export const SecondColImage = styled.img`
  width: 100%;
  height: auto;
  padding: 5px 10px;
  border-radius: 25px;
`;

export const SmallBanner = styled.div`
  width: 25%;
  padding: 20px 10px;
`;

export const SmallBannerImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 16px;
`;

export const SmallBannerTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  margin: 10px 0;
`;

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.background};
  padding: 10px;
  display: flex;
  justify-content: space-around;
`;

export const SideBarContainer = styled.div`
  width: ${({ theme }) => theme.sizes.sideBarWidth};
`;

export const SideBarItemContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.whiteBackground};
  box-shadow: 0 12px 12px 0 ${({ theme }) => theme.colors.shadow};
  border: 1px solid ${({ theme }) => theme.colors.border};
  margin: 0 0 10px;
  border-radius: 8px;
  width: 100%;
`;

export const SideBarItemContainerHr = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  margin: 7px 5px;
`;

export const SideBarTitle = styled.div`
  padding: 10px;
  font-size: 11pt;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
`;

export const Chevron = styled.div`
  color: ${({ theme }) => theme.colors.icon};
  font-size: 8pt;
  font-weight: 300;
  margin-left: 10px;
`;

export const SideBarCateTree = styled.div`
  padding: 5px 3px 20px;
`;

export const SideBarCateTreeP = styled.p`
  margin-right: 10px;
  margin-top: 8px;
  font-size: 10pt;
  color: ${({ theme }) => theme.colors.text};
`;

export const SideBarCateTreeDiv = styled.div`
  margin-right: 10px;
  margin-top: 5px;
`;

export const LastChild = styled.div`
  margin-right: 20px !important;
  margin-top: 5px;
`;

export const SearchSection = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding-bottom: 10px;
`;

export const SearchInput = styled.input`
  width: 100%;
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.inputBackground};
  padding: 10px 45px 14px 10px;
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    background: none;
  }

  &::placeholder {
    font-size: 8pt;
  }
`;

export const SearchIcon = styled.div`
  color: ${({ theme }) => theme.colors.icon};
  font-size: 18pt;
  margin-left: -35px;
  z-index: 99;
`;

export const BrandList = styled.div`
  max-height: 333px;
  overflow: auto;
`;

export const BrandSearchChevron = styled.div`
  position: absolute;
  left: 10%;
  margin-top: 5px;
  transition: transform 0.3s linear;
`;

export const SingleBrand = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  cursor: pointer;
  color: #3b3b3b;
  user-select: none;

  &:hover {
    background: ${({ theme }) => theme.colors.background};
  }
`;

export const SingleBrandInput = styled.input`
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

export const Checkmark = styled.div`
  display: inline-block;
  height: 20px;
  width: 20px;
  background-color: ${({ theme }) => theme.colors.whiteBackground};
  border: 1px solid ${({ theme }) => theme.colors.border};
  margin-right: 30px;
  border-radius: 4px;

  ${({ checked, theme }: any) =>
    checked &&
    `
    background: ${theme.colors.primary};
    border: 1px solid ${theme.colors.secondary};
  `}
`;

export const CheckmarkAfter = styled.div`
  position: relative;
  content: "";
  display: none;
  right: 4px;
  top: 1px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);

  ${({ checked }: any) =>
    checked &&
    `
    display: block;
  `}
`;

export const SingleBrandText = styled.p`
  margin-right: 20px;
`;

export const Toggle = styled.div`
  opacity: 0;
  max-height: 0;
  transition: max-height 0.5s, opacity 0.5s;

  &.open {
    opacity: 1;
    max-height: 500px;
    transition: max-height 0.8s, opacity 0.3s;
  }
`;

export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

export const SwitchContainerText = styled.p`
  margin-right: 10px;
  font-size: 11pt;
`;

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 22px;
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.background};
  transition: 0.4s;

  &::before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 4px;
    bottom: 3px;
    background-color: white;
    transition: 0.4s;
  }
`;

export const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${Slider} {
    background-color: #00bfd6;
  }

  &:focus + ${Slider} {
    box-shadow: 0 0 1px #2196f3;
  }

  &:checked + ${Slider}::before {
    transform: translateX(17px);
  }
`;

export const SliderRound = styled(Slider)`
  border-radius: 34px;

  &::before {
    border-radius: 50%;
  }
`;
export const ItemsContainer = styled.div`
  background: ${({ theme }) => theme.colors.whiteBackground};
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.03);
  border: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  flex-wrap: wrap;
`;

export const OffersItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.whiteBackground};
  margin: 15px;
  font-size: 4em;
  border-radius: 8px;
`;

export const OfferImageContainer = styled.div`
  width: 180px;
  height: 180px;
  margin: 20px auto;
`;

export const OfferImage = styled.img`
  max-width: 100%;
  height: auto;
`;

export const OfferTitle = styled.div`
  color: #535353;
  font-size: 11pt;
  max-width: 90%;
  margin: auto;
`;

export const OfferPriceSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  width: 90%;
  text-align: left;
  margin: 10px 0;
`;

export const OfferPriceDel = styled.del`
  color: #acacac;
  font-size: 11pt;
`;

export const Discount = styled.div`
  font-size: 11pt;
  color: ${({ theme }) => theme.colors.whiteBackground};
  background-color: ${({ theme }) => theme.colors.secondary};
  min-width: 43px;
  height: 23px;
  margin: 0 10px;
  padding: 4px 6px 1px;
  text-align: center;
  border-radius: 20px;
  margin-bottom: 3px;
  line-height: 1.375;
`;

export const FinalPrice = styled.div`
  width: 100%;
  color: #000;
  font-weight: 700;
  font-size: 16pt;
  line-height: 1.1;
  margin-top: 7px;
`;

export const FinalPriceSpan = styled.span`
  font-weight: 400;
  font-size: 11pt;
  display: inline-block;
  margin: 0 8px;
`;

export const Timer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  width: 90%;
  text-align: left;
  margin: 10px 0;
  color: #737373;
`;

export const TimerP = styled.p`
  direction: ltr;
  margin: 0 6px;
`;

export const TimerSvg = styled.svg`
  font-size: 13pt;
`;

export const SingleItem = styled.div`
  display: block;
  width: 25%;
  border: 1px solid #ebebeb;
  border-top: none;
  min-height: 424px;
  position: relative;
  cursor: pointer;

  &:hover {
    box-shadow: 0 2px 17px 0 rgba(0, 0, 0, 0.09);
  }
`;

export const RateContainer = styled.div`
  display: flex;
`;

export const RateStar = styled.div`
  color: #fac74b;
  font-size: 12pt;
  margin-right: 10px;
  margin-top: 2px;
`;

export const Vendor = styled.div`
  display: flex;
  position: absolute;
  bottom: 10px;
  right: 10px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: 10px;
  width: 90%;
  margin: auto;
  opacity: 0;
  transition: all 0.3s;

  ${SingleItem}:hover & {
    opacity: 1;
  }
`;

export const VendorIcon = styled.div`
  color: #8d8d8d;
  font-size: 16pt;
  margin-left: 10px;
`;

export const VendorP = styled.p`
  font-size: 11pt;
`;

/* Footer */
export const Footer = styled.footer`
  background: #eceff1;
  padding: 30px 41px 0;
`;

/* Icons Section */
export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1450px;
  padding-bottom: 10px;
  border-bottom: 1px solid #cfd8dc;
  margin: auto;
`;

export const SingleIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 16.5%;
  height: 100px;
  text-align: center;
`;

export const IconImage = styled.img`
  max-width: 20%;
  height: auto;
`;

export const IconText = styled.p`
  margin: 10px 0;
  color: #606060;
  font-size: 11pt;
  font-weight: 300;
`;

/* Links Section */
export const FooterLinks = styled.div`
  display: flex;
  max-width: 1450px;
  margin: auto;
  padding-bottom: 20px;
  border-bottom: 1px solid #cfd8dc;
`;

export const FooterCol = styled.div`
  width: 25%;
  padding: 10px;
  margin-top: 20px;
`;

export const ColTitle = styled.div`
  color: #4a5f73;
  margin: 10px 0;
  font-weight: 500;
  font-size: 13pt;
`;

export const FooterLink = styled.div`
  color: #4b4b4b;
  font-weight: 400;
  font-size: 10pt;
  line-height: 45px;
  cursor: pointer;
`;

export const FooterContact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

export const FooterForm = styled.form`
  display: flex;
  margin: 20px 0;
`;

export const FooterButton = styled.button`
  font-size: 1rem;
  line-height: 1.571;
  background-color: #00bfd6;
  text-align: center;
  width: 87px;
  border-radius: 8px 0px 0px 8px;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  padding: 11px 24px;
  color: ${({ theme }) => theme.colors.whiteBackground};
`;

export const FooterInput = styled.input`
  color: #717171;
  font-size: 1rem;
  line-height: 1.571;
  width: 100%;
  letter-spacing: -0.8px;
  border-radius: 0 8px 8px 0;
  background: #ffffff;
  border-width: 1px;
  border-style: solid;
  border-color: #c8c8c8;
  border-image: initial;
  padding: 11px 12px;

  &::placeholder {
    color: #979ba1;
  }
`;

export const FooterContactText = styled.p`
  color: #696969;
  font-size: 11pt;
  margin: 10px 0;
`;

export const FooterSocialIcons = styled.div`
  margin-top: 10px;
  font-size: 23pt;
  color: #979ba1;
`;

export const SocialIcon = styled.div`
  margin: 0 15px;
  cursor: pointer;
`;

/* Info */
export const FooterInfo = styled.div`
  display: flex;
  margin: auto;
  padding: 20px 0;
  max-width: 1450px;
  align-items: center;
  justify-content: space-between;
`;

export const InfoText = styled.p`
  font-size: 11pt;
  margin: 0 10px;
`;

export const FooterAppLink = styled.div`
  display: flex;
  margin-right: 30px;
`;

export const AppImage = styled.img`
  max-width: 100%;
  height: auto;
`;

/* About */
export const About = styled.div`
  background-color: #d7dee0;
  width: 100%;
  padding: 30px 41px 0;
`;

export const AboutContent = styled.div`
  display: flex;
`;

export const AboutText = styled.div`
  padding: 0 20px;
`;

export const AboutTitle = styled.div`
  font-size: 12pt;
  color: #5d5959;
  margin-bottom: 15px;
`;

export const AboutParagraph = styled.p`
  font-size: 10pt;
  color: #5d5959;
  font-weight: 300;
  line-height: 25px;
`;

export const WarrantsList = styled.ul`
  display: flex;
  list-style: none;
`;

export const WarrantItem = styled.li`
  margin-left: 8px;
  width: 150px;
  height: 140px;
  border-radius: 8px;
  background-color: #f0f0f0;
  border: 1px solid #e5e5ea;
  text-align: center;
`;

export const WarrantImage = styled.img`
  height: 130px;
`;

export const PartnersLogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px 30px 30px;
  margin-bottom: 30px;
  padding: 0 30px;
`;

export const PartnerLogo = styled.img`
  height: 30px;
`;

export const CopyRight = styled.div`
  padding: 30px 0 20px;
  border-top: 1px solid #b0bec5;
`;

export const CopyRightText = styled.p`
  margin: auto;
  font-size: 10pt;
  color: #5d5959;
`;

/* Container */
export const ContainerHeader = styled.div`
  min-width: 1100px;
  max-width: 2000px;
  position: relative;
  background-color: ${({ theme }) => theme.colors.whiteBackground};
  box-shadow: 0 7px 8px 0 rgba(0, 0, 0, 0.04);
  z-index: 100;
`;

/* Main Header */
export const MainHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.whiteBackground};
  z-index: 10;
  box-shadow: 0 7px 8px 0 rgba(0, 0, 0, 0.04);
`;

export const StickyHeader = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 99;
`;

export const LogoAndSearch = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoImage = styled.img`
  max-width: 110px;
  height: auto;
  margin-left: 24px;
  margin-right: 8px;
`;

export const SearchSectionHeader = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
`;

export const SearchInputHeader = styled.input`
  width: 100%;
  border: none;
  border-radius: 8px;
  background-color: #f0f0f1;
  padding: 14px 45px 14px 10px;

  &:focus {
    outline: none;
  }
`;

export const SearchIconHeader = styled.div`
  color: #a1a3a8;
  font-size: 18pt;
  margin-left: -35px;
  z-index: 99;
`;

/* Action Buttons */
export const ActionButtons = styled.div`
  display: flex;
  justify-content: space-around;
  flex-basis: 300px;
  align-items: center;
`;

export const LoginButton = styled.div`
  border: 1px solid #e0e0e2;
  border-radius: 8px;
  padding: 10px 12px;
  display: flex;
  align-items: center;
  font-size: 0.857rem;
  line-height: 1.833;
  cursor: pointer;
  color: #616161;
`;

export const UserIcon = styled.div`
  color: #a1a3a8;
  font-size: 18pt;
  margin-left: 7px;
`;

export const Divider = styled.div`
  width: 1px;
  height: 30px;
  background-color: #e0e0e2;
`;

export const CartIcon = styled.div`
  color: #a1a3a8;
  font-size: 18pt;
  cursor: pointer;
`;

/* NavBar */
export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  z-index: 9;
  padding: 10px 15px;
  box-shadow: 0 7px 8px 0 rgba(0, 0, 0, 0.04);
  background-color: ${({ theme }) => theme.colors.whiteBackground};
  transition: 0.3s;
`;

export const Hidden = styled.div`
  margin-top: -10px;
  opacity: 0;
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
`;

export const NavItem = styled.li`
  padding: 7px 12px 0;
  font-weight: 700;
  font-size: 10pt;
  color: #616161;
  cursor: pointer;

  &:hover::after {
    width: 100%;
  }
`;

export const CatHolder = styled.div`
  margin-left: 15px;
`;

export const NavItemIcon = styled.span`
  display: inline-block;
  padding-right: 6px;
`;

export const SubCatHeader = styled.div`
  position: absolute;
  top: 0;
  right: 200px;
  display: none;
  padding-right: 20px;
  width: 80%;
  padding: 20px;
`;

export const SubCatColsHeader = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const SubCatColHeader = styled.div`
  width: 25%;
`;

export const SubCatLinkHeader = styled.p`
  color: #7a8a99;
  line-height: 28px;
  font-size: 10pt;
  font-weight: 300;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const NavItemHoverAfter = styled.div`
  content: "";
  display: block;
  margin: auto;
  height: 2px;
  width: 0px;
  background: tomato;
  transition: all 0.2s linear;
  margin-top: 10px;
`;

export const CatDropDown = styled.div`
  display: none;
  position: absolute;
  margin-top: 12px;
  background-color: ${({ theme }) => theme.colors.whiteBackground};
  width: 95%;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 0 0 10px 10px;

  ${NavItem}:hover & {
    display: block;
  }
`;

export const CatListItemHeader = styled.div`
  border-left: 1px solid #f0f0f1;
  padding: 16px 20px;
  width: 200px;

  &:hover {
    color: ${({ theme }) => theme.colors.background};
    background: #f5f5f5;
    border-radius: 0 5px 5px 0;
    padding: 15px 20px;
    border-top: 1px solid #f0f0f1;
    border-bottom: 1px solid #f0f0f1;
  }
`;

export const CatListItemActive = styled(CatListItemHeader)`
  color: ${({ theme }) => theme.colors.background};
  background: #f5f5f5;
  border-radius: 0 5px 5px 0;
  padding: 15px 20px;
  border-top: 1px solid #f0f0f1;
  border-bottom: 1px solid #f0f0f1;
`;

export const SubCat = styled.div`
  position: absolute;
  top: 0;
  right: 200px;
  display: none;
  padding-right: 20px;
  width: 80%;
  padding: 20px;
`;

export const SubCatItem = styled.div`
  color: #616161;
  line-height: 28px;
  font-size: 10pt;
  font-weight: 300;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary} !important;
  }
`;

/* Drop Down */
export const DropDownContent = styled.div`
  display: none;
  position: absolute;
  margin-top: 12px;
  margin-right: -10%;
  background-color: ${({ theme }) => theme.colors.background};
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  transition: all 2s;
  border-radius: 0 0 10px 10px;
`;

export const DropDownItem = styled.div`
  padding: 8px 12px;
  font-size: 10pt;
  color: #616161;
  cursor: pointer;

  &:hover {
    background-color: #ebebeb;
  }
`;

/* Digi Plus */
export const DigiPlusContainer = styled.div`
  display: flex;
  max-width: 650px;
  cursor: auto;
  padding: 10px;
`;

export const DigiPlusBanner = styled.img`
  max-width: 350px;
  height: auto;
  border-radius: 10px;
`;

export const DigiPlusLogo = styled.img`
  max-width: 60px;
  height: auto;
  margin: 0 10px;
`;

export const DigiPlusSeparator = styled.hr`
  width: 90%;
  margin: auto;
  color: #a1a3a8;
  margin: 10px 0;
`;

export const DigiPlusText = styled.p`
  margin: 10px 0;
`;

/* Digi Club */
export const DigiClubLogo = styled.img`
  max-width: 90px;
  height: auto;
`;

export const DigiClubCounter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TimerHeader = styled.div`
  direction: ltr;
`;

/* NavBar SubCate */
export const CatTitle = styled.p`
  font-size: 10pt !important;
  color: #616161 !important;
  font-weight: 600 !important;
  line-height: 32px !important;
`;

export const CatTitleSpan = styled.span`
  display: inline-block;
  padding-right: 6px;
`;

export const SubCatCols = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const SubCatCol = styled.div`
  width: 25%;
`;

export const SubCatDescription = styled.p`
  line-height: 28px;
  font-size: 10pt;
  font-weight: 300;
`;

export const SubCatLink = styled(SubCatDescription)`
  color: #7a8a99;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary}; !important;
  }
`;

export const ContainerHome = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Main = styled.div`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterHome = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
`;

export const Description = styled.p`
  line-height: 1.5;
  font-size: 1.5rem;
`;

export const Code = styled.code`
  background: #fafafa;
  border-radius: 5px;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
`;

export const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
  margin-top: 3rem;
`;

export const Card = styled.a`
  margin: 1rem;
  flex-basis: 45%;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;

  &:hover,
  &:focus,
  &:active {
    color: #0070f3;
    border-color: #0070f3;
  }

  h3 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }

  p {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.5;
  }
`;

export const Logo = styled.img`
  height: 1em;
`;

export const TwoSlidersContainer = styled.div`
  display: flex;
  margin: 20px auto;
  max-width: 1366px;
`;

export const BigSlider = styled.div`
  width: 83.33%;
  padding-left: 20px;
`;

export const SmallSlider = styled.div`
  width: 16.66%;
`;

export const CommonSlidersContainer = styled.div`
  display: flex;
  margin: 20px auto;
  max-width: 1366px;
`;

export const CommonSlider = styled.div`
  width: 100%;
`;

export const ProductPage = styled.div`
  background: ${({ theme }) => theme.colors.whiteBackground};
`;

export const Meta = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  font-size: 10pt;
  color: #6a6a6a;
`;

export const MetaLink = styled.span`
  cursor: pointer;

  &:hover {
    font-weight: 700;
  }
`;

export const StoreIcon = styled.img`
  margin-right: 10px;
`;

export const FirstSection = styled.div`
  display: flex;
`;

/* Gallery */

export const Gallery = styled.div`
  display: flex;
  color: red;
  padding: 20px;
`;

export const IconsContainerProduct = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Icon = styled.div`
  color: #424750;
  margin: 8px auto;
  cursor: pointer;
  position: relative;
  font-size: 16pt;
`;

export const Tooltip = styled.div`
  display: none;
  background-color: #6f6f6f;
  color: ${({ theme }) => theme.colors.whiteBackground};
  text-align: center;
  padding: 8px 15px;
  border-radius: 6px;
  position: absolute;
  top: -5px;
  right: 110%;
  z-index: 1;
  font-size: 11pt;
  margin-right: 10px;
  width: max-content;

  &::after {
    content: " ";
    position: absolute;
    top: 50%;
    left: 100%;
    margin-top: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent transparent #6f6f6f;
  }
`;

export const BigPic = styled.div`
  margin-right: 30px;
`;

export const SmallPicsContainer = styled.div`
  display: flex;
  margin-right: 20px;
`;

export const SmallPicPreview = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.background};
  margin: 3px 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

export const SmallPicImage = styled.img`
  max-width: 95%;
  height: auto;
  filter: blur(0.7px);

  ${SmallPicPreview}:hover & {
    filter: none;
  }
`;

export const ThreeDots = styled.div`
  z-index: 10;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 27pt;
  color: ${({ theme }) => theme.colors.whiteBackground};
  background-color: #959595a1;
  border-radius: 50%;
  padding: 6px;
`;

/* Modal */

export const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: none;
  top: 0;
  background-color: #6f6f6f2c;
  z-index: 100;

  &.showModal {
    display: block;
  }
`;

export const Modal = styled.div`
  width: 800px;
  max-height: 95vh;
  background: ${({ theme }) => theme.colors.whiteBackground};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 20px;
  padding: 10px 0px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.background};
`;

export const ModalTitle = styled.p`
  color: #0099bd;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: 32px;
    width: 100%;
    height: 4px;
    background-color: #0099bd;
    border-radius: 4px 4px 0 0;
    display: block;
    margin-top: 10px;
  }
`;

export const CloseIcon = styled.div`
  cursor: pointer;
`;

/* Modal Gallery */

export const ModalGallery = styled.div`
  display: flex;
  margin-top: 30px;
`;

export const ModalBigPic = styled.div`
  margin: 10px;
  border-radius: 10px;
`;

export const ModalSmallPicContainer = styled.div`
  h3 {
    margin: 10px;
  }
`;

export const ModalSmallPicSelect = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ModalSmallPic = styled.div`
  width: 80px;
  height: 80px;
  margin: 3px 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

export const ModalSmallPicImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.background};
  padding: 5px;

  &.active {
    border: 2px solid #0099bd;
  }
`;

/* Product Informations */

export const ProductInfo = styled.div`
  display: flex;
  max-width: 40%;
`;

export const Details = styled.div`
  h2 {
    font-size: 14pt;
    font-weight: 500;
    padding-bottom: 20px;
    border-bottom: 1px solid #dfdfdf;
  }
`;

export const Statics = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
`;

export const StaticsText = styled.p`
  font-size: 11pt;

  svg {
    margin-left: 4px;
    color: #fac74b;
  }

  a {
    color: #0fabc6;
  }
`;

export const Features = styled.div`
  margin-top: 15px;
`;

export const FeaturesTitle = styled.h4`
  color: #55565a;
  margin: 40px 0px 10px;

  svg {
    color: #dfdfdf;
    font-size: 7pt;
    margin-left: 10px;
  }
`;

export const FeaturesText = styled.p`
  line-height: 35px;
`;

/* Sell Information */

export const SellInfo = styled.div`
  width: 350px;
  background-color: #f5f5f5;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  margin: 20px;
  padding: 20px 5px;
`;

export const SellInfoHeader = styled.div`
  margin-right: 7px;
`;

export const SellInfoRow = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px;
  padding: 20px 0;
  border-bottom: 1px solid #dfdfdf;

  svg {
    color: #424750;
    margin-left: 20px;
    font-size: 13pt;
  }
`;

export const SellInfoText = styled.p`
  color: #424750;
  font-weight: 700;
  font-size: 12pt;
  line-height: 30px;
`;

export const SecondaryText = styled.p`
  color: #8d9096;
  font-size: 10pt;
`;

export const PriceInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px;
  padding: 20px 0;

  p {
    color: #2e7b32;
    display: flex;
    align-items: center;

    svg {
      margin-left: 20px;
      font-size: 15pt;
    }
  }
`;

export const Price = styled.p`
  text-align: left;
  color: #424750;
  font-weight: 800;
  margin-left: 10px;
  font-size: 17pt;

  span {
    font-size: 11pt;
  }
`;

/* BuyBox */

export const BuyBox = styled.div`
  max-width: 20%;
  border-radius: 8px;
  border: 1px solid #e0e0e2;
  position: sticky;
  top: 150px;
  padding-bottom: 10px;
  align-self: flex-start;
`;

export const BuyBoxTitle = styled.div`
  display: flex;
  margin: 10px 10px 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e0e0e2;
  justify-content: space-between;
  align-items: center;
`;

export const BuyBoxTitleText = styled.h4`
  max-width: 70%;
  font-size: 11pt;
  color: #515151;
`;

export const BuyBoxPic = styled.div`
  width: 80px;
  height: 80px;
`;

export const BuyBoxPicImage = styled.img`
  max-width: 100%;
  height: auto;
`;

export const BuyBoxRow = styled.div`
  display: flex;
  align-items: center;
  margin: 0 20px;
`;

export const BuyBoxRowText = styled.p`
  font-size: 10pt;
  font-weight: 300;
`;

export const BuyBoxRowSvg = styled.div`
  font-size: 10pt;
  margin-left: 10px;
`;
/* First Section Slider */

export const FirstSectionSlider = styled.div`
  position: relative;
`;

export const Slide = styled.div`
  opacity: 0;
  transition-duration: 2s ease;
  transition-delay: 1s;

  &.slideActive {
    opacity: 1;
    transition: all 2s ease;
  }
`;

export const SliderImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 25px;
`;

export const LeftArrow = styled.div`
  position: absolute;
  top: 50%;
  left: 32px;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.whiteBackground};
  z-index: 10;
  cursor: pointer;
  user-select: none;
`;

export const RightArrow = styled.div`
  position: absolute;
  top: 50%;
  right: 32px;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.whiteBackground};
  z-index: 10;
  cursor: pointer;
  user-select: none;
`;

/* Special Offer Slider */

export const OffersItemSlider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.whiteBackground};
  margin: 15px;
  font-size: 4em;
  border-radius: 8px;
  cursor: pointer;
`;

export const OfferImageContainerSlider = styled.div`
  width: 180px;
  height: 180px;
  margin: 20px auto;

  img {
    max-width: 100%;
    height: auto;
  }
`;

export const OfferTitleSlider = styled.p`
  font-size: 10pt;
`;

export const OfferPriceSectionSlider = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  width: 90%;
  text-align: left;
  margin: 10px 0;
`;

export const OfferPriceSectionDel = styled.del`
  color: #acacac;
  font-size: 11pt;
`;

export const DiscountSlider = styled.span`
  font-size: 11pt;
  color: ${({ theme }) => theme.colors.whiteBackground};
  background-color: ${({ theme }) => theme.colors.secondary};
  min-width: 43px;
  height: 23px;
  margin: 0 10px;
  padding: 4px 6px 1px;
  text-align: center;
  border-radius: 20px;
  margin-bottom: 3px;
  line-height: 1.375;
`;

export const FinalPriceSlider = styled.p`
  width: 100%;
  color: #000;
  font-weight: 700;
  font-size: 16pt;
  line-height: 1.1;
  margin-top: 7px;

  span {
    font-weight: 400;
    font-size: 11pt;
    display: inline-block;
    margin: 0 8px;
  }
`;

export const TimerSlider = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  width: 90%;
  text-align: left;
  margin: 10px 0;
  color: #737373;
`;

export const TimerPSlider = styled.p`
  direction: ltr;
  margin: 0 6px;
`;

/* Common Slider */

export const CommonContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.whiteBackground};
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%);
  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 9px 33px 11px;
`;

export const HeaderSpace = styled.div`
  width: 78%;
  padding-bottom: 10px;
  border-bottom: 1px solid #acacac;
`;

export const CommonTitle = styled.div`
  width: 20%;
  padding-bottom: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
  font-weight: 700;
  font-size: 14pt;
`;

export const CommonItem = styled.div`
  display: block;
  margin: 20px 10px;
  border-radius: 8px;
  transition-duration: 0.1s;

  &:hover {
    box-shadow: 0 0 10px 0 rgb(0 0 0 / 10%);
    transform: translateY(-2px);
    cursor: pointer;
  }
`;

/* Single Item Slider */

export const SingleItemSlider = styled.div`
  display: block;
  width: 100%;
  height: 100%;
`;

export const SingleContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.whiteBackground};
  border-radius: 8px;
  padding: 5px;
  border: 1px solid rgba(0, 191, 214, 0.3);
  height: 100%;
`;

export const SingleTitle = styled.p`
  color: #737373;
  font-size: 11pt;
  text-align: center;
  margin: 10px 0;
`;

export const ProgressBar = styled.div`
  height: 1px;
  background: linear-gradient(270deg, #ffd3db, #fb3449);
  animation: load 7s normal backwards;
  margin: 20px 10px;

  @keyframes load {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }
`;

export const ContainerRed = styled.div`
  background: ${({ theme }) => theme.colors.background};
`;

export const ContainerGreen = styled.div`
  background: #6bb927;
`;

export const MainSlider = styled.div`
  display: flex;
  max-width: 1366px;
  margin: auto;
  padding: 35px 16px;
`;

export const FirstColSlider = styled.div`
  margin: 0 44px;
  max-width: 170px;
`;

export const FirstColImg = styled.img`
  max-width: 100%;
  height: auto;
`;

export const Button = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 9px 16px;
  font-size: 14px;
  font-size: 1rem;
  line-height: 1.571;
  font-weight: 700;
  border: 1px solid ${({ theme }) => theme.colors.whiteBackground};
  color: ${({ theme }) => theme.colors.whiteBackground};
  border-radius: 10px;
  margin: 10px auto;
`;

export const ButtonIcon = styled.div`
  font-size: 10pt;
`;

export const SlideContainer = styled.div`
  width: calc(100% - 258px);
`;
