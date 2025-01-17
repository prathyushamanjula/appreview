import React from 'react';
import Nav from '../Navbar/Nav';
import Sidenav from '../Navbar/Sidenav';
import { Link } from 'react-router-dom';
import { Box, Typography, Grid } from '@mui/material';

const PrivacyPolicy = () => {
    const token = localStorage.getItem('token');

    return (
        <>
            <div>
                <Nav />
                {token && <Sidenav />}
                <Box sx={{ marginTop: token ? '-3.2rem' : '-1.2rem' }}>
                    <Grid container justifyContent="center">
                        <Grid item xs={10} md={10}>
                            <Box mt={4} mb={4}>
                                <Typography variant="h4" gutterBottom sx={{ color: '#b4232a', fontSize: '2.2rem', fontWeight: '600' }}><b>Privacy Policy</b></Typography>
                                <Typography variant="body1" paragraph sx={{ fontSize: '1.3rem' }}>
                                    Last updated: August 9, 2024
                                </Typography>
                                <Typography variant="body1" paragraph sx={{ fontSize: '1.2rem' }}>
                                    Quantum Paradigm Pvt. Ltd ("Company", "We", "Us", or "Our") operates the Quantum Share web application ("Service"). This Privacy Policy explains how We collect, use, disclose, and safeguard your information when you use our Service. By using the Service, you consent to the practices described in this Privacy Policy.
                                </Typography>
                                <Typography variant="h6" gutterBottom sx={{ fontSize: '1.6rem' }}><b>1. Interpretation and Definitions</b></Typography>
                                <Typography variant="subtitle1" gutterBottom sx={{ fontSize: '1.5rem' }}><b>Interpretation</b></Typography>
                                <Typography variant="body1" paragraph sx={{ fontSize: '1.2rem' }}>
                                    The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                                </Typography>
                                <Typography variant="subtitle1" gutterBottom sx={{ fontSize: '1.5rem' }}><b>Definitions</b></Typography>
                                <Typography variant="body1" paragraph sx={{ fontSize: '1.2rem' }}>
                                    For the purposes of this Privacy Policy:
                                </Typography>
                                <Typography variant="body1" paragraph sx={{ fontSize: '1.2rem', margin: '1rem 3rem' }}>
                                    • <b>Account</b> means a unique account created for You to access our Service or parts of our Service.<br />
                                    • <b>Affiliate</b> means an entity that controls, is controlled by, or is under common control with a party.<br />
                                    • <b>Application</b> refers to Quantum Share, the software program provided by the Company.<br />
                                    • <b>Cookies</b> are small files that are placed on Your device by a website, containing the details of Your browsing history on that website among its many uses.<br />
                                    • <b>Country</b> refers to: Karnataka, India.<br />
                                    • <b>Device</b> means any device that can access the Service such as a computer, a cellphone, or a digital tablet.<br />
                                    • <b>Personal Data</b> is any information that relates to an identified or identifiable individual.<br />
                                    • <b>Service</b> refers to the Application or the Website or both.<br />
                                    • <b>Service Provider</b> means any natural or legal person who processes the data on behalf of the Company.<br />
                                    • <b>Usage Data</b> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (e.g., the duration of a page visit).<br />
                                    • <b>You</b> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
                                </Typography>
                                <Typography variant="h6" gutterBottom sx={{ fontSize: '1.6rem' }}><b>2. Information We Collect</b></Typography>
                                <Typography variant="subtitle1" gutterBottom sx={{ fontSize: '1.5rem' }}><b>Personal Data</b></Typography>
                                <Typography variant="body1" paragraph sx={{ fontSize: '1.2rem' }}>
                                    While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
                                </Typography>
                                <Typography variant="body1" paragraph sx={{ fontSize: '1.2rem', margin: '1rem 3rem' }}>
                                    • Email address<br />
                                    • First name and last name<br />
                                    • Phone number<br />
                                    • Address, State, Province, ZIP/Postal code, City
                                </Typography>
                                <Typography variant="subtitle1" gutterBottom sx={{ fontSize: '1.5rem' }}><b>Usage Data</b></Typography>
                                <Typography variant="body1" paragraph sx={{ fontSize: '1.2rem' }}>
                                    Usage Data is collected automatically when using the Service. This data may include information such as your Device's IP address, browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers, and other diagnostic data.
                                </Typography>
                                <Typography variant="h6" gutterBottom sx={{ fontSize: '1.6rem' }}><b>3. Use of Your Personal Data</b></Typography>
                                <Typography variant="body1" paragraph sx={{ fontSize: '1.2rem' }}>
                                    We may use Personal Data for the following purposes:
                                </Typography>
                                <Typography variant="body1" paragraph sx={{ fontSize: '1.2rem', margin: '1rem 3rem' }}>
                                    • To provide and maintain our Service, including monitoring usage of our Service.<br />
                                    • To manage Your Account and enable access to various features of the Service.<br />
                                    • To contact You regarding updates or informative communications related to the Service.<br />
                                    • To manage Your requests and respond to Your inquiries.<br />
                                    • To send You promotional materials, with an option to opt-out.<br />
                                    • To facilitate business transfers, such as mergers, acquisitions, or sales.<br />
                                    • To enforce our policies and legal obligations.
                                </Typography>
                                <Typography variant="h6" gutterBottom sx={{ fontSize: '1.6rem' }}><b>4. Sharing Your Personal Data</b></Typography>
                                <Typography variant="body1" paragraph sx={{ fontSize: '1.2rem' }}>
                                    We may share your information in the following situations:
                                </Typography>
                                <Typography variant="body1" paragraph sx={{ fontSize: '1.2rem', margin: '1rem 3rem' }}>
                                    • With Service Providers to monitor and analyze the use of our Service.<br />
                                    • For Business Transfers if the Company is involved in a merger, sale of assets, or acquisition.<br />
                                    • With Affiliates requiring them to honor this Privacy Policy.<br />
                                    • With Business Partners to offer you certain products, services, or promotions.<br />
                                    • With other users when you interact in public areas of the Service.<br />
                                    • With Your Consent to disclose your information for other purposes.
                                </Typography>
                                <Typography variant="h6" gutterBottom sx={{ fontSize: '1.6rem' }}><b>5. Retention of Your Personal Data</b></Typography>
                                <Typography variant="body1" paragraph sx={{ fontSize: '1.2rem' }}>
                                    We will retain your Personal Data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy. Usage Data will be retained for a shorter period, except when used to strengthen the security or functionality of our Service or to comply with legal obligations.
                                </Typography>
                                <Typography variant="h6" gutterBottom sx={{ fontSize: '1.6rem' }}><b>6. Transfer of Your Personal Data</b></Typography>
                                <Typography variant="body1" paragraph sx={{ fontSize: '1.2rem' }}>
                                    Your information may be transferred to — and maintained on — computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those in your jurisdiction.
                                </Typography>
                                <Typography variant="h6" gutterBottom sx={{ fontSize: '1.6rem' }}><b>7. Security of Your Personal Data</b></Typography>
                                <Typography variant="body1" paragraph sx={{ fontSize: '1.2rem' }}>
                                    We use commercially acceptable means to protect Your Personal Data, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. Therefore, while we strive to use commercially acceptable means to protect Your Personal Data, we cannot guarantee its absolute security.
                                </Typography>
                                <Typography variant="h6" gutterBottom sx={{ fontSize: '1.6rem' }}><b>8. Compliance with Google API Services User Data Policy</b></Typography>
                                <Typography variant="body1" paragraph sx={{ fontSize: '1.2rem' }}>
                                    Our use and transfer of information received from Google APIs will adhere to the Google API Services User Data Policy, including the Limited Use requirements. The Limited Use Policy restricts how we can use your data, ensuring it is only used for the specific purposes outlined in this Privacy Policy.                                </Typography>
                                <Typography variant="h6" gutterBottom sx={{ fontSize: '1.6rem' }}><b>9. Changes to This Privacy Policy</b></Typography>
                                <Typography variant="body1" paragraph sx={{ fontSize: '1.2rem' }}>
                                    We may update our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
                                </Typography>
                                <Typography variant="h6" gutterBottom sx={{ fontSize: '1.6rem' }}><b>10. Contact Us</b></Typography>
                                <Typography variant="body1" paragraph sx={{ fontSize: '1.2rem' }}>
                                    If you have any questions about this Privacy Policy, You can contact us:
                                </Typography>
                                <Typography variant="body1" paragraph sx={{ fontSize: '1.2rem', margin: '1rem 3rem' }}>
                                    • By email: <Link to="mailto:contact@quantumparadigm.com">info@quantumparadigm.in</Link><br />
                                    • By visiting this page on our website: <Link to="https://www.quantumparadigm.in/contact-us/">https://www.quantumparadigm.in/contact-us/</Link>
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </div>
            <Footer />
        </>
    );
};

const Footer = () => {
    return (
        <Box p={2} textAlign="center" bgcolor="#ba343b">
            <Typography variant="body1" color='#fff' textAlign="center">
                &copy; {new Date().getFullYear()} Quantum Share. All rights reserved | <a href= "https://privacy-policy.quantumparadigm.in/" id="privacy">Privacy Policy</a>
            </Typography>
        </Box>
    );
}

export default PrivacyPolicy;