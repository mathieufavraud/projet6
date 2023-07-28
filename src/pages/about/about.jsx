import Banner from "../../components/banner/banner.jsx";
import Collapse from "../../components/collapse/collapse.jsx"
import data from "../../about.json";

function AboutBox() {
    return data.map(item => {
        return(<Collapse key={item.id} title={item.title} content={item.content}></Collapse>)
    })
}

function About() {
    return (
        <main>
            <section className="bannerbox"><Banner></Banner></section>
            <section className="aboutbox">{AboutBox()}</section>
        </main>
    )
}

export default About;