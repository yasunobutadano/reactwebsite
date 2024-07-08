//このcomponetのconstはhoverの関連情報のみ
import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import NavLinkItem from './NavLinkItem';

const NavigationBar: React.FC = () => {
    //hoverしたときにhover setしてその情報をhoverLinkに保存→これをstyleの条件文で活用する
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  //handleMouseEnterはホバーされたリンクの名前を状態に設定し、handleMouseLeaveはその状態をリセットします。
  const handleMouseEnter = (link: string) => {
    setHoveredLink(link);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  const links = [
    { 
      href: "/about", 
      text: "About Us",
      dropdownItems: [
        { href: "/about/team", text: "Our Team" },
        { href: "/about/mission", text: "Our Mission" }
      ]
    },
    { 
      href: "/company", 
      text: "Company",
      dropdownItems: [
        { href: "/company/history", text: "Our History" },
        { href: "/company/values", text: "Our Values" }
      ]
    },
    { 
      href: "/insights", 
      text: "Insights",
      dropdownItems: [
        { href: "/insights/blog", text: "Blog" },
        { href: "/insights/research", text: "Research" }
      ]
    },
    { 
      href: "/contact", 
      text: "Contact",
      dropdownItems: []
    },
    { 
      href: "/recruitment", 
      text: "Recruitment",
      dropdownItems: [
        { href: "/recruitment/jobs", text: "Jobs" },
        { href: "/recruitment/internships", text: "Internships" }
      ]
    },
    { 
      href: "/news", 
      text: "News",
      dropdownItems: [
        { href: "/news/latest", text: "Latest News" },
        { href: "/news/press", text: "Press Releases" }
      ]
    },
  ];
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">Consulting Company</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {links.map((link) => (
            <NavLinkItem
              key={link.href}
              href={link.href}
              text={link.text}
              dropdownItems={link.dropdownItems} 
              hoveredLink={hoveredLink}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
            />
            //{}が同じファイルないの変数　その左の変数はpropsとして渡す引数
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
