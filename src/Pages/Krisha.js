import SideHeadline from "../Components/SideHeadline";
import Article from "../Components/Article";
import Bowl from "../img/Schuesseln.png"
import Footer from "../Components/Footer";

const Krisha = () => {
    document.querySelector("body").style.background = "";
    return ( 
        <div>
            <main>
                <section className="">            
                    <SideHeadline headline="Krisha" categorie="Products"/>
                    <Article image={Bowl} description="Krisha demonstrates what designer Tim Fenby does best. Clean lines, subtle curves and an oak finish nail this season's trends. Boomerang legs add serious style points – not that this dining table needs it. Nordic retro? You got it." />
                </section>
            </main>
            <Footer />
        </div>
     );
}
 
export default Krisha;