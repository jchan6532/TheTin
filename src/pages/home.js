import landingPagePic from '../images/LandingPage-small.jpg';
import '../stylesheets/home.css';

const Home = () => {
    return (
        <div style={{padding: '10px 100px', backgroundColor: 'rgb(223, 211, 211)'}}>
            <div className="">
                <div className="grid-container-home">
                    <div className="grid-item-home left">
                        <h2>Want to grow your business but feel overwhelmed?</h2>
                        <br />
                        <p>
                            We love helping small business owners take control of their finances. 
                        </p>
                        <br />
                        <p>
                            We get the numbers organized so you can make better strategic business decisions and thrive. 
                        </p>
                    </div>

                    <div className="grid-item-home right">
                        <img className="landing-page-img" src={landingPagePic} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;