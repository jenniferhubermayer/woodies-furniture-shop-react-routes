import SideHeadline from "../Components/SideHeadline";
import Article from "../Components/Article";
import Footer from "../Components/Footer";
import Chair from "../img/Stuhl.png"

const Deon = () => {
    document.querySelector("body").style.background = "";
    return ( 
        <div>
            <main>
                <section className="">
                    <SideHeadline headline="Deon" categorie="Products"/>
                    <Article image={Chair} description="Deon demonstrates what designer Tim Fenby does best. Clean lines, subtle curves and an oak finish nail this season's trends. Boomerang legs add serious style points – not that this dining table needs it. Nordic retro? You got it." />
                </section>
            </main>
            <Footer />
        </div>
     );
}
 
export default Deon;