// Diese Validator prüft, ob es sich bei E-Mail von der Loginpage um eine Adresse mit gültigem Format handelt.
import { FormControl } from '@angular/forms';
export class EmailValidator {
static isValid(control: FormControl) {
const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
.test(
control.value
);
if (re) {
return null;
}
return {
invalidEmail: true
}
}}