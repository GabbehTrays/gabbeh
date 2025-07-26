// src/components/Sidebar.jsx
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Sidebar = ({ isOpen, toggleMenu }) => {
  const { t } = useTranslation();

  return (
    <>
      <button
        className={`burger-menu ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <img src="./assets/images/Gabbeh.png" alt="Gabbeh Logo" className="sidebar-logo" />
        <nav>
          <NavLink
            to="/shop"
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={toggleMenu}
          >
            <span dir="auto">{t('home')}</span>
          </NavLink>
          <NavLink
            to="/about-contact"
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={toggleMenu}
          >
            <span dir="auto">{t('about_contact')}</span>
          </NavLink>
        </nav>
        <LanguageSwitcher />
      </div>
    </>
  );
};

export default Sidebar;