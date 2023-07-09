import Card from "../Card/Card";
import style from "./CardsContainer.module.css"
import projects from "../../Projects/projects.json"
import { useInView } from 'react-intersection-observer';

const CardsContainer = (): JSX.Element => {

    const [ref, inView] = useInView({
        threshold: 0.5, // ajusta la cantidad de intersección necesaria para activar el deslizamiento
    });

    return <>
        <div ref={ref} className={`${style.container} ${inView ? style['slide-in'] : style['slide-out']}`} >
            {projects.map(project => <Card title={project.title}
                image="src\assets\lazy-image.svg"
                description={project.description} />)}
        </div>
    </>
}

export default CardsContainer;