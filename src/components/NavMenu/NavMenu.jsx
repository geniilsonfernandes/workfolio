import React, { useState, useEffect } from "react";
//css
import styles from "./NavMenu.module.css";
import { MessageIcon, BuguerIcon, InstagramIcon, LinkdinIcon } from "../icons/IconsComponet";
import { NavLink, useLocation } from "react-router-dom";
import Container from "./../layout/Container";
import IconButton from "./../Buttons/IconButton/IconButton";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <Container>
      <nav className={`${styles.nav}`}>
        <div className={`${styles.menu__container} ${isOpen && styles.active}`}>
          <div className={styles.email}>
            <MessageIcon />
            geniilsonfernandes@gmail.com
          </div>
          <div className={styles.nav__links}>
            <NavLink to="/" activeClassName={styles.link__active} end>
              Works
            </NavLink>
            <NavLink to="about" activeClassName={styles.link__active} end>
              Sobre
            </NavLink>
          </div>
          <div className={styles.social__links}>
            <a href="https://www.instagram.com/geecods/">
              <IconButton>
                <InstagramIcon />
              </IconButton>
            </a>
            <a href="https://www.linkedin.com/in/genilson-fernandes/">
              <IconButton>
                <LinkdinIcon />
              </IconButton>
            </a>
          </div>
        </div>
        <div className={styles.menu__btn} onClick={() => setIsOpen(!isOpen)}>
          <BuguerIcon />
        </div>
      </nav>
    </Container>
  );
};

export default NavMenu;
