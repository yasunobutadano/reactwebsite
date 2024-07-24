import { faGlobe, faPeopleArrows } from '@fortawesome/free-solid-svg-icons';
import { faBusinessTime } from '@fortawesome/free-solid-svg-icons/faBusinessTime';
import React from 'react';
import { Col, Image, Row ,Container} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


interface AboutUsCardProps{

title:string;
description:string;
iconIndex:number;
};

const AboutUsCard: React.FC<AboutUsCardProps> = ({ title, description, iconIndex }) => {
  const icons = [faGlobe, faPeopleArrows, faBusinessTime];

  return (
    <Col md={4} className='card-equal-height '>
      <div className="about-us-card p-4">
        <div className="stat-icon">
          <FontAwesomeIcon className="fa-icon" icon={icons[iconIndex]} size="2xl" />
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Col>
  );
};

export default AboutUsCard;
