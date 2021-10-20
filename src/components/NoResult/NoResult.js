import errorImage from './cat.jpg';
import s from './NoResult.module.css';

export default function NoResult() {
    return (
        <div role="alert">
            <img className={s.img} src={errorImage} width="500" alt="sadСat" />
            <p className={s.text}>Nothing was found for your query!</p>
        </div>
    );
}
