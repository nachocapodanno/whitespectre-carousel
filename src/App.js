import css from './css.module.scss'
import Carousel from './components/Carousel';
import data from './assets/data.json'

function App() {

  return (
    <div className={css.App}>
      <h1>Whitespectre Carousel</h1>
      <Carousel items={data} itemsNumber={4}/>
    </div>
  );
}

export default App;
