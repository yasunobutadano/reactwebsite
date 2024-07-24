import React from 'react';
import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHandshake } from '@fortawesome/free-regular-svg-icons';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';

import { faCoffee } from '@fortawesome/free-solid-svg-icons/faCoffee';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { gsap } from 'gsap';





const Company: React.FC = () => {

  const icons = [faHandshake,faCalendar, faCoffee];

  const stats = [
    {
      title: "Customer Satisfaction",
      value: "94.6",
      unit: "%",
      icon: icons[0], // Replace with the actual path to the icon
     iconStyle:""
    },
    {
      title: "After 10 years in business",
      value: "more than 1000",
      unit: "employees",
      icon: icons[1], // Replace with the actual path to the icon
     iconStyle:""
    },
    {
      title: "Use of latest technology",
      value: "AI/RPA/5G",
      icon: icons[2], // Replace with the actual path to the icon
     iconStyle:""
    },
    {
      title: "Repeat rate",
      value: "Over 90.0",
      unit: "%",
      icon: icons[2], // Replace with the actual path to the icon
     iconStyle:""
    },
    {
      title: "Sales growth rate for the past 5 years",
      value: "2971",
      unit: "%",
      icon: icons[2], // Replace with the actual path to the icon
     iconStyle:""
    },
    {
      title: "Average annual growth rate",
      value: "141.3",
      unit: "%",
      icon: icons[2], // Replace with the actual path to the icon
     iconStyle:""
    }
  ];
  


  useEffect(() => {
    gsap.fromTo(".stat-value", { scale: 0 }, { scale: 1, duration: 1.5, ease: "elastic.out(1, 0.3)" });
  }, []);


  return (
    <div className="company-section bg-dark">
      <Container fluid>
        <Row className="text-center mb-4">
          <Col>
            <h2>We continue to grow rapidly as a full-service consulting firm.</h2>
          </Col>
        </Row>
        <Row className="row-equal-height">
          {stats.map((stat, index) => (
            
            <Col md={4} className="company-stat " key={index}>
              <div className="stat-content">
                
                <h3>{stat.title}</h3>
                <div className="stat-icon">
                <FontAwesomeIcon  className="fa-icon"　icon={stat.icon} size="2xl"/>

                </div>
                <p className="stat-value fs-6">
                  {stat.value} <span>{stat.unit}</span>
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Company;
