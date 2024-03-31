// Импорт PropTypes из библиотеки prop-types
import PropTypes from 'prop-types';

// Компонент отвечает за вывод новостной части header
export const HeaderNews = ({ item }) => {
    // Деструктуризация данных из props
    const { logo, title, url } = item;
    return (
        <div className='article'>
            {/* Отображение логотипа */}
            <img src={logo} alt='какой-то логотип' className='image' />
            {/* Отображение заголовка с ссылкой */}
            <a href={url} className='news-title'>
                {title}
            </a>
        </div>
    );
};

// Проверка типов props
HeaderNews.propTypes = {
    item: PropTypes.shape({
        logo: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
    }).isRequired
}
