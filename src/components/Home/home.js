import React from "react";
import './home.css';
import 'bootstrap/dist/css/bootstrap.css';
import Typography from '@mui/material/Typography'
import Google from './google.png';
import Imgg from './imgg.png';
import Img from './img.png';
import Img1 from './img1.png';
import Img2 from './img2.png';
import Partner1 from './partner/partner1.png';
import Partner2 from './partner/partner2.png';
import Partner3 from './partner/partner3.png';
import Partner4 from './partner/partner4.png';
import Partner5 from './partner/partner5.png';
import Partner6 from './partner/partner6.png';
import Example from "./web/web";
import Reviews from "./clientreviews/client_reviews";
import Credential from "./credentials/crediantials";
import Footer from "./footer/footer";
import Slider from "./slider/slider";
import Technologyy from "./technology_expertise/technolgy";
import Navbar from "./navbar/navBar";


const Services = () => {
    
    return (
        <div className="split-background">
            <div>
            <Navbar />
            </div>
            <div>
            <Slider/>
            </div>
            

            <div className="section-light">
                <div className="Container">
                <div className="container1">
                    <h1 className="our">OUR </h1>
                    <h1 className="ourr">Services</h1>
                    <p>Intagleo Systems is a full-stack digital transformation products agency specializing in strategy, design, and development of creative web and mobile software applications, digital products & services. We help enterprises, startups, and nonprofits bring their ideas to life at a reduced time and cost to market.</p>
                </div>
                    <div className="fahad">
                        <img className='img' src={Google} alt="img" />
                        <h3 style={{textAlign:'center'}}>Expertise Software Development</h3>
                        <p>Our enterprise software solutions, such as ERP, CRM, HRM, SCM, and DMS, assist you in formulating strategies and streamlining automation to enhance your key business processes, increase productivity, lower costs, and save time.</p>
                    </div>
                    <div className="arsal">
                        <img className='img' src={Imgg} alt="img" />
                        <h3 style={{textAlign:'center'}}>Mobile App Solutions</h3>
                        <p>We specialize in customized mobile app solutions from conceptualization and design to development and deployment. With a strong focus on quality, performance, and user experience, we can help you with native and hybrid applications by leveraging cutting-edge technologies .</p>
                    </div>
                </div>

                <div className="box">
                    <div className="box1">
                        <img className='img' src={Img} alt="img" />
                        <h3 style={{textAlign:'center'}}>Web Applications</h3>
                        <p>With our expertise in a wide range of programming languages, web development frameworks, and Monolithic and MicroServices architectures, we design, develop, and deploy data-driven custom web applications.</p>
                    </div>
                    <div className="box2">
                        <img className='img' src={Img1} alt="img" />
                        <h3 style={{textAlign:'center'}}>Team Augmentation</h3>
                        <p>We help businesses to effectively meet the many challenges they face in managing their projects, clients, teams and budget without compromising on quality, scope, or timelines. We provide integrated DevOps & Test Automation, Agile development teams to reduce your cost & time to market & deliver high-quality. Augment your teams, temporary or long-term.</p>
                    </div>
                    <div className="box3">
                        <img className='img' src={Img2} alt="img" />
                        <h3 style={{textAlign:'center'}}>Startup Software Development</h3>
                        <p>With our comprehensive startup software development services, we can help turn your ideas into successful products that align with your business goals. With a strong focus on innovation, scalability, and user experience, we help startups succeed by leveraging agile development methodologies to deliver high-quality software that meets their needs while staying within budget and timeline.</p>
                    </div>
                </div>
               
            </div>

            <div className="section-light">
                <div className="para">
                    <h1  className='project'style={{textAlign:'center', color:'black'}}>Start a new project or take an existing </h1>
                    <h1 className="project-highlight" style={{textAlign:'center', color:'#5485e7'}}>one to the next level.</h1>
                </div>
            </div>
            
            <div>
            <div className="section-light">
                
                    <Example/>
                </div>
                <div >
                    <Technologyy/>
                </div>
                <div className="section-light">
                    <div className="partner">
                <h1 className="why">Why Partner <bold style={{color: '#5485e7'}}>With Us</bold></h1>
                </div>
            
                <div className="partner-context">
                    <div className="partner-context1">
                        <img className='img' src={Partner1} alt="img" />
                        <h3 style={{textAlign:'center'}}>Trusted By Global Teams</h3>
                        <p>Over 20 years of experience and 500+ satisfied customers across the US, UAE & UK.</p>
                    </div>
                    <div className="partner-context1">
                        <img className='img' src={Partner2} alt="img" />
                        <h3 style={{textAlign:'center'}}>Agile Development</h3>
                        <p>State-of-the-art development processes for proven success..</p>
                    </div>
                    <div className="partner-context1">
                        <img className='img' src={Partner3} alt="img" />
                        <h3 style={{textAlign:'center'}}>Flexible Engagement</h3>
                        <p>Fluid terms allowing you to scale up or down easily.</p>
                    </div>
                </div>
                <div className="Partner-context">
                    <div className="Partner-context1">
                        <img className='img' src={Partner4} alt="img" />
                        <h3 style={{textAlign:'center'}}>Best In Class Support</h3>
                        <p>Full range of support options for your peace of mind.</p>
                    </div>
                    <div className="Partner-context2">
                        <img className='img' src={Partner5} alt="img" />
                        <h3 style={{textAlign:'center'}}>Affordable Solutions</h3>
                        <p>Competitive pricing for the best value for money.</p>
                    </div>
                    <div className="Partner-context3">
                        <img className='img' src={Partner6} alt="img" />
                        <h3 style={{textAlign:'center'}}>Time-To-Market</h3>
                        <p>Fast-paced, agile development for a smooth product rollout.</p>
                    </div>
                </div>
                <div className="section-light">
                <Reviews/>
                </div>
                <div className="section-light">
                <Credential/>
                </div>
                <div className="section-light">
                <Footer/>
                </div>
              
                </div>
               
            </div>

        </div>
    );
};

export default Services;
