import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppSocial from '../../components/appSocial/appSocial';
import Result from '../../assets/images/result.svg';
import Security from '../../assets/images/security.svg';
import Tool from '../../assets/images/tool.svg';
import AppButton from '../../components/appButton/appButton';
import { aboutPageText } from '../../constants/aboutPageText';
import OfferForm from '../../components/Forms/offerForm/offerForm';
import './aboutPage.scss';

function AboutPage(): React.ReactElement {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const goHome = () => navigate('/');
  return (
    <div className="about">
      <h1>{aboutPageText.title}</h1>
      <div className="about__content">
        {aboutPageText.longText}
        <br />
        <br />
        {aboutPageText.longText}
        <br />
        {aboutPageText.smallText}
      </div>
      <h2>{aboutPageText.h2}</h2>
      <h3>{aboutPageText.h3}</h3>
      <div className="about__descr">{aboutPageText.smallText}</div>
      <div className="about__wrapper">
        <div className="about__item">
          <div className="about__item_img">
            <Result />
          </div>
          <div className="about__item_title">{aboutPageText.itemTitle}</div>
          <div className="about__item_desc">{aboutPageText.itemText}</div>
        </div>
        <div className="about__item">
          <div className="about__item_img">
            <Security />
          </div>
          <div className="about__item_title">{aboutPageText.itemTitle}</div>
          <div className="about__item_desc">{aboutPageText.itemText}</div>
        </div>
        <div className="about__item">
          <div className="about__item_img">
            <Tool />
          </div>
          <div className="about__item_title">{aboutPageText.itemTitle}</div>
          <div className="about__item_desc">{aboutPageText.itemText}</div>
        </div>
        <div className="about__item">
          <div className="about__item_img">
            <Result />
          </div>
          <div className="about__item_title">{aboutPageText.itemTitle}</div>
          <div className="about__item_desc">{aboutPageText.itemText}</div>
        </div>
      </div>
      <OfferForm />
      <br />
      <br />
      <div className="about__btns">
        <AppButton text="Go Back" name="button" onClick={goBack} />
        <AppButton text="Go Home" name="button" onClick={goHome} />
      </div>
      <br />
      <br />
      <AppSocial />
    </div>
  );
}

export default AboutPage;
