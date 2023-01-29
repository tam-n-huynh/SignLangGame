import './Home.css';
import About from './About/About.js';
import Header from './Header/Header.js';
import Info from './Info/Info.js';
import Dev from './Dev/Dev.js'


const Home = () => {

    return (
        <div className="home">
            <Header />
            <Info />
            <About/>
            <Dev />
        </div>
    );
}

export default Home;