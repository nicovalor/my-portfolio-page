import style from './NavigationBar.module.css'

const NavitationBar = (): JSX.Element => {
    return <>
        <div className={style.nav}>
            <div className="logo">
                <h2 className={style.navLogo}>Nico</h2>
            </div>
            <div className="buttons">
                <ul>
                    <li className={style.navBttn}>Work</li>
                    <li className={style.navBttn}>About</li>
                    <li className={style.navBttn}>Contact</li>
                </ul>
            </div>
        </div>
    </>
}

export default NavitationBar