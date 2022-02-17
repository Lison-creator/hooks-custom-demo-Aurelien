import moment from 'moment';
import 'moment/locale/fr';
import style from './header.module.css';

const Header = () => {

    const today = moment().format("DD MMMM")

    return (
        <header className={style.header}>
            {/* Ecriture JSX */}
            <p>Rappel React</p>
            <p>{today}</p>
        </header>
    );
}

export default Header;