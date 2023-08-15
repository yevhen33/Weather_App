import React, { useState, useEffect } from 'react';
import { saveOfferToLocalStorage } from '../../../services/handlerFormLocalStorage';
import './offerForm.scss';

function OfferForm(): React.ReactElement {
  const [name, setName] = useState('');
  const [msg, setMsg] = useState('');
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    if (name.length > 2 && msg.length > 5) setDisable(false);
  }, [name, msg]);

  const handlerName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value.trim());
  };
  const handlerMsg = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMsg(e.target.value.trim());
  };
  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = { name, msg };
    saveOfferToLocalStorage(value);
    setDisable(true);
    setName('');
    setMsg('');
  };

  return (
    <form className="offer" onSubmit={handlerSubmit}>
      <h2>send us your ideas</h2>
      <div className="offer__group">
        <label htmlFor="name">Full name*</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Minimum 2 characters to fill"
          value={name}
          onChange={handlerName}
        />
      </div>
      <div className="offer__group">
        <label htmlFor="text">Your message*</label>
        <textarea
          id="text"
          name="text"
          placeholder="Minimum 5 characters to fill"
          value={msg}
          onChange={handlerMsg}
        />
      </div>
      <button type="submit" className={disable ? 'button disable' : 'button'}>
        Send
      </button>
    </form>
  );
}

export default OfferForm;
