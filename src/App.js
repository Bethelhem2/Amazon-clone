
import { Carousel } from 'react-responsive-carousel';
import './App.css';
import Header from './Components/Header/Header';
import CarouselEffect from './Components/Carousel/Carousel'
import Category from './Components/Category/Category';



function App() {
  return (
    <div>
      <Header/>
      <CarouselEffect/>
      <Category/>
      
    </div>
  );
}

export default App;
