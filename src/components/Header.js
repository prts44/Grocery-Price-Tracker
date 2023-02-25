import style from '../style/Header.module.css';
import logo from '../logo.svg';

function Header(props) {

    return (
        <div className={style.bar}>
            <div className={style.button}>
                <a className={style.link} href="/">Home</a>
            </div>
            <div className={style.button}>
                <a className={style.link} href="https://github.com/prts44/Grocery-Price-Tracker">About</a>
            </div>
            <div className={style.button}>
                <a className={style.link} href="/manage">Manage</a>
            </div>
            <div className={style.button}>
                <a className={style.link} href="https://github.com/prts44/Grocery-Price-Tracker">
                    <img className={style.ghLogo} src={logo} href="https://github.com/prts44/Grocery-Price-Tracker" />
                </a>
            </div>
        </div>);
}

export default Header;