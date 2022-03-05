/* GET template*/
import React,{ useEffect, useState } from 'react';
import Image from 'next/image'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
import { FaFacebookF,FaLinkedinIn,FaHome } from 'react-icons/fa';

import {GoLaw} from 'react-icons/go';

export default function NavBar() {

    const [stickyClass, setStickyClass] = useState('relative');
    const [IconNav01, setIconNav01] = useState('');
    const [IconNav02, setIconNav02] = useState('menuiconhidden');
  const [IconHomeTitleStyle00, setIconHomeTitleStyle00] = useState(''); 

    useEffect(() => {
      window.addEventListener('scroll', stickNavbar);
  
      return () => {
        window.removeEventListener('scroll', stickNavbar);
      };
    }, []);
  
    const stickNavbar = () => {
      if (window !== undefined) {
        let windowHeight = window.scrollY;
        windowHeight > 100 ? setStickyClass('sticky-nav') : setStickyClass('relative');
        windowHeight > 100 ? setIconNav01('iconhidden') : setIconNav01('');
        windowHeight > 100 ? setIconNav02('menuiconshow') : setIconNav02('menuiconhidden');
       windowHeight > 100 ? setIconHomeTitleStyle00('IconHomeTitleStyle01') : setIconHomeTitleStyle00(''); 
      }
    };
        return (
            <>
            <nav className={styles.Navbar} >
                <div className={styles.NavbarDetail01}>
                    <div className={styles.NavbarLogo}>
                        <Link href="/" className={styles.NavbarLogoStyle}><Image src="/logo.svg" alt="Vercel Logo"  width={350} height={90}  /></Link>
                    </div>
                    <div className={styles.NavbarContact}>
                        <a  className={styles.IconNav01}><FaFacebookF size={30} color={`#ffff`} style={{margin:'auto'}} /></a>
                        <a className={styles.TitIconNav01}>
                            <h3 >Hotline :</h3>
                            <p>
                                Contact to Services : +12345789
                            </p>
                        </a>
                     
                    </div>
                </div>
            </nav>
            <div  className={`${stickyClass}`}>
                <div className={styles.NavbarDetail02} >
                    <div className={styles.NavbarList}>
                        <ul className={styles.MenuItemBar}>
                            <li >
                                <Link href="/" className={styles.MenuItem} >
                                    <a className={styles.IconHome}>
                                        <FaHome  className={`${IconNav01} ${styles.IconHomeStyle}`} />
                                        <GoLaw className={`${IconNav02} ${styles.IconHomeStyle}`} />
                                        <a className={`IconHomeTitleStyle ${IconHomeTitleStyle00}`}>NamVietLaw</a>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/OutTeam" className={styles.MenuItem}><a>Our Team</a></Link>
                            </li>
                            <li>
                                <Link href="/Investment" className={styles.MenuItem}><a>Investment</a></Link>
                            </li>
                            <li>
                                <Link href="/Newfeeds" className={styles.MenuItem}><a>NewFeeds</a></Link>
                            </li>
                            <li>
                                <Link href="/Document" className={styles.MenuItem}><a>Document</a></Link>
                            </li>
                            <li>
                                <Link href="/CURD" className={styles.MenuItem}><a>CURD</a></Link>
                            </li>
                        </ul>
                        <div className={styles.NavbarContact}>
                            <ul className={styles.MenuItemContact}>
                                <li><FaFacebookF className={styles.StyleIconContactMenu}/></li>

                                <li><FaLinkedinIn className={styles.StyleIconContactMenu}/></li>
                            </ul>
                        
                        
                        </div>
                    </div>
                    
                </div>
            </div>
               
            
            </>
           
        )

}

