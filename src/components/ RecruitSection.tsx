import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { gsap } from 'gsap';

const Animation: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const targetElements = sectionRef.current!.querySelectorAll('.gradient-top-left, .gradient-top-right, .gradient-bottom');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const tl = gsap.timeline({
            defaults: { duration: 1, ease: "linear" }
          });

          tl.to('.gradient-top-left', { y: 0, delay: 0.1 })
            .to('.gradient-top-right', { x: 0, delay: 0.2 })
            .to('.gradient-bottom', { y: 0, delay: 0.3 });

          observer.unobserve(entry.target); // アニメーションが一度実行されたら監視を停止
        }
      });
    }, { threshold: 0.5 });

    targetElements.forEach(element => observer.observe(element));

    return () => {
      observer.disconnect(); // クリーンアップ
    };
  }, []);

  return (
    <div className="recruit-section" ref={sectionRef}>
      <Container fluid className="p-0">
        <div className="gradient-top-left"></div>
        <div className="gradient-top-right"></div>
        <div className="gradient-bottom"></div>
        <Row noGutters={true}>
          <Col md={12}>
            <div className="recruit-content">
              <h2>RECRUIT</h2>
              <p>Increase your own value and give value to society. Here is the environment for that.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Animation;
