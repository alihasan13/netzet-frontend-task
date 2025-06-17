'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link'; // For client-side navigation
import Image from 'next/image'; // Import Next.js Image component
import {
  HeaderWrapper,
  LogoWrapper,
  NavDesktop,
  MobileMenuButtonWrapper,
  MobileNavMenu,
  StyledLogoImage
} from './Header.styles';
import Container from '../../../components/layout/Container'; // Corrected relative path
import Button from '../../../components/atoms/Button';       // Corrected relative path
// Icon component is no longer needed for hamburger/close here
import StyledText from '../../../components/atoms/StyledText'; // Corrected relative path


// Navigation Link Item
interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void; // For mobile menu item clicks
  className?: string;   // Allow className for Link styling from Header.styles.ts
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, onClick, className }) => {
  
  return (
    <Link href={href} onClick={onClick} className={className} style={{ textDecoration: 'none' }}>
      <StyledText
        // as="a" // REMOVED: Link component now renders the <a> tag
        fontFamily="nunito" //  Ensure this is the correct font for nav links
        fontSize="navLink"  // From theme.fontSizes
        fontWeight="medium" //  Correct weight
        color="textPrimary" // Base color
        
      >
        {children}
      </StyledText>
    </Link>
  );
};


const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { //  Breakpoint (e.g., theme.breakpoints.tablet value)
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <HeaderWrapper>
      <Container className="header-container">
        <LogoWrapper>
          <Link href="/" passHref> {/* passHref might be needed if LogoWrapper's <a> is styled, or if Image is not direct child */}
            <StyledLogoImage
              src="/images/logoLarge.png" // FIGMA CHECK: Path and dimensions
              alt="Fametonic Logo"
            />
          </Link>
        </LogoWrapper>

        <NavDesktop aria-label="Main navigation">
          <NavLink href="/about">About Us</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </NavDesktop>

        <MobileMenuButtonWrapper>
          <Button
            variant="ghost" // Use transient prop for variant
            size="medium"   // Use transient prop for size (if size is a custom styling prop for Button)
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            // Add some padding to the button if the icon itself is small, to ensure good tap target size
            style={{ padding: '8px' }} // Example padding, adjust as needed
          >
            {isMobileMenuOpen ? (
              <Image
                src="/images/menuIcon.png" //  Path to your close.png
                alt="Close menu icon"
                width={24} //  Actual width of your close.png
                height={24} //  Actual height of your close.png
              />
            ) : (
              <Image
                src="/images/menuIcon.png" //  Path to your hamburger.png
                alt="Open menu icon"
                width={24} //  Actual width of your hamburger.png
                height={24} //  Actual height of your hamburger.png
              />
            )}
          </Button>
        </MobileMenuButtonWrapper>
      </Container>

      <MobileNavMenu isOpen={isMobileMenuOpen} theme={undefined}>
        <NavLink href="/about" onClick={toggleMobileMenu}>About Us</NavLink>
        <NavLink href="/contact" onClick={toggleMobileMenu}>Contact</NavLink>
      </MobileNavMenu>
    </HeaderWrapper>
  );
};

export default Header;