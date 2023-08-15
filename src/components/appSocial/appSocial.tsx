import React from 'react';
import Fb from '../../assets/social/fb.svg';
import Inst from '../../assets/social/inst.svg';
import Tg from '../../assets/social/tg.svg';
import './appSocial.scss';

const socialLinks = [
  {
    href: 'https://www.facebook.com',
    icon: <Fb />
  },
  {
    href: 'https://www.instagram.com',
    icon: <Inst />
  },
  {
    href: 'https://web.telegram.org',
    icon: <Tg />
  }
];

export default function AppSocial(): React.ReactElement {
  return (
    <div className="social">
      <h3>we are in social networks:</h3>
      <div className="social__wrapper">
        {socialLinks.map((item, i) => (
          <a key={i} href={item.href} target="_blank" rel="noreferrer" className="social__link">
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
