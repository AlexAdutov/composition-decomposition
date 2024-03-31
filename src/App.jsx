// Импорт стилей приложения
import './App.css';
// Импорт компонента Header из его файла
import { Header } from './components/Header/Header';
// Импорт данных для Header из файла данных
import { dataHeader } from './data/dataHeader';
// Импорт компонента Body из его файла
import { Body } from './components/Body/Body';
// Импорт данных для Body из файла данных
import { dataBody } from './data/dataBody';
// Импорт данных для Footer из файла данных
import { dataFooter } from './data/dataFooter';
// Импорт компонента Footer из его файла
import { Footer } from './components/Footer/Footer';

function App() {
    return (
        // Обертка приложения
        <div className='wrapper'>
            {/* Отображение компонента Header с данными */}
            <Header data={dataHeader} />
            {/* Отображение компонента Body с данными */}
            <Body data={dataBody} />
            {/* Отображение компонента Footer с данными */}
            <Footer dataFooter={dataFooter} />
        </div>
    );
}

export default App;
