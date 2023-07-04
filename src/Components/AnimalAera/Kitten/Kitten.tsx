import kittenSource from "../../../Assets/Images/kitten.jpeg";
import "./Kitten.css";

function Kitten(): JSX.Element {
    return (
        <div className="Kitten">
            <h1>Kitten</h1>
            <div className="cool">Cute Kitten...</div>
            <img src={kittenSource}/>
            <br/>
            <span>Price : $50</span>

        </div>
        );

}

export default Kitten;