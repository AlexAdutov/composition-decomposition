// Получение текущей даты
const date = new Date();

// Массив с названиями месяцев
const month = [
    'январь',
    'февраль',
    'март',
    'апрель',
    'май',
    'июнь',
    'июль',
    'август',
    'сентябрь',
    'октябрь',
    'ноябрь',
    'декабрь',
];

// Форматирование текущей даты в виде "день месяца год"
const newDate = `${date.getDate()} ${
    month[date.getMonth()]
} ${date.getFullYear()}`;

// Экспорт данных для компонента Header
export const dataHeader = {
    links: [
        {
            title: 'Сейчас в России',
            url: '',
        },
        {
            title: 'В Германии',
            url: '',
        },
        {
            title: 'Рекомендуем',
            url: '',
        },
    ],
    news: [
        {
            logo: 'https://wikizilla.org/w/images/1/1f/Universal.png',
            title: 'Путин упростил получение автомобильных номеров',
            url: '',
        },
        {
            logo: 'https://wikizilla.org/w/images/1/1f/Universal.png',
            title: 'В команде Зеленского раскрыли план реформ на Украине',
            url: '',
        },
        {
            logo: 'https://wikizilla.org/w/images/1/1f/Universal.png',
            title: 'Турпомощь" прокомментировала гибель десятков россиян в Анталье',
            url: '',
        },
        {
            logo: 'https://wikizilla.org/w/images/1/1f/Universal.png',
            title: 'Суд закрыл дело демпартии США против России',
            url: '',
        },
        {
            logo: 'https://wikizilla.org/w/images/1/1f/Universal.png',
            title: 'На Украине призвали создать ракеты для удара по Москве',
            url: '',
        },
    ],
    endHeader: [
        {
            logo: 'https://i.pinimg.com/originals/dc/a0/81/dca081e9d499f481f1c56375a6953641.jpg',
            title: 'Работа над ошибками',
            url: '#',
            text: 'Смотрите на Яндекс и запоминайте',
        },
    ],
    // Дата
    newDate,
    // Курсы валют
    currency: [
        {
            title: 'USD',
            item: 91,
        },
        {
            title: 'EUR',
            item: 101,
        },
        {
            title: 'НЕФТЬ',
            item: 76,
        },
    ],
};
