import pic from '../images/image.jpg';
import '../App.css';
import '../index.css'
import { Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import { Link } from "react-router-dom";

function AboutMe() {
  return (
    <div>
      <Row>
        <Col className="">
            <Link to='/'>About Me</Link>
        </Col>
        <Col className="" onClick={() => {}}>
          <Link to='/town'>My Town</Link>
        </Col>
      </Row>
      <Row>
        <Col>
          <Image className="myImage" src={pic} />
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="introText">
          name:Amandeep Student id:A00452906 prefered email id:Amandeep.Barwal@smu.ca

I have done my graduation in 2016 from Information Technology stream and Started my career as Assistant Software Engineer in Nucleus Software in 2016.After 11 months I joined Newgen Software in a new role of Software Engineer and was assoicated with the organization for 1 and a half years.In December 2018 I joined Amdocs Softwares as Software Developer and has been working there since,I was promoted to Senior Software Developer in February 2021.I have mainly worked in Java(Core),Spring,PL/SQL and Web services.
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default AboutMe;
