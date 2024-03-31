// Импорт компонента HeaderUp из его файла
import { HeaderUp } from '../Header/HeaderUp';
// Импорт компонента TitleItem из его файла
import { TitleItem } from '../Header/TitliItem';
// Импорт PropTypes из библиотеки prop-types
import PropTypes from 'prop-types';

// Отображает список ссылок, поле поиска, элементы заголовков
export const Body = ({ data }) => {
    // Извлечение ссылок и элементов из данных
    const { links, items } = data;
    return (
        <div className='main-wrapper'>
            {/* Отображение заголовков */}
            <div className='main-title'>
                {/* Отображение компонентов HeaderUp для каждой ссылки */}
                {links.map((item) => {
                    return <HeaderUp item={item} key={item.title} />;
                })}
            </div>
            {/* Поле поиска */}
            <div className='writing-field'>
                <img
                    className='img-find'
                    src='https://www.pngplay.com/wp-content/uploads/13/Vertical-Keyboard-Transparent-Background.png'
                    alt=''
                />
                <button className='btn-find'>Найти</button>
            </div>
            {/* Элементы заголовков */}
            <div className='find-item'>
                {/* Отображение компонентов TitleItem для каждого элемента заголовка */}
                {items.map((item) => {
                    return <TitleItem element={item} key={item.title} />;
                })}
            </div>
            {/* Рекламный банер */}
            <div className='main-img'>Какая-то картинка с рекламой</div>
        </div>
    );
};

// Проверка типов props
Body.propTypes = {
    data: PropTypes.shape({
        links: PropTypes.array.isRequired,
        items: PropTypes.array.isRequired,
    }),
};
