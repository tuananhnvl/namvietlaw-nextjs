import Head from 'next/head'
import Image from 'next/image'
import * as React from 'react'

/* Compo & css */
import styles from '../styles/Home.module.css'
import NavBar from '../component/Navbar'
import Footer from '../component/Footer'
import FormContact from '../component/FormContact'
 import Slider2Bar from '../component/Slider2Bar' 
/* ICON & template */
import { RiHeart2Fill } from 'react-icons/ri';
import { GoLaw } from 'react-icons/go';
import { FaArrowAltCircleRight, FaUserFriends, FaStopwatch, FaStudiovinari, FaStumbleupon } from 'react-icons/fa';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (<MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));


export default function Home() {

  const [expanded, setExpanded] = React.useState('panel1');
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div >
      <NavBar />
      <Head>
        <title>NamVietLaw Co.</title>
        <meta name="description" content="NamVietLawCompany" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.Banner}>
          <div className={styles.BannerImg}>
            <Image src="/banner.jpg" layout='fill' objectFit="cover" className={styles.Image} alt='imagenpm run bvuild' />
          </div>
          <div className={styles.BannerContent}>
            <div className={styles.ItemBannerContentList}>
              <div className={styles.ItemContent}>
                <div className={styles.middle}>
                  <RiHeart2Fill className={styles.StyleIconContent} />
                  <h3>TRUST</h3>
                  <p>Id quis ullamco est officia ex duis duis aliqua.</p>
                </div>
              </div>
              <div className={styles.ItemContent}>
                <div className={styles.middle}>
                  <GoLaw className={styles.StyleIconContent} />
                  <h3>LOYALTY</h3>
                  <p>Id quis ullamco est officia ex duis duis t officia ex duis duis alit officia ex duis duis alialiqua.</p>
                </div>
              </div>
              <div className={styles.ItemContent}>
                <div className={styles.middle}>
                  <RiHeart2Fill className={styles.StyleIconContent} />
                  <h3>SUCPPORT</h3>
                  <p>Id quis ullamco est officia ex duis duit officia ex duis duis alis aliqua.</p>
                </div>
              </div>
            </div>
            <div className={styles.WelcomeContentBanner}>
              <div className={styles.ImageWelcome}>
              </div>
              <div className={styles.ContentWelcome}>
                <div className={styles.middle}>
                  <h3>“EVERY MOUNTAIN TOP IS WITHIN REACH IF YOU JUST KEEP CLIMBING.”</h3>
                  <p>Sint id laborum ipscitation consectetur nulla voluptate labore elit amet enim commodo irure Lorem. Aliquip est ut sit laboris adipisicing. Ad amet quis cupidatat nulla ad anim ullamco aliqua dolor velit magna fugiat et. Ea velit officia exercitation dolore consequat labore sit incididunt ea proident excepteur excepteur sit dolor. Laboris duis consequat exercitation cillum.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.ListServices}>
          <h2 className={styles.HeadingLanding}>OUR SERVICES</h2>
          <div className={styles.ListServicesItem}>
            <div className={styles.ServicesItem}>
              <div className={styles.ServicesItemTitle}>
                <div className={styles.ServicesItemTitleImage}>
                </div>
                <div className={styles.ServicesItemTitleContent}>
                  <p><span className={styles.FirstCharacter}>P</span>ariatur nisi qui duis adipisicing cul nostrud eu pariatur minim. Veniam sunt ad ipsum consectetur duis ut dolore.</p>
                </div>
              </div>
              <ul className={styles.ServicesItemDetail}>
                <li><FaArrowAltCircleRight /><a href='/demo'>CURD</a></li>
                <li><FaArrowAltCircleRight /><a href='/demo'>CURD</a></li>
                <li><FaArrowAltCircleRight /><a href='/demo'>CURD</a></li>
                <li><FaArrowAltCircleRight /><a href='/demo'>CURD</a></li>
              </ul>
            </div>
            <div className={styles.ServicesItem}>
              <div className={styles.ServicesItemTitle}>
                <div className={styles.ServicesItemTitleImage}>

                </div>
                <div className={styles.ServicesItemTitleContent}>
                  <p><span className={styles.FirstCharacter}>P</span>ariatur nisi qui duis adipisicing cul nostrud eu pariatur minim. Veniam sunt ad ipsum consectetur duis ut dolore.</p>
                </div>
              </div>
              <ul className={styles.ServicesItemDetail}>
                <li><FaArrowAltCircleRight /><a href='/demo'>CURD</a></li>
                <li><FaArrowAltCircleRight /><a href='/demo'>CURD</a></li>
                <li><FaArrowAltCircleRight /><a href='/demo'>CURD</a></li>
                <li><FaArrowAltCircleRight /><a href='/demo'>CURD</a></li>
              </ul>
            </div>
            <div className={styles.ServicesItem}>
              <div className={styles.ServicesItemTitle}>
                <div className={styles.ServicesItemTitleImage}>

                </div>
                <div className={styles.ServicesItemTitleContent}>
                  <p><span className={styles.FirstCharacter}>P</span>ariatur nisi qui duis adipisicing cul nostrud eu pariatur minim. Veniam sunt ad ipsum consectetur duis ut dolore.</p>
                </div>
              </div>
              <ul className={styles.ServicesItemDetail}>
                <li><FaArrowAltCircleRight /><a href='/demo'>CURD</a></li>
                <li><FaArrowAltCircleRight /><a href='/demo'>CURD</a></li>
                <li><FaArrowAltCircleRight /><a href='/demo'>CURD</a></li>
                <li><FaArrowAltCircleRight /><a href='/demo'>CURD</a></li>
              </ul>
            </div>
            <div className={styles.ServicesItem}>
              <div className={styles.ServicesItemTitle}>
                <div className={styles.ServicesItemTitleImage}>

                </div>
                <div className={styles.ServicesItemTitleContent}>
                  <p><span className={styles.FirstCharacter}>P</span>ariatur nisi qui duis adipisicing cul nostrud eu pariatur minim. Veniam sunt ad ipsum  minim. Veniam sunt ad ipsum consectetur  minim. Veniam sunt ad ipsum consectetur  minim. Veniam sunt ad ipsum consectetur consectetur duis ut dolore.</p>
                </div>
              </div>
              <ul className={styles.ServicesItemDetail}>
                <li><FaArrowAltCircleRight /><a href='/demo'>CURD</a></li>
                <li><FaArrowAltCircleRight /><a href='/demo'>CURD</a></li>
                <li><FaArrowAltCircleRight /><a href='/demo'>CURD</a></li>
                <li><FaArrowAltCircleRight /><a href='/demo'>CURD</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.BgAboutUs}>
          <div className={styles.AboutUs}>
            <div className={styles.AboutUsFAQ}>
              <h2 className={styles.HeadingLanding}>FREQUENTLY <br/> ASKED QUESTION</h2>
              <>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                  <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>HOW CONTACT TO US</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                      malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                      sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                      sit amet blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                  <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography>HOW PAY FOR SERVICES</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                      malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                      sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                      sit amet blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                  <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography>WHAT ADRESS</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                      malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                      sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                      sit amet blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </>
            </div>
            <div className={styles.AboutUsDetail}>
              <h2 className={styles.HeadingLanding}>ABOUT US</h2>
              <a className={styles.DemoBox}>d</a>
              <div className={styles.AboutUsDetailContent}>
                <div className={styles.AboutContent}>
                  <h3>WHO WE ARE?</h3>
                  <p>Labore minim non et incididunt ullamco incididunt mollit veniam laborum.</p>
                </div>
                <div className={styles.AboutContent}>
                  <h3>OUR MISSION</h3>
                  <p>Labore minim non et incididunt ullamco incididunt mollit veniam laborum.</p>
                </div>
              </div>
              <Button variant="contained">See more!</Button>
            </div>
          </div>
        </div>
        <div className={styles.FactAboutUs}>
          <div className={styles.FactAboutUsDetail}>
            <h2>FACT ABOUT OUR SUCCESS</h2>
            <div className={styles.FactDetail}>
              <div className={styles.FactItem}><FaUserFriends className={styles.StyleIconFact} /><h3>5795</h3><p>Happy Customers</p></div>
              <div className={styles.FactItem}><FaStopwatch className={styles.StyleIconFact} /><h3>5795</h3><p>Happy Customers</p></div>
              <div className={styles.FactItem}><FaStudiovinari className={styles.StyleIconFact} /><h3>5795</h3><p>Happy Customers</p></div>
              <div className={styles.FactItem}><FaStumbleupon className={styles.StyleIconFact} /><h3>5795</h3><p>Happy Customers</p></div>
            </div>
          </div>
        </div>
        <div className={styles.WhyChooseUs}>
          <h2>WHY CHOOSE NAM VIET LAW</h2>
          <div className={styles.DetailWhyChooseUs}>
            <div className={styles.ImageWhyChooseUs}>
              <h3>WHY US</h3>
              <p>Incididunt anim dolor officia ip dolor officia ip dolor officia ip dolor officia ip dolor officia ipsum ut enim et.</p>
            </div>
            <div className={styles.ContentWhyChooseUs}>
              <div className={styles.ContentWhyChooseUsDetail}>
                <h4>1. FAST AND FAST</h4>
                <p>Proident qui dolor officia quiscaecat occa te duis tempor eu reprehenderit ea esse. Proident proident proident in laboris ea eu excepteur. Fugiat tempor mollit ipsum ex.</p>
              </div>
              <div className={styles.ContentWhyChooseUsDetail}>
                <h4>2. FAST AND FAST</h4>
                <p>Proident qui dolor officia quiscaecat occa te duis tempor eu reprehenderit ea esse. Proident proident proident in laboris ea eu excepteur. Fugiat tempor mollit ipsum ex.</p>
              </div>
              <div className={styles.ContentWhyChooseUsDetail}>
                <h4>3. FAST AND FAST</h4>
                <p>Proident qui dolor officia quiscaecat occa te duis tempor eu reprehenderit ea esse. Proident proident proident in laboris ea eu excepteur. Fugiat tempor mollit ipsum ex.</p>
              </div>
              <div className={styles.ContentWhyChooseUsDetail}>
                <h4>4. FAST AND FAST</h4>
                <p>Proident qui dolor officia quiscaecat occa te duis tempor eu reprehenderit ea esse. Proident proident proident in laboris ea eu excepteur. Fugiat tempor mollit ipsum ex.</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.MeetOurTeam}>
          <h2>OUR PROFESSINAL</h2>
          <div className={styles.OurTeamInfo}>
            <div className={styles.Leader}>
              d
            </div>
            <div className={styles.Leader}>
              d
            </div>
            <div className={styles.Leader}>
              d
            </div>
          </div>
        </div>
        <Slider2Bar/> 
        <div className={styles.FormContact}>
          <div className={styles.FormContactField}>
            <div className={styles.FormContent}>
              <h2 className={styles.Content01}>CONTACT NAM VIET LAWFIRM TODAY</h2>
              <h3 className={styles.Content02}>REQUEST A FREE CONSULTATION</h3>
              <p className={styles.Content03}>The stakes are high. Criminal charges can have devastating, lifelong consequences. During the free, confidential consultation, Mr. Porter will answer questions surrounding your legal matter, and discuss and identify potential defenses.</p>
              <p className={styles.Content03}> If you have been arrested and charged with a crime, the State is working on your conviction. It’s time to start building your defense.</p>
            </div>
            <div className={styles.FormTool}>
            <h3 style={{ textAlign: 'center',color:'white' }}>Set Question Now !</h3>
              <FormContact />
            </div>
          </div>
        </div>

   
      </main>

      <Footer/>
    </div>
  )
}
