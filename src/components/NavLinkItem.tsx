//このcomponetのconstはtogglerの関連情報のみ

import React, { useState } from 'react';
import { Nav, Dropdown } from 'react-bootstrap';
import Link from 'next/link'; // Linkコンポーネントのインポート


interface NavLinkItemProps {
  href: string;
  text: string;
  hoveredLink: string | null;
  dropdownItems:string
  handleMouseEnter: (link: string) => void;
  handleMouseLeave: () => void;
}

const NavLinkItem: React.FC<NavLinkItemProps> = ({ href, text, hoveredLink, handleMouseEnter, handleMouseLeave,dropdownItems }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseOver = () => {
    setShowDropdown(true);
  };

  const handleMouseOut = () => {
    setShowDropdown(false);
  };

  const navLinkStyle = {
    color: hoveredLink === href ? '#f0ad4e' : '#ffffff',
    transition: 'color 0.3s',
  };

  return (
    <Dropdown
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseOut}
      show={showDropdown}
    >
     <Dropdown.Toggle as={Nav.Link} href={href}>
        {text}
      </Dropdown.Toggle>

      {dropdownItems.length > 0 && (
        <Dropdown.Menu>
          {dropdownItems.map(item => (
            <Dropdown.Item key={item.href} as={Link} href={item.href}>
              {item.text}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      )}
    </Dropdown>
  );
};

export default NavLinkItem;
