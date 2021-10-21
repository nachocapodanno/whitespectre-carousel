import css from './css.module.scss'
import Slider from './components/Slider';
import data from './assets/data.json'

function App() {

  return (
    <div className={css.App}>
      <h1>Whitespectre Carousel</h1>
      <Slider items={data} itemsNumber={4}/>
    </div>
  );
}

export default App;
