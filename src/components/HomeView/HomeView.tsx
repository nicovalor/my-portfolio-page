import style from './HomeView.module.css'

const HomeView = (): JSX.Element => {

    return <>
        <div className={style.container}>
            <img src='src\assets\portfolio-logo.svg' alt="logo" className={style.logo} />
        </div>
    </>
}

export default HomeView