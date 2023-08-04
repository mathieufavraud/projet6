//Page à propos, avec les composants collapse

import Banner from "../../components/banner/banner.jsx";
import Collapse from "../../components/collapse/collapse.jsx"
import about from "../../assets/banner-about.png"
import data from "../../about.json";

function AboutBox() {
    return data.map(item => {
        return(<Collapse key={item.id} title={item.title} content={item.content}></Collapse>)
    })
}

function About() {
    return (
        <main>
            <div className="bannerbox"><Banner key="about" image={about}></Banner></div>
            <div className="aboutbox">{AboutBox()}</div>
        </main>
    )
}

export default About;