/* GET template*/
import React from 'react';
import Image from 'next/image'
import styles from '../styles/Footer.module.css'
import Link from 'next/link'
import { FaFacebookF,FaLinkedinIn } from 'react-icons/fa';

class Footer extends React.Component {
    render() {
        return (
            <>
           <footer className={styles.footer}>
                    <p>FOOTER</p>
           </footer>
            </>
           
        )
    }
}

export default Footer
