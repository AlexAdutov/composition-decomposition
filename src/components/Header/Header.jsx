// Импорт компонентов из соответствующих файлов
import { HeaderUp } from './HeaderUp';
import { HeaderNews } from './HeaderNews';
import { HeaderEnd } from './HeaderEnd';
import { TitleItem } from './TitliItem';
// Импорт PropTypes из библиотеки prop-types
import PropTypes from 'prop-types';

// Компонент отвечает за сбор и организацию работы всех компонентов header
export const Header = ({ data }) => {
    // Деструктуризация данных из props
    const { links, news, newDate, endHeader, currency } = data;
    return (
        <div className='header-wrapper'>
            <div className='header-news'>
                {/* Отображение ссылок */}
                <div className='header-links'>
                    {links.map((item) => {
                        return <HeaderUp item={item} key={item.title} />;
                    })}
                    {/* Отображение даты */}
                    <div>{newDate}</div>
                </div>
                {/* Отображение новостей */}
                <div className='box-news'>
                    {news.map((item) => {
                        return <HeaderNews item={item} key={item.title} />;
                    })}
                </div>
                {/* Отображение курса валют */}
                <div className='header-currency'>
                    {currency.map((e) => {
                        return <TitleItem element={e} key={e.item} />;
                    })}
                </div>
            </div>
            {/* Отображение футера хедера */}
            <div className='header-footer'>
                <HeaderEnd elem={endHeader} />
            </div>
        </div>
    );
};

// Проверка типов props
Header.propTypes = {
    data: PropTypes.shape({
        links: PropTypes.array.isRequired,
        news: PropTypes.array.isRequired,
        endHeader: PropTypes.array.isRequired,
        newDate: PropTypes.string.isRequired,
        currency: PropTypes.array.isRequired,
    })
}
