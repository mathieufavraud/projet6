//Page à propos, avec les composants collapse

import Banner from "../../components/banner/banner.jsx";
import "../../components/banner/banner.scss";
import Collapse from "../../components/collapse/collapse.jsx";
import "../../components/collapse/collapse.scss";
import about from "../../assets/banner-about.png"
import data from "../../about.json";
import "./about.scss";

const About = () =>
{
    const AboutBox = () => {
        return data.map(item => {
            let content = <p>{item.content}</p>
            return(<Collapse key={item.id} title={item.title} content={content} classname={"collapse--marge"}></Collapse>)
        })
    }
    return (
        <main>
            <div className="bannerbox"><Banner key="about" image={about}></Banner></div>
            <div className="aboutbox">{AboutBox()}</div>
        </main>
    )
}

export default About;