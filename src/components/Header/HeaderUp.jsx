// Импорт PropTypes из библиотеки prop-types
import PropTypes from 'prop-types';

// Компонент отвечает за вывод одиночных ссылок и одиночных children
export const HeaderUp = ({ item, children }) => {
    // Деструктуризация данных из props
    const { title, url } = item;

    return (
        <div className='links'>
            {/* Отображение ссылки */}
            <a href={url}>{title}</a>
            {/* Отображение children */}
            {children}
        </div>
    );
};

// Проверка типов props
HeaderUp.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
    }).isRequired,
    children: PropTypes.any,
}
