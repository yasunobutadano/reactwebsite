import React from 'react';
import { Col, Image, Row ,Container} from 'react-bootstrap';

interface AboutUsCardProps{
iconPath:string;
title:string;
description:string;
};

const AboutUsCard :React.FC<AboutUsCardProps>=({iconPath,title,description})=>{
    return(
    
      <Col md={4}className='card-equal-height'>
         <div className="about-us-card p-4">
        <div className="icon mb-3">
          <Image src={iconPath} rounded />
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Col>
    
    )

};

export default AboutUsCard
