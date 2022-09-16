import Footer from "../Components/Footer";
import SideHeadline from "../Components/SideHeadline";
import AboutImg from "../img/About.png";
import "./About.css"

const About = () => {
    document.querySelector("body").style.background = "";
    return ( 
        <div>
        <main>
            <SideHeadline headline="Who we are" categorie="About us"/>
            <section className="about-side">
                <img src={AboutImg} alt="" />
                <div>
                    <h2>WOODIES <span>is the</span> home of modern wooden furniture</h2>
                    <p>the answer to your need for furniture with shapes, sizes and colors. </p>
                </div>
            </section>
        </main>
        <Footer/>
        </div>
     );
}
 
export default About;