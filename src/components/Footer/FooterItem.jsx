// Импорт PropTypes из библиотеки prop-types
import PropTypes from 'prop-types';

// Компонент отвечает за отображение первой колонки Footer
export const FooterItem = ({ data }) => {
    // Деструктуризация данных из props
    const { title, content } = data;
    return (
        <div className='footer-item'>
            {/* Отображение заголовка */}
            <div className='main-footer-title'>{title}</div>
            {/* Отображение контента */}
            <div className='content'>{content}</div>
        </div>
    );
};

// Проверка типов props
FooterItem.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
    })
}
