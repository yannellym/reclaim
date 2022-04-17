import MarketNav from "../../components/MarketNav/MarketNav"
import Footer from "../../components/Footer/Footer"
import "./profile.css"
import React, { useEffect, useState } from "react"
import ControlledAccordions from "../../components/Accordion/Profile-accordion"
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import FaxIcon from '@mui/icons-material/Fax';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useAuth, upload, auth } from "../firebaseConfig/firebaseConfig"
import 'animate.css';


const Profile= ( ) => {
    const [display, setDisplay] = useState("");
    const [privacy, setPrivacy] = useState("");
    const [user, setUser] = useState("");
    const [help, setHelp] = useState("");
    const [photoURL, setPhotoURL] = useState("https://www.clipartmax.com/png/full/223-2233082_earth-t-shirt-vector-blue-earth-smiling-face-1500-1500-world-peace.png");
    const [photo, setPhoto] = useState(null);
    const [loading, setLoading] = useState(false);
    const currentUser = useAuth();
    const [email, setEmail] = useState();
    const [name, setName] = useState("awesomeUser" + Math.ceil(Math.random()* 100));

    
    const contactInfoDisplay = () => {
        setDisplay(!display)
        setPrivacy(false)
        setUser(false)
        setHelp(false)
    }
    const privacyInfoDisplay = () => {
        setPrivacy(!privacy)
        setUser(false)
        setHelp(false)
        setDisplay(false)
    }

    const userInfoDisplay = () => {
        setUser(!user)
        setHelp(false)
        setDisplay(false)
        setPrivacy(false)
    }

    const helpInfoDisplay = () => {
        setHelp(!help)
        setDisplay(false)
        setPrivacy(false)
        setUser(false)
    }


    useEffect((display) => {
        setDisplay(true)
        setPrivacy(false)
        setUser(false)
        setHelp(false)
    }, []);

        function handleChange(e){
          if(e.target.files[0]) {
              setPhoto(e.target.files[0])
          }
        }
        function handleClick(){
            upload(photo, currentUser, setLoading);
        }

        useEffect(() => {
            if(currentUser?.photoURL){
            setPhotoURL(currentUser.photoURL)
            }
        }, [currentUser])


    return (
        <div>
            <MarketNav/>
            <section className="profile-container">
                <h1 class="animate__animated animate__rubberBand"> Welcome 👋  </h1>
                <section className="profile-section">
                    <div className="left-profile-div">
                        <img src={photoURL} alt="user" />
                            <section className="avatar-section">
                                <input type="file" className="avatar-uploader" onChange={ handleChange } />
                                <button  disabled={ loading || !photo }className="file-upload" onClick={handleClick}>upload </button>
                            </section>
                        
                        <section className="left-profile-categories">
                           <div>
                                <p onMouseOver={contactInfoDisplay}>Contact information</p>
                                <p onMouseOver={privacyInfoDisplay}>Privacy Settings</p>
                                <p onMouseOver={userInfoDisplay}>User Agreement</p>
                                <p onMouseOver={helpInfoDisplay}>Help & Support</p>
                            </div>
                        </section>
                    </div>
                    <div className="right-profile-div">
                        <section className={display ? "contact-info" : "hidden"}>
                        <h1>Contact Information</h1>
                           <div className="profile-name">
                                <section className="labels">
                                    <h4>Username:</h4>
                                    <h4>Email:</h4>
                                </section>
                                <section className="user-inputs">
                                    <p>{name}</p>
                                    <p>{currentUser?.email}</p>
                                </section>
                            </div>
                            <img src="../../images/information.png" className="info-desk" alt="info icon" />
                        </section>
                        <section className={privacy? "privacy-info" : "hidden"} >
                            <ControlledAccordions />
                        </section>
                        <section className={user ? "user-info" : "hidden"}>
                        <h1 className="useragreement-title"> User Agreement </h1>
                            <p>
                                We don’t sell your personal data to advertisers, and we don’t share
                                information that directly identifies you (such as your name, email 
                                address or other contact information) with advertisers unless you give
                                us specific permission. Instead, advertisers can tell us things like 
                                the kind of audience they want to see their ads, and we show those 
                                ads to people who may be interested. We provide advertisers with reports
                                about the performance of their ads that help them understand how
                                people are interacting with their content. See Section 2 below to
                                learn more.
                                <br/>
                                We don’t charge you to use ReClaim or the other products and services
                                covered by these Terms. Instead, businesses and organizations pay us to 
                                show you ads for their products and services. By using our Products, you 
                                agree that we can show you ads that we think will be relevant to you and
                                your interests. We use your personal data to help determine which ads to 
                                show you.
                            </p>
                        </section>
                        <section className={help ? "help-info" : "hidden"}>
                        <h1>How can we help you? </h1>
                            <p>Please feel free to email us at reClaim@outlook.com</p>
                            <section className="help-options">
                                <div>
                                    <LocalPhoneIcon sx={{
                                        height: 90,
                                        color: 'red',
                                    }}/>
                                    <p>Phone Number</p>
                                    <p>(914) 813 - 5425</p>
                                </div>
                                <div>
                                    <LocalPostOfficeIcon sx={{
                                        height: 90,
                                        color: 'red',
                                    }}/>
                                    <p>Mailing Address</p>
                                    <p>reClaim@outlook.com</p>
                                </div>
                                <div>
                                    <FaxIcon sx={{
                                        height: 90,
                                        color: 'red',
                                    }}/>
                                    <p>Fax Number</p>
                                    <p>(518) 402 - 8681 </p>
                                </div>
                                <div>
                                    <InstagramIcon sx={{
                                        height: 90,
                                        color: 'red',
                                    }}/>
                                    <FacebookIcon sx={{
                                        height: 90,
                                        color: 'red',
                                    }}/>
                                     <TwitterIcon sx={{
                                        height: 90,
                                        color: 'red',
                                    }}/>
                                    <p>Socials</p>
                                    <p>@ReclaimTheEarth</p>
                                </div>
                            </section>
                        </section>
                    </div>
                </section>
            </section>
            <Footer />
        </div>
    );
};

export default Profile;