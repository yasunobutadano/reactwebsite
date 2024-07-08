import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
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
            <Animation/>
          </Col>
        </Row>
        <Row className="text-center my-5">
          <Col md={12}>
            <Image src="/path/to/image.png" rounded />
            <Button variant="primary" className="mt-3">Broadcasting on TV commercials</Button>
            {/* <Animation/> */}
          </Col>
        </Row>
      </Container>
      <Container className="about-us-section my-5">
        <Row>
          <Col md={12} className="text-center">
            <h2>ABOUT US</h2>
            <p>
              Vision Consulting aims to realize a better society through our three businesses. <br />
              We create new systems that lead to solutions for the issues faced by our clients and society, and bring about social change and growth.
            </p>
          </Col>
        </Row>
        <Row className="text-center my-4 dow-equal-height">
          <AboutUsCard 
            iconPath="/path/to/global-icon.png"
            title="Global"
            description="Aiming to expand to 440 cities worldwide as a global consulting firm launching from Japan to the world."
          />
          <AboutUsCard 
            iconPath="/path/to/consulting-icon.png"
            title="Consulting"
            description="Specialized consultants propose the best problem-solving solutions according to the situation and aim to improve our clients' corporate value."
          />
          <AboutUsCard 
            iconPath="/path/to/new-business-icon.png"
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
      <RecruitSection/>
      <Company/>
    </div>
  );
};

export default MainContent;
