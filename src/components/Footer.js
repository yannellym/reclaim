import "../css/footer.css"

export default function Footer(){
    return(
        <div className="footer">
            <section className="footer-inner">
                    <section className="logo-section">
                        <img src="../images/leaves.png" alt="leaves"  className="leaves-logo"/>
                    </section>
                    <section className="footer-box">
                        <h5>
                            “Look deep into nature, and then you will understand everything better.” 
                        </h5>
                        <p>- Albert Einstein</p>
                    </section>
                    <section className="footer-box">
                        <p><a href="./#aboutus" className="link">About Us</a></p>
                        <p><a href="./#facts" className="link">Facts</a></p>
                    </section>
                    <section className="footer-box">
                        <p><a href="./signup" className="link">Sign Up</a></p>
                        <p><a href="https://www.grownyc.org/volunteer" className="link">Volunteer</a></p>
                        <p><a href="https://thegreenteam.org/recycling-facts/" className="link">Information</a></p>
                    </section>
                    <section className="footer-box">
                        <p><a href="https://www.apple.com/app-store/" className="link">App</a></p>
                        <p><a href="https://www.facebook.com/" className="link">Facebook</a></p>
                        <p><a href="https://www.instagram.com/" className="link">Instagram</a></p>
                    </section>
                </section>
        </div>
    )
}