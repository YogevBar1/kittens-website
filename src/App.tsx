import './App.css';
import Kitten from './Components/AnimalAera/Kitten/Kitten';
import AnimalFood from './FoodArea/AnimalFood/AnimalFood';

function App() {
  return (
    <section>
        <h1>Welcome to my Kittens Website!</h1>
        <Kitten />
        <Kitten />
        <Kitten />
        <AnimalFood/>
    </section>
  );
}

export default App;
