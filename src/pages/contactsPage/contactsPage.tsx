import React from 'react';
import Circle from '../../assets/images/circle.svg';
import { contactPageText } from '../../constants/contactPageText';
import AppForm from '../../components/Forms/appForm/appForm';
import AppSocial from '../../components/appSocial/appSocial';
import './contactsPage.scss';

function ContactsPage(): React.ReactElement {
  return (
    <div className="contact">
      <h1>{contactPageText.title}</h1>
      <div className="contact__text">{contactPageText.longText}</div>
      <AppForm />
      <h2>{contactPageText.subtitle}</h2>
      <div className="contact__text">{contactPageText.smallText}</div>
      <AppSocial />
      <div className="contact__bg">
        <Circle />
      </div>
    </div>
  );
}

export default ContactsPage;
