import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './web.css';
import Image1 from '../images/image1.png';
import Image2 from '../images//image2.png'
import Image3 from '../images/image3.png'
import Image4 from '../images/image4.png'
import Image5 from '../images/image5.png'
import Image6 from '../images/image6.png'
import Image7 from '../images/image7.png'
import Web1 from './web1.png'
import Web2 from './web2.png'
import Web3 from './web3.png'
import Web4 from './web4.png'
import Web5 from './web5.png'
import Web6 from './web6.png'
import Web7 from './web7.png'



function Example() {
  return (
    <Tabs
      defaultActiveKey="1"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="1" title={ <img className='iMg'style={{ cursor: 'pointer' }}src={Image1} alt="image"/>}>
      <div className='wweb'>
      <div className="web1">
                         <h1 className="nameweb">Web  <bold style={{color: 'blue'}}>Apps</bold></h1>
                             <p>
                             We offer comprehensive custom web application development for diverse business domains and use cases, including CMS, E-commerce, API, and industry solutions. With cutting-edge technologies such as Flutter, Azure, AWS, and Magento, we create exceptional, customized, intuitive solutions that deliver a digitally transformational user experience.
                             
                             </p>
                             <li style={{paddingLeft:'30px',marginBottom:'20px'}}><button className="contact-btn">Discover more</button></li>

                         </div>
                         <img className='webimage'src={Web1}alt='img'/>
                         </div>
                         

      
      </Tab>
      <Tab eventKey="2" title={  <img className='iMg' style={{ cursor: 'pointer' }}src={Image2} alt="image"/>}>
      <div className='wweb'>
      <div className="web1">
                         <h1 className="nameweb">Mobile Apps <bold style={{color: '#5485e7'}}>& Games
                         </bold></h1>
                             <p>
                             We provide an extensive cross-platform and native app experience for the finest application development. We build 2D and 3D Android apps, mobile games, and other projects that use native operating system capabilities to deliver a memorable user experience.
                             </p>
                             <li style={{paddingLeft:'30px',marginBottom:'20px'}}><button className="contact-btn">Discover more</button></li>
                         </div>
                         <img className='webimage2'src={Web2}alt='img'/>
                         </div>
      
      </Tab>
      <Tab eventKey="3" title={  <img className='iMg' style={{ cursor: 'pointer' }}src={Image3} alt="image"/>}>
      <div className='wweb'>
      <div className="web1">
                         <h1 className="nameweb">Digital  <bold style={{color: '#5485e7'}}>Signage</bold></h1>
                             <p>
                             We assist you in developing custom Digital Menu Boards, Touch Interactive Solutions, video wall solutions, Scala and OnSign TV apps, Retail Digital Signage, Drive-Thru Solutions, digital billboards, and kiosks by leveraging advanced technology. From simple digital messages to an AI-driven experience, we devise custom digital signage solutions to cater to all your business needs.
                             </p>
                             <li style={{paddingLeft:'30px',marginBottom:'20px'}}><button className="contact-btn">Discover more</button></li>
                         </div>
                         <img className='webimage3'src={Web3}alt='img'/>
                         </div>
      
      </Tab>
      <Tab eventKey="4" title={  <img className='iMg' style={{ cursor: 'pointer' }}src={Image4} alt="image"/>}>
      <div className='wweb'>
      <div className="web1">
                         <h1 className="nameweb">AI and <bold style={{color: '#5485e7'}}>ML</bold></h1>
                             <p>
                             With proficiency in AI and ML tools and technologies like TensorFlow, Apache SystemML, Caffe, Apache Mahout, OpenNMS, etc, our team of data scientists assist you to evaluate data lakes, detect spams, increase automation, and solve complex business problems. We build creative custom Chatbots & Virtual Assistants, and Image Recognition, Object Detection, Emotions Learning, and Optical Character Recognition systems.
                             </p>
                             <li style={{paddingLeft:'30px',marginBottom:'20px'}}><button className="contact-btn">Discover more</button></li>
                         </div>
                         <img className='webimage'src={Web4}alt='img'/>
                         </div>
      
      </Tab>
      <Tab eventKey="5" title={  <img className='iMg' style={{ cursor: 'pointer' }}src={Image5} alt="image"/>}>
      <div className='wweb'>
      <div className="web1">
                         <h1 className="nameweb">E-commerce </h1>
                             <p>
                             Intagleo Systems transforms your E-commerce processes by enabling efficient performance, increased customer satisfaction, quick data access, enhanced decision-making, effective monitoring and tracking, and secure cloud operations. We create innovative bespoke E-commerce stores and websites, as well as E-commerce apps, marketplaces, plugins, modules, payment gateway integration, maintenance, and support.
                             </p>
                             <li style={{paddingLeft:'30px',marginBottom:'20px'}}><button className="contact-btn">Discover more</button></li>
                         </div>
                         <img className='webimage'src={Web5}alt='img'/>
                         </div>
      
      </Tab>
      <Tab eventKey="6" title={  <img className='iMg' style={{ cursor: 'pointer' }}src={Image6} alt="image"/>}>
      <div className='wweb'>
      <div className="web1">
                         <h1 className="nameweb">Data  <bold style={{color: '#5485e7'}}>Analytics</bold></h1>
                             <p>
                             We enable a wide spectrum of domains to benefit from integrated solutions that rely on the best technology stacks. Through data quality management and data analysis, data mining, and data visualization, we assist you in analyzing your customers’ behavior, making data-driven decisions, training AI models, and predicting ROI to increase business performance. 
                             </p>
                             <li style={{paddingLeft:'30px',marginBottom:'20px'}}><button className="contact-btn">Discover more</button></li>
                         </div>
                         <img className='webimage'src={Web6}alt='img'/>
                         </div>
      
      </Tab>
      <Tab eventKey="7" title={ <img className='iMg' style={{ cursor: 'pointer' }}src={Image7} alt="image"/>}>
      <div className='wweb'>
      <div className="web1">
                         <h1 className="nameweb">Enterprise <bold style={{color: '#5485e7'}}> Software</bold></h1>
                             <p>
                             We offer comprehensive custom web application development for diverse business domains and use cases, including CMS, E-commerce, API, and industry solutions. With cutting-edge technologies such as Flutter, Azure, AWS, and Magento, we create exceptional, customized, intuitive solutions that deliver a digitally transformational user experience.
                             </p>
                             <li style={{paddingLeft:'30px',marginBottom:'20px'}}><button className="contact-btn">Discover more</button></li>
                         </div>
                         <img className='webimage7'src={Web7}alt='img'/>
                         </div>
      </Tab>
     
    </Tabs>
  );
}

export default Example;