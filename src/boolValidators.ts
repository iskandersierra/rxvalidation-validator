import { BoolValidator } from "rxvalidation";
import validator from "validator";

export type AlphaLocale = ValidatorJS.AlphaLocale;
export type AlphanumericLocale = ValidatorJS.AlphanumericLocale;
export type MobilePhoneLocale = ValidatorJS.MobilePhoneLocale;

export const stringBoolValidators = {
  contains: (elem: string): BoolValidator =>
    (value: string) =>
      validator.contains(value, elem),

  equals: (elem: string): BoolValidator =>
    (value: string) =>
      validator.equals(value, elem),

  isAlpha: (locale: AlphaLocale = "en-US"): BoolValidator =>
    (value: string) =>
      validator.isAlpha(value, locale),

};
