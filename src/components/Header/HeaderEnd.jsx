// Импорт PropTypes из библиотеки prop-types
import PropTypes from 'prop-types';

// Компонент отвечает за вывод правой части шапки Header
export const HeaderEnd = ({ elem }) => {
    // Деструктуризация данных из props
    const { logo, title, url, text } = elem[0];
    return (
        <div className='header-footer'>
            {/* Отображение логотипа */}
            <img src={logo} alt='какая-то лэйбл' className='img-item' />
            {/* Отображение заголовка с ссылкой */}
            <a href={url}>{title}</a>
            {/* Отображение текста */}
            <p className='text'>{text}</p>
        </div>
    );
};

// Проверка типов props
HeaderEnd.propTypes = {
    elem: PropTypes.shape({
        logo: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    }).isRequired
}
