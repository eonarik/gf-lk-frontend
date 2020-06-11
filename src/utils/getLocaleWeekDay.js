const locales = {
  ru: [
    { normal: 'Воскресенье', short: 'Вс' },
    { normal: 'Понедельник', short: 'Пн' },
    { normal: 'Вторник', short: 'Вт' },
    { normal: 'Среда', short: 'Ср' },
    { normal: 'Четверг', short: 'Чт' },
    { normal: 'Пятница', short: 'Пт' },
    { normal: 'Суббота', short: 'Сб' },
  ],
  en: [
    { normal: 'Sunday', short: 'Su' },
    { normal: 'Monday', short: 'Mo' },
    { normal: 'Tuesday', short: 'Tu' },
    { normal: 'Wednesday ', short: 'We' },
    { normal: 'Thursday', short: 'Th' },
    { normal: 'Friday', short: 'Fr' },
    { normal: 'Saturday', short: 'Sa' },
  ],
};

export default function (dayNumber, type = 'normal', lang = 'ru') {
  if (type && locales[lang][dayNumber] && locales[lang][dayNumber][type]) {
    return locales[lang][dayNumber][type];
  }
  return '';
}
