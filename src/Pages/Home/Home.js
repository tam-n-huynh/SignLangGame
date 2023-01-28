import './Home.css'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    let navigate = useNavigate();
    return (
        <div className="home">
            <div className="welcome-section">
                <div className="welcome-heading">
                    <h1>Welcome</h1>
                    <h1>to</h1>
                    <h1>Game Name</h1>
                    <div className="line"/>
                </div>
                <button className="play-now-button" onClick={() => {navigate("/quiz") }}>Play Now</button>
                <p className="learn-more">Learn More</p>
            </div>
            <div className="about-section">

            </div>
        </div>
    );
}

export default Home;