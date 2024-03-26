import styled from "styled-components";

// Styled component for the main section
const MainSection = styled.section`
  background-color: #f5f5f5;
`;

// Styled component for the article inside main section
const MainSectionArticle = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1366px;
  margin: auto;
  margin-top: 20px;
`;

// Styled component for the first column
const FirstCol = styled.div`
  width: 66.66%;
`;

// Styled component for the second column
const SecondCol = styled.div`
  max-width: 33.33%;
`;

// Styled component for the div inside second column
const SecondColDiv = styled.div`
  width: 100%;
  height: 50%;
`;

// Styled component for the images inside second column div
const SecondColImg = styled.img`
  width: 100%;
  height: auto;
  padding: 5px 10px;
  border-radius: 25px;
`;

// Styled component for the small banner
const SmallBanner = styled.div`
  width: 25%;
  padding: 20px 10px;
`;

// Styled component for the images inside small banner
const SmallBannerImg = styled.img`
  width: 100%;
  height: auto;
  border-radius: 16px;
`;

const FourBannersSection = () => {
  return (
    <div className={Styles.mainSection}>
      <article>
        <div className={Styles.smallBanner}>
          <img src="/img/Banners/smallBanner03.jpg" alt="" />
        </div>
        <div className={Styles.smallBanner}>
          <img src="/img/Banners/smallBanner04.jpg" alt="" />
        </div>
        <div className={Styles.smallBanner}>
          <img src="/img/Banners/smallBanner05.jpg" alt="" />
        </div>
        <div className={Styles.smallBanner}>
          <img src="/img/Banners/smallBanner06.jpg" alt="" />
        </div>
      </article>
    </div>
  );
};

const fbs = () => {
  return (
    <MainSection>
      <MainSectionArticle>
        <FirstCol>
          <SecondCol>
            <SecondColDiv>
              <SecondColImg src="/img/Banners/bigBanner01.jpg" alt="" />
            </SecondColDiv>
            <SecondColDiv>
              <SecondColImg src="/img/Banners/bigBanner02.jpg" alt="" />
            </SecondColDiv>
          </SecondCol>
        </FirstCol>
        <SecondCol>
          <SmallBanner>
            <SmallBannerImg src="/img/Banners/smallBanner03.jpg" alt="" />
          </SmallBanner>
          <SmallBanner>
            <SmallBannerImg src="/img/Banners/smallBanner04.jpg" alt="" />
          </SmallBanner>
          <SmallBanner>
            <SmallBannerImg src="/img/Banners/smallBanner05.jpg" alt="" />
          </SmallBanner>
          <SmallBanner>
            <SmallBannerImg src="/img/Banners/smallBanner06.jpg" alt="" />
          </SmallBanner>
        </SecondCol>
      </MainSectionArticle>
    </MainSection>
  );
};
export default fbs;
