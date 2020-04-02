import { IRegular } from "../types";

export default {
  cyrillic: /^[а-яА-ЯЁё ]+$/,
  latin: /^[a-zA-Z ]+$/,
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  number: /^[0-9]+$/,
  any: /^[\s\S]+$/,
  cyrillicAndNumber: /^[а-яА-ЯЁё0-9\\.\\, ]+$/,
  latinAndNumber: /^[a-zA-Z0-9]+$/,
  passport: /^[a-zA-Z0-9]{8,9}$/,
  identityCard: /^[0-9]{9}$/,
  residencePermit: /^[a-zA-Z0-9]{9,14}$/
} as IRegular;
