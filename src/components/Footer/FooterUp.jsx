// Импорт PropTypes из библиотеки prop-types
import PropTypes from 'prop-types';

// Компонент отвечает за отображение произвольных разделов/отсеков страницы (кода)
export const FooterUp = (props) => {
    // Деструктуризация children из props
    const { children } = props;
    return <div>{children}</div>;
};

// Проверка типов props
FooterUp.propTypes ={
    children: PropTypes.any
}
