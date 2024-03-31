// Импорт PropTypes из библиотеки prop-types
import PropTypes from 'prop-types';

// Компонент отвечает за вывод курса валют, также за статьи в формате 'Главная идея' -> название конкретной статьи
export const TitleItem = ({ element }) => {
    // Деструктуризация данных из props
    const { title, item } = element;

    // Определение стилей для элементов в зависимости от типа item
    let itemStyle;
    let titleStyle;
    if (typeof item === 'string') {
        itemStyle = 'item-style';
        titleStyle = '';
    } else {
        itemStyle = 'currency-curs';
        titleStyle = 'currency-title';
    }

    return (
        <div className='currency-box'>
            {/* Отображение названия */}
            <div className={titleStyle}>{title}</div>
            {/* Отображение элемента */}
            <div className={itemStyle}>{item}</div>
        </div>
    );
};

// Проверка типов props
TitleItem.propTypes = {
    element: PropTypes.shape({
        title: PropTypes.string.isRequired,
        item: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ])
    }).isRequired
}
