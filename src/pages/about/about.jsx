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
            <Banner></Banner>
            <div className="aboutbox">{AboutBox()}</div>
        </main>
    )
}

export default About;