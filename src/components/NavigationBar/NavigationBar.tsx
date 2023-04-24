import style from './NavigationBar.module.css'

const NavigationBar = (): JSX.Element => {
    return <>
        <div className={style.nav}>
            <div className={style.logo}>
                <h2 className={style.navLogo}>Nico</h2>
            </div>
            <div className={style.buttons}>
                <ul>
                    <li className={style.navBttn}>Work</li>
                    <li className={style.navBttn}>About</li>
                    <li className={style.navBttn}>Contact</li>
                </ul>
            </div>
        </div>
    </>
}

export default NavigationBar