import { IAppForm } from '../../../types/forms.type';
import * as Yup from 'yup';

export const formSchema: Yup.SchemaOf<IAppForm> = Yup.object({
  name: Yup.string()
    .min(2, 'Minimum 2 characters to fill')
    .required('Required field!')
    .trim('Remove extra spaces')
    .strict(),
  email: Yup.string()
    .email('Wrong email address')
    .required('Required field!')
    .trim('Remove extra spaces')
    .strict(),
  random: Yup.number()
    .required('Required field!')
    .min(1, 'At least 1')
    .positive('Only positive numbers')
    .integer('Only intreger numbers'),
  rating: Yup.string().required('Select one of the items'),
  text: Yup.string().min(10, 'At least 10 characters').trim('Remove extra spaces').strict(),
  terms: Yup.boolean().required('Consent required').oneOf([true], 'Consent required')
});
