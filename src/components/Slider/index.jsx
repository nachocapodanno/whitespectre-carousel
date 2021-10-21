import { useState, useEffect } from 'react';
import CardSlider from "../CardSlider";
import css from './css.module.scss'
import placeholder from '../../assets/img/placeholder.png'

const Slider = ({ items, itemsNumber }) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentItems, setCurrentItems] = useState(items.slice(0, itemsNumber));

    useEffect(() => {
        let elements = items.slice(currentIndex, currentIndex + itemsNumber);
        if (elements.length < itemsNumber) {
            const item = {title: 'No Shoes', images: [placeholder]};
            let temp = Array.from({length: itemsNumber - elements.length}, () => item);
            elements.push(...temp)
        }
        setCurrentItems(elements);
    }, [currentIndex, items, itemsNumber])

    const next = () => {
        setCurrentIndex(currentIndex => currentIndex + itemsNumber)
    }

    const prev = () => {
        setCurrentIndex(currentIndex - itemsNumber)
    }

    return (
        <div>
            <button disabled={currentIndex <= 0} onClick={prev} className={css.leftArrow}>
                &lt;
            </button>
            <div className={css.container}>
                {currentItems.map((value) => {
                    return (
                        <div key={Math.random()} className={css.fadeIn}>
                            <CardSlider info={value} />
                        </div>
                    );
                })}
            </div>
            <button disabled={currentIndex >= (items.length - itemsNumber)} onClick={next} className={css.rightArrow}>
                &gt;
            </button>
        </div>
    );
}

export default Slider;