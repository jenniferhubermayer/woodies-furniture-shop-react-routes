import HomeImg from "../img/Home.png"
import "./Home.css"
import { Link } from "react-router-dom";

const Home = () => {
    document.querySelector("body").style.background = "linear-gradient(90deg, #FFFFFF 70%, #FFC0CB 30%)";

    return ( 
        <main className="home-side">
            <section>
            <p>Are you looking for <span>wooden furniture</span> for your place?</p>
            <h1>This is the Right Place</h1>
            <Link to="./products"><button>Explore Categories</button></Link>
            </section>
            <img src={HomeImg} alt="" />
        </main>
     );
}
 
export default Home;