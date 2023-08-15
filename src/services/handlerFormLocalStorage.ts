import { IAppForm, IOfferForm } from '../types/forms.type';

export function saveFormToLocalStorage(values: IAppForm) {
  try {
    const serialisedForm = JSON.stringify(values);
    localStorage.setItem('mainForm', serialisedForm);
  } catch (e) {
    console.warn(e);
  }
}

export function saveOfferToLocalStorage(values: IOfferForm) {
  try {
    const serialisedForm = JSON.stringify(values);
    localStorage.setItem('offerForm', serialisedForm);
  } catch (e) {
    console.warn(e);
  }
}
