import style from './NavigationBar.module.css';
import { Link } from 'react-router-dom';


const NavigationBar = (): JSX.Element => {
    return <>
        <div className={style.nav}>
            <Link to="/">
                <div className={style.logo}>
                    <img className={style.image} src="src\assets\nico-small-logo-nico.svg" alt="logo" />
                </div>
            </Link>
            <div className={style.buttons}>
                <ul>
                    <Link to='/work' className={style.liLink}>
                        <li className={style.navBttn}>Work</li>
                    </Link>
                    <Link to='/about' className={style.liLink}>
                        <li className={style.navBttn}>About</li>
                    </Link>
                    <Link to='/contact' className={style.liLink}>
                        <li className={style.navBttn}>Contact</li>
                    </Link>
                </ul>
            </div>
        </div>
    </>
}

export default NavigationBar