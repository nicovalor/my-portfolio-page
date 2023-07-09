import style from './Card.module.css'
type CardProps = {
    title: string;
    image: string;
    description: string;
}
const Card = ({ title, image, description }: CardProps): JSX.Element => {
    return <>
        <div className={style.container}>
            <img src={image} alt={description} className={style.image} />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    </>
}

export default Card