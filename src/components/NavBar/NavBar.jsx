import { useState, useRef, useEffect } from 'react';
import './NavBar.css';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setMenu('home');
    closeMenu();
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100; // Add offset for better accuracy

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
            setMenu(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className='navbar'>
      <h1>Wahaj.<span>Ahmed</span></h1>
      <img 
        src={menu_open} 
        alt="menu" 
        className={`nav-mob-open ${isMenuOpen ? 'hide' : ''}`}
        onClick={toggleMenu}
      />
      <img 
        src={menu_close} 
        alt="close" 
        className={`nav-mob-close ${isMenuOpen ? 'show' : ''}`}
        onClick={toggleMenu}
      />
      <ul ref={menuRef} className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <li className={menu === 'home' ? 'active' : ''}>
          <a className='anchor-link' onClick={scrollToTop} style={{cursor: 'pointer'}}>
            <p>Home</p>
          </a>
        </li>
        <li className={menu === 'about' ? 'active' : ''}>
          <AnchorLink className='anchor-link' offset={50} href='#about' onClick={() => {setMenu('about'); closeMenu();}}>
            <p>About me</p>
          </AnchorLink>
        </li>
        <li className={menu === 'education' ? 'active' : ''}>
          <AnchorLink className='anchor-link' offset={50} href='#education' onClick={() => {setMenu('education'); closeMenu();}}>
            <p>Education</p>
          </AnchorLink>
        </li>
        <li className={menu === 'skills' ? 'active' : ''}>
          <AnchorLink className='anchor-link' offset={50} href='#skills' onClick={() => {setMenu('skills'); closeMenu();}}>
            <p>Skills</p>
          </AnchorLink>
        </li>
        <li className={menu === 'projects' ? 'active' : ''}>
          <AnchorLink className='anchor-link' offset={50} href='#projects' onClick={() => {setMenu('projects'); closeMenu();}}>
            <p>Projects</p>
          </AnchorLink>
        </li>
        <li className={menu === 'contact' ? 'active' : ''}>
          <AnchorLink className='anchor-link' offset={50} href='#contact' onClick={() => {setMenu('contact'); closeMenu();}}>
            <p>Contact me</p>
          </AnchorLink>
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink>
      </div>
    </nav>
  );
};

export default Navbar;