import {
  BoolValidator, SyncValidator, MessageValidator, Validator,
  ofBoolValidator, ofMessageValidator, ofSyncValidator, ofThrowValidator,
} from "rxvalidation";
import {
  stringBoolValidators,
  AlphaLocale, AlphanumericLocale, MobilePhoneLocale,
} from "./boolValidators";

export const stringValidation = {
  contains: (elem: string): Validator =>
    ofBoolValidator
      (v => "Value must contain subs-string: " + JSON.stringify(elem))
      (stringBoolValidators.contains(elem)),

  equals: (elem: string): Validator =>
    ofBoolValidator
      (v => "Value must be equal to: " + JSON.stringify(elem))
      (stringBoolValidators.equals(elem)),

  isAlpha: (locale: AlphaLocale = "en-US"): Validator =>
    ofBoolValidator
      (v => "Value must only contain alphabetical characters")
      (stringBoolValidators.isAlpha(locale)),
};
