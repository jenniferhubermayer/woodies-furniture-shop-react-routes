// CSS
import "./Categories.css"

// PACKAGE
import { Link } from "react-router-dom";

// IMAGES
import Desk from "../img/Tisch.png"
import Chair from "../img/Stuhl.png"
import Bowl from "../img/Schuesseln.png"

// COMPONENTS
import SideHeadline from "../Components/SideHeadline";
import Footer from "../Components/Footer";

const Categories = () => {
    document.querySelector("body").style.background = "";
    return ( 
        <div>
            <main>
                <SideHeadline headline="What we have" categorie="Products"/>
                <section className="products-side">
                    <article>
                        <h3>Jenson</h3>
                        <img src={Desk} alt="" />
                        <Link to="./jenson"><button>Shop now</button></Link>
                    </article>
                    <article>
                        <h3>Deon</h3>
                        <img src={Chair} alt="" />
                        <Link to="./deon"><button>Shop now</button></Link>
                    </article>
                    <article>
                        <h3>Krisha</h3>
                        <img src={Bowl} alt="" />
                        <Link to="./krisha"><button>Shop now</button></Link>
                    </article>
                </section>
            </main>
            <Footer />
        </div>
     );
}
 
export default Categories;