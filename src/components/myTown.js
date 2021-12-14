import pic from '../images/68411508.jpeg';
import wheatherIcon from '../images/cloudy.png';
import celciusIcon from '../images/degree_celcius.png';
import farenIcon from '../images/degree_f.jpeg';
import '../App.css';
import '../index.css'
import { Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

function MyTown() {
  const getTemperature = async () => {
    try {
      const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=9ce5f357abf3161618342c23d2a53d82');
      const data = await res.json();
      const temp = data && data.main && data.main.temp ? data.main.temp - 273.15 : 30;
      return Math.trunc(temp);;
    } catch(err) {
      console.log(err);
      return 20;
    }
  };

  useEffect(() => {
    const getCityTemperature = async () => {
      const getTempFromAPI = await getTemperature();
      setTemperature(getTempFromAPI);
    };
    getCityTemperature();
  }, [])

  const [temp, setTemperature] = useState(20);

  return (
    <div className="">
      <Row>
        <Col className="aboutMe">
            <Link to='/'>About Me</Link>
        </Col>
        <Col className="myTown">
            <Link to='/town'>My Town</Link>
        </Col>
      </Row>
      <Row>
        <Col>
          <Image className="myTownImage" src={pic} />
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="introText">
            My home town is Ghator,a very small village in Himachal Pradresh, India.
            Himachal Pradesh has many hill stations and is considered as a tourist attraction by many
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
            <Image className="wheatherIcon" src={wheatherIcon} />
        </Col>
        <Col>
            <p className="temperature">
                {temp}
            </p>
        </Col>
        <Col>
          <Image className="c" src={celciusIcon} onClick={
            async () => {
              const temp = await getTemperature(); 
              console.log(temp);
              setTemperature(temp); 
          }}/>
        </Col>
        <Col>
          <Image className="f" src={farenIcon} onClick={
            async () => {
              let convert = await getTemperature(); 
              convert = (convert * 9/5) + 32;
              convert = Math.trunc(convert);
              console.log(convert);
              setTemperature(convert); 
            }
          }/>
        </Col>
      </Row>
    </div>
  );
}

export default MyTown;
