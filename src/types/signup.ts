import { CountryData } from "react-phone-input-2";

export type TSignup = {
  email: string;
  phone: string;
  certification: string;
  country: CountryData;
  id: string;
  password: string;
  checkPassword: string;
  secondPwd: string[];
};
