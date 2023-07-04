import animalFoodSource from "../../Assets/Images/food.jpeg";
import "./AnimalFood.css";


function AnimalFood(): JSX.Element {
    return (
        <div className="AnimalFood">

            <h2>Animal Food</h2>

            <img src={animalFoodSource} />

            <div>
                This food include Bonzo....
            </div>

            
            <span>Price : $80</span>

        </div>
    );

}

export default AnimalFood;