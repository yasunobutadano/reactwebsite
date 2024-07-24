import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import AboutUsCard from './AboutUsCard';
import RecruitSection from './ RecruitSection';
import Animation from './Animation';
import Company from './company';


const MainContent: React.FC = () => {
  return (
    <div className="main-content">
      <Container fluid className="p-0">
        <Row className="hero-section align-items-center text-black">
          <Col md={12} className="text-center">
            <Animation />
          </Col>
        </Row>
        
      </Container>
      <Container className="about-us-section  ">
        <Row>1
          <Col md={12} className="text-center about-us-part ">
            <h2>ABOUT US</h2>
            <p className="fs-5 py-4">
              Vision Consulting aims to realize a better society through our three businesses. <br />
              We create new systems that lead to solutions for the issues faced by our clients and society, and bring about social change and growth.
            </p>
          </Col>
        </Row>
        <Row className="text-center my-4 dow-equal-height">
          <AboutUsCard 
            iconIndex={0}
            title="Global"
            description="Aiming to expand to 440 cities worldwide as a global consulting firm launching from Japan to the world."
          />
          <AboutUsCard 
            iconIndex={1}
            title="Consulting"
            description="Specialized consultants propose the best problem-solving solutions according to the situation and aim to improve our clients' corporate value."
          />
          <AboutUsCard 
            iconIndex={2}
            title="New business"
            description="Aiming to realize a better society, we take on new businesses that defy conventional wisdom."
          />
        </Row>
        <Row className="text-center">
          <Col md={12}>
            <Button variant="link" className="view-more">VIEW MORE</Button>
          </Col>
        </Row>
      </Container>
      <RecruitSection />
      <Company />
    </div>
  );
};

export default MainContent;
