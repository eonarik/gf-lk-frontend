const locales = {
  ru: [
    { normal: 'Январь', decl: 'Января', short: 'Янв' },
    { normal: 'Февраль', decl: 'Февраля', short: 'Фев' },
    { normal: 'Март', decl: 'Марта', short: 'Мар' },
    { normal: 'Апрель', decl: 'Апреля', short: 'Апр' },
    { normal: 'Май', decl: 'Мая', short: 'Май' },
    { normal: 'Июнь', decl: 'Июня', short: 'Июн' },
    { normal: 'Июль', decl: 'Июля', short: 'Июл' },
    { normal: 'Август', decl: 'Августа', short: 'Авг' },
    { normal: 'Сентябрь', decl: 'Сентября', short: 'Сен' },
    { normal: 'Октябрь', decl: 'Октября', short: 'Окт' },
    { normal: 'Ноябрь', decl: 'Ноября', short: 'Ноя' },
    { normal: 'Декабрь', decl: 'Декабря', short: 'Дек' },
  ],
  en: [
    { normal: 'January', decl: 'January', short: 'Jan' },
    { normal: 'February', decl: 'February', short: 'Feb' },
    { normal: 'March', decl: 'March', short: 'Mar' },
    { normal: 'April', decl: 'April', short: 'Apr' },
    { normal: 'May', decl: 'May', short: 'May' },
    { normal: 'June', decl: 'June', short: 'Jun' },
    { normal: 'July', decl: 'July', short: 'Jul' },
    { normal: 'August', decl: 'August', short: 'Aug' },
    { normal: 'September', decl: 'September', short: 'Sep' },
    { normal: 'Oktober', decl: 'Oktober', short: 'Okt' },
    { normal: 'November', decl: 'November', short: 'Nov' },
    { normal: 'December', decl: 'December', short: 'Dec' },
  ],
};

export default function (numberMonth, type = 'normal', lang = 'ru') {
  if (type && locales[lang][numberMonth] && locales[lang][numberMonth][type]) {
    return locales[lang][numberMonth][type];
  }
  return '';
}
