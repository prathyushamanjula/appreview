/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Box, Button, Grid, Typography, Container, Paper } from '@mui/material';
import Nav from '../Navbar/Nav'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom';
import { Dialog, DialogContent } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import Alert from '@mui/material/Alert';
import why from '../Assets/home.png'
import about1 from '../Assets/about 1.jpg'
import about2 from '../Assets/about2.jpg'
import about3 from '../Assets/about-company-3.jpg'
import feature1 from '../Assets/features-1.jpg'
import feature2 from '../Assets/tabs-3.jpg'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import TelegramIcon from '@mui/icons-material/Telegram';
import ImageIcon from '@mui/icons-material/Image';
import PowerIcon from '@mui/icons-material/Power';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import AOS from 'aos';
import { motion } from "framer-motion"
import { FaCirclePlay } from "react-icons/fa6";
import { CgPlayButtonO } from "react-icons/cg";

const Home = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    const token = localStorage.getItem('token')
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [isMuted, setIsMuted] = React.useState(false);
    const toggleMute = () => {
        setIsMuted(prev => !prev);
    };

    return (
        <>
            <Nav />
            <Grid container spacing={2} margin={"0 auto"} width={'100%'}>
                <Grid item xs={12} md={6} lg={6} sx={{ display: 'flex', justifyContent: 'center', backgroundColor: "#e6d6c7", paddingTop: "60px" }}>
                    <img style={{ width: "100%", height: "auto", display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '2rem' }} src={why} alt="image" />
                </Grid>
                <Grid item xs={12} md={6} lg={6} sx={{ paddingTop: "15px", backgroundColor: "#e6d6c7" }}>
                    <div style={{ display: 'flex' }}>
                        <div style={{ paddingRight: '10px' }}>
                            <p style={{ paddingTop: "12px", textAlign: "start", fontWeight: "600", fontSize: 40, color: "black" }}> Revolutionize Your </p>
                            <p style={{ textAlign: "start", fontWeight: "600", fontSize: 40, color: "black" }}> Social Sharing Experience!</p>
                            <p style={{ textAlign: "start", paddingTop: "30px", fontSize: 19, color: "black" }}> With Quantum Share,we aim to streamline this process and </p>
                            <p style={{ textAlign: "start", fontSize: 19, color: "black" }}> empower users like you to effortlessly distribute content, connect  </p>
                            <p style={{ textAlign: "start", fontSize: 19, color: "black" }}> with others,and amplify your online presence.</p>
                        </div>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "60% 40%", paddingTop: "40px", }}>
                        <div style={{ paddingLeft: "0px" }}> <Typography sx={{ fontSize: 17, fontWeight: '400', paddingTop: '12px', }} gutterBottom>
                            <span style={{ borderRadius: '3px ', backgroundColor: '#ba343b', color: 'white', height: '35px', padding: '15px', borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px', fontWeight: '400' }}>Watch Now</span>
                            <IconButton>
                                <CgPlayButtonO className='homeCgPlayButtonO' onClick={handleClickOpen} />
                                <Dialog
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="alert-dialog-title"
                                    aria-describedby="alert-dialog-description"
                                >
                                    <DialogContent>
                                        <video autoPlay loop muted={isMuted} style={{ width: '100%', height: 'auto' }}>
                                            <source src="https://quantumshare.quantumparadigm.in/vedio/SocialMedia.mp4" type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                        <IconButton onClick={toggleMute} style={{ position: 'absolute', left: '10px', color: '#BA343B' }}>
                                            {isMuted ? <VolumeOffIcon /> : <VolumeUpIcon />}
                                        </IconButton>
                                    </DialogContent>
                                </Dialog>
                            </IconButton>
                        </Typography>
                        </div>
                        <div style={{ paddingTop: "20px", height: "35px", marginLeft: "-15px", marginRight: "5px" }}><Link to="/signUp"><button style={{ backgroundColor: '#ba343b', color: '#fff', padding: '15px ', borderRadius: "12px", border: "1px solid #ba343b", cursor: 'pointer', fontSize: '17px', fontWeight: '400' }}>Get Started With Free</button></Link></div>
                    </div>
                </Grid>
                <Grid style={{ backgroundColor: '#fbf4f5', width: '100%', paddingBottom: "24px" }}>
                    <Grid item xs={12} md={12} lg={12}>
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: 'easeOut', delay: "0.5" }}
                            style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 20, marginTop: '2rem' }}>
                            <Card className='mystyle' sx={{ width: 350, height: 120, margin: 1, marginLeft: "15px", boxShadow: "none", backgroundColor: '#fbf4f5' }} elevation={12}>
                                <CardContent>
                                    <div className='parent' style={{ display: 'grid', gridTemplateColumns: 'auto auto' }}>
                                        <div style={{ width: '80px', height: '80px', backgroundColor: '#edd0d4', marginTop: '7px' }}>
                                            <Typography className="child"  >
                                                <div className="child" style={{ width: '80px', height: '80px' }}>
                                                    <InsertLinkIcon style={{ color: 'white', margin: "20px", width: '40px', height: '40px' }}></InsertLinkIcon>
                                                </div>
                                            </Typography>
                                        </div>
                                        <div style={{ marginLeft: '15px' }}>
                                            <Typography className='home-text' sx={{ fontSize: '18', color: 'black', fontWeight: 600, paddingTop: "5px" }}>Connecting Your Accounts</Typography>
                                            <Typography sx={{ fontSize: 14, marginTop: '7px', fontWeight: '600' }} color="text.secondary" gutterBottom>
                                                Link all your social media accounts to Quantum Share.</Typography>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className='mystyle' sx={{ width: 350, height: 120, margin: 1, marginLeft: "15px", boxShadow: "none", backgroundColor: '#fbf4f5' }} elevation={12}>
                                <CardContent>
                                    <div className='parent' style={{ display: 'grid', gridTemplateColumns: 'auto auto' }}>
                                        <div style={{ width: '80px', height: '80px', backgroundColor: '#edd0d4', marginTop: '6px' }}>
                                            <Typography className="child"  >
                                                <div className="child" style={{ width: '80px', height: '80px' }}>
                                                    <MapsUgcIcon style={{ color: 'white', margin: "20px", width: '40px', height: '40px' }}></MapsUgcIcon>
                                                </div>
                                            </Typography>
                                        </div>
                                        <div style={{ marginLeft: '15px' }}>
                                            <Typography className='home-text' sx={{ fontSize: '18', color: 'black', fontWeight: 600, paddingTop: "5px" }}> Customize Your Text with AI</Typography>
                                            <Typography sx={{ fontSize: 14, marginTop: '7px', fontWeight: '600' }} color="text.secondary" gutterBottom>
                                                Transform your messages using AI-created content and hashtags.</Typography>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className='mystyle' sx={{ width: 350, height: 120, margin: 1, marginLeft: "15px", boxShadow: "none", backgroundColor: '#fbf4f5' }} elevation={12}>
                                <CardContent>
                                    <div className='parent' style={{ display: 'grid', gridTemplateColumns: 'auto auto' }}>
                                        <div style={{ width: '80px', height: '80px', backgroundColor: '#edd0d4', marginTop: '7px' }}>
                                            <Typography className="child"  >
                                                <div className="child" style={{ width: '80px', height: '80px' }}>
                                                    <AutoFixHighIcon style={{ color: 'white', margin: "20px", width: '40px', height: '40px' }}></AutoFixHighIcon>
                                                </div>
                                            </Typography>
                                        </div>
                                        <div style={{ marginLeft: '15px' }}>
                                            <Typography className='home-text' sx={{ fontSize: '18', color: 'black', fontWeight: 600, paddingTop: "5px" }}> Create Your AI Images</Typography>
                                            <Typography sx={{ fontSize: 14, marginTop: '7px', fontWeight: '600' }} color="text.secondary" gutterBottom>
                                                Experience instant image creation tailored to your needs.  </Typography>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6} lg={6} sx={{ paddingTop: "15px", backgroundColor: "white" }}>
                    <motion.div initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: 'easeOut', delay: "0.7" }} style={{ display: 'flex' }}>
                        <div style={{ paddingLeft: "25px" }}>
                            <Grid item xs={12} md={12} lg={12} sx={{ textAlign: 'start' }}>
                                <p style={{ color: '#3e5055', marginLeft: "20px", paddingTop: "30px", fontSize: 18, fontWeight: '600' }}>WHO WE ARE ?</p>
                            </Grid>
                            <Grid item xs={12} md={12} lg={12} sx={{ textAlign: 'start' }}>
                                <h1 style={{ color: '#3e5056', marginLeft: "20px", paddingBottom: "15px", paddingTop: "20px", fontSize: "35px" }}>Why Companies Choose Quantum Share ?</h1>
                            </Grid>
                            <div style={{ display: 'flex', marginLeft: "20px" }}>
                                <div>
                                    <Typography style={{ paddingTop: "20px", color: '#3e5055', fontStyle: "italic", fontSize: "20px" }}> Leverage Quantum Share to eliminate the complexity of managing multiple social media platforms. With Quantum Share, businesses can seamlessly integrate and streamline their social media efforts from one centralized hub.</Typography>
                                    <Alert style={{ paddingLeft: "0px", fontSize: "18px", paddingTop: "30px" }} variant="white" severity="success" border="1px solid white">Get to Market Quickly with Lower Build Costs
                                    </Alert>
                                    <Alert style={{ paddingLeft: "0px", fontSize: "16px", fontSize: "18px" }} variant="white" severity="success" >Reliable and Trusted by Leading Companies</Alert>
                                    <Alert style={{ paddingLeft: "0px", fontSize: "18px" }} variant="white" severity="success" >Minimal Ongoing Maintenance and Support Costs</Alert>
                                    <div style={{ textAlign: 'center', margin: '1rem', marginLeft: "-200px", marginTop: "50px" }}>
                                        <Link to='/about'>
                                            <Button variant="contained" sx={{ backgroundColor: '#ba343b', cursor: 'pointer', '&:hover': { bgcolor: '#9e2b31' }, fontWeight: '600' }}>Read More</Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </Grid>
                <Grid item xs={12} md={5.9} lg={5.9} sx={{ display: 'flex', justifyContent: 'center', backgroundColor: "white" }}>
                    <Grid item xs={12} md={12} lg={12} sx={{ backgroundColor: "white" }}>
                        <motion.img initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: 'easeOut', delay: "0.7" }} style={{ paddingBottom: "10px", paddingRight: "10px", borderRadius: "20px", width: "100%", height: "auto", }} src={about1} alt="image" ></motion.img> </Grid>
                    <Grid item xs={12} md={12} lg={12} sx={{ display: 'flex', justifyContent: 'center', backgroundColor: "white", display: "grid", gridTemplateRows: "auto auto" }}>
                        <Grid item xs={12} md={12} lg={12} sx={{ display: 'flex', justifyContent: 'center', backgroundColor: "white" }}>
                            <motion.img initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, ease: 'easeOut', delay: "0.7" }} style={{ paddingBottom: "5px", borderRadius: "20px", width: "100%", height: "auto", display: 'flex', justifyContent: 'center', alignItems: 'center' }} src={about2} alt="image" ></motion.img>
                        </Grid>
                        <Grid item xs={12} md={12} lg={12} sx={{ display: 'flex', justifyContent: 'center', backgroundColor: "white" }}>
                            <motion.img initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, ease: 'easeOut', delay: "0.7" }} style={{ paddingBottom: "10px", paddingTop: "5px", borderRadius: "20px", width: "100%", height: "auto", display: 'flex', justifyContent: 'center', alignItems: 'center' }} src={about3} alt="image" ></motion.img>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={11.9} lg={11.9} sx={{ backgroundColor: "#ffffff" }}>
                    <h1 style={{ textAlign: "center", paddingTop: "30px", paddingBottom: '40px', color: '#d3040c', fontSize: "2.5rem", fontWeight: '600' }}>How does Quantum Share Work ?</h1>
                </Grid>
                <Grid item xs={12} md={6} lg={6} sx={{ marginTop: "70px", backgroundColor: "white" }}>
                    <img style={{ marginLeft: "50px", borderRadius: "25px", width: "80%", }} src={feature1} alt="image"></img>
                </Grid>
                <Grid item xs={12} md={5.9} lg={5.9} sx={{ paddingTop: "15px", backgroundColor: '#fbf4f5', marginBottom: "40px", borderRadius: '16px', width: '80%' }}>
                    <Typography sx={{ fontSize: 17, marginTop: '7px', paddingBottom: "15px" }} style={{ paddingRight: '15px', marginRight: "20px", paddingLeft: '10px', paddingTop: '8px', fontWeight: '500' }} color="black" gutterBottom>
                        Quantum Share simplifies social media management through a streamlined and user-friendly process. To get started, users click the Quantum Share link
                        to open the web app, where they sign pu by providing their email and creating a password. After completing email verification,
                        users log in and access the dashboard.From there,navigating to 'social integration' from the drop-down menu allows user to
                        select and connect their desired social media profiles.</Typography>
                    <Typography sx={{ fontSize: 17, marginTop: '7px', paddingBottom: "15px", paddingTop: "10px" }} style={{ paddingRight: '15px', marginRight: "20px", paddingLeft: '10px', fontWeight: '500' }} color="black" gutterBottom>
                        Once integrated, users can create and post content effortlessly. By going to
                        media platforms the vwant topostto,andclick'Post'topublishtheircontent the 'Post' section,
                        they can add a title and description, select the social across multiple platforms simultaneously.
                        This seamless process ensures efficient content management and broad reach.</Typography>
                    <Typography sx={{ fontSize: 17, marginTop: '7px', paddingTop: "15px" }} style={{ paddingRight: '15px', marginRight: "20px", paddingLeft: '10px', paddingBottom: '25px', fontWeight: '500' }} color="black" gutterBottom>
                        Exciting upcoming features wil further enhance Quantum Share's functionality. The Schedule Post feature wil
                        allow users to plan their content strategy by scheduling posts for future dates and times,ensuring consistent
                        audience engagement. Advanced Analytics will provide insights into user interactions,including likes,retweets,
                        and clicks,helping to optimize content strategies. The Auto Hashtags feature will automatically add relevant
                        hashtags to posts based on real-time keyword popularity, boosting visibility and engagement.Lastly, Comment Management will enables users to
                        retrieve, post, and manage comments, fostering community engagement</Typography>
                </Grid>
                <Grid item xs={12} md={6} lg={6} sx={{ backgroundColor: "white", marginTop: "10px" }}>
                    <Card className='mystyle' id="hover-div" sx={{ width: "85%", height: "auto", marginLeft: "30px", boxShadow: "none", backgroundColor: '#fbf5f7', borderRadius: "25px" }} elevation={12}>
                        <CardContent>
                            <div style={{ display: "grid", gridTemplateColumns: "10% 90%" }}>
                                <div style={{ width: '40px', height: '40px', backgroundColor: 'white', marginTop: '6px', borderRadius: "20px" }}>
                                    <TelegramIcon style={{ color: '#b24252', width: '30px', height: '30px', marginTop: "5px", marginLeft: "6px" }}></TelegramIcon>
                                </div>
                                <div>
                                    <Typography className='home-text' sx={{ fontSize: '25px', fontWeight: 900, paddingTop: "10px", paddingLeft: "15px", color: "#45454d" }}>Send Posts</Typography>
                                </div>
                            </div>
                            <div style={{ marginLeft: '15px' }}>
                                <Typography sx={{ fontSize: 17, marginTop: '7px', paddingLeft: "50px", paddingRight: "80px", fontWeight: '600' }} color="text.secondary" gutterBottom>
                                    Create a post with text, images, or videos and send it immediately or schedule ti for a future date or time. Effortlessly manage your content distribution across multiple social media platforms from one place. </Typography>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className='mystyle' id="hover-div" sx={{ width: "85%", height: "auto", marginLeft: "30px", boxShadow: "none", backgroundColor: '#fbf4f5', marginTop: "15px", borderRadius: "25px" }} elevation={12}>
                        <CardContent>
                            <div style={{ display: "grid", gridTemplateColumns: "10% 90%" }}>
                                <div style={{ width: '40px', height: '40px', backgroundColor: 'white', marginTop: '6px', borderRadius: "20px" }}>
                                    <ImageIcon style={{ color: '#b24252', width: '30px', height: '30px', marginTop: "5px", marginLeft: "6px" }}></ImageIcon>
                                </div>
                                <div>
                                    <Typography className='home-text' sx={{ paddingTop: "10px", paddingLeft: "15px", color: "#45454d", fontSize: '25px', fontWeight: 900, }}> Manage Images or Videos</Typography>
                                </div>
                            </div>
                            <div style={{ marginLeft: '15px' }}>
                                <Typography sx={{ fontSize: 17, marginTop: '7px', paddingLeft: "50px", paddingRight: "80px", fontWeight: '600' }} color="text.secondary" gutterBottom>
                                    Upload your images or videos directly to Quantum Share and get a URL to post with. No need for as separate image or video
                                    hosting service, simplifying your media management </Typography>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className='mystyle' id="hover-div" sx={{ width: "85%", height: "auto", marginLeft: "30px", boxShadow: "none", backgroundColor: '#fbf4f5', marginTop: "15px", borderRadius: "25px" }} elevation={12}>
                        <CardContent>
                            <div style={{ display: "grid", gridTemplateColumns: "10% 90%" }}>
                                <div style={{ width: '40px', height: '40px', backgroundColor: 'white', marginTop: '6px', borderRadius: "20px" }}>
                                    <PowerIcon style={{ color: '#b24252', width: '30px', height: '30px', marginTop: "5px", marginLeft: "6px" }}></PowerIcon>
                                </div>
                                <div>
                                    <Typography className='home-text' sx={{ paddingTop: "10px", paddingLeft: "15px", color: "#45454d", fontSize: '25px', fontWeight: 900, }}> Integrations</Typography>
                                </div>
                            </div>
                            <div style={{ marginLeft: '15px' }}>
                                <Typography sx={{ fontSize: 17, marginTop: '7px', paddingLeft: "50px", paddingRight: "80px", fontWeight: '600' }} color="text.secondary" gutterBottom>
                                    Save your team's time by connecting with various Quantum Share integrations, such as Notion, Airtable, Make, and Bubble. Seamlessly integrate with your existing tools and workflows. </Typography>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={5.9} lg={5.9} sx={{ display: 'flex', justifyContent: 'center', backgroundColor: "white" }}>
                    <img style={{ paddingBottom: "10px", marginLeft: '10px', paddingRight: "10px", width: "100%", height: "auto", display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '16px' }} src={feature2} alt="image" ></img>
                </Grid>
            </Grid >
            <div className="icon-container">
                <Link to='/reference-video'><FaCirclePlay className="circle-icon" /></Link>
                <div className="hover-content">reference video</div>
            </div>
            <Footer />
        </>
    );
}

const Footer = () => {
    return (
        <Box p={2} textAlign="center" bgcolor="#ba343b">
            <Typography variant="body1" color='#fff' textAlign="center">
                &copy; {new Date().getFullYear()} Quantum Share. All rights reserved | Click here to view our privacy policy<a href= "https://privacy-policy.quantumparadigm.in/" id="privacy" target='blank'> : Privacy Policy</a>
            </Typography>
        </Box>
    );
}

export default Home;