import React from 'react';
import { IButtonProps } from './appButton.type';
import './appButton.scss';

const AppButton: React.FunctionComponent<IButtonProps> = ({ name, text, onClick }) => {
  const handleClick = () => {
    onClick();
  };
  return (
    <button className={name} onClick={handleClick}>
      {text}
    </button>
  );
};

export default AppButton;
