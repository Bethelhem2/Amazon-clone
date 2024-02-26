
import { Carousel } from 'react-responsive-carousel';
import './App.css';
import Header from './Components/Header/Header';
import CarouselEffect from './Components/Carousel/Carousel'
import Category from './Components/Category/Category';
import Product from './Components/Product/Product';



function App() {
  return (
    <div>
      <Header/>
      <CarouselEffect/>
      <Category/>
      <Product/>
    </div>
  );
}

export default App;
