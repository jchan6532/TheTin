import '../stylesheets/about.css';
import aboutUsPic from '../images/aboutus.jpg'

const About = () => {
    return (
        <div style={{padding: '10px 100px'}}>
            <div className="text-left">
                <div className="grid-container-aboutus">
                    <div className="grid-item-aboutus left">
                        <img className="about-us-img" src={aboutUsPic} style={{width: '100%', height: '100%'}} />
                    </div>
                    <div className="grid-item-aboutus right">
                        <br />
                        <p>
                            Thettin Accounting & Business Advisory is a professional firm founded in 2023 by experienced certified accountant in Canada and the US.
                        </p>
                        <br />
                        <p>
                            We are Canada cloud-based accountants helping startups and scale-ups to get their finances organized.
                        </p>
                        <br />
                        <p>
                            Our mission is to provide small business owners with support and guidance to grow their business and stay compliant.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;