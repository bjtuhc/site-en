import langCN from './lang/strings/cn';
import langEN from './lang/strings/en';

let lang = window.Lang || {};
export function getMessage(string, defaultString) {
    return lang[string] || defaultString || string;
}
export function getLocale() {
    return lang.locale || 'en';
}
export function toEN() {
  window.Lang = langEN;
  window.Lang.locale = 'en';
  lang = window.Lang;
}
export function toCN() {
  window.Lang = langCN;
  window.Lang.locale = 'cn';
  lang = window.Lang;
}
