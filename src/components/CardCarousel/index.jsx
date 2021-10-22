import css from './css.module.scss';

const Card = ({info}) => {
    return(
        <div className={css.container}>
             <img src={info.images[Math.floor(Math.random() * info.images.length)]} alt="Tennis Shoe" />
             <p>{info.title}</p>
        </div>
    );
}

export default Card;