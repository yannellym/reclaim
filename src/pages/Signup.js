import "../css/signup.css"
import Nav from "../components/Nav"
import Footer from "../components/Footer";
import Form from "../components/Form";
import React from "react"


const Signup = () => {
    return (
        <div>
            <Nav />
            <div className="signup">
               <Form />
            </div>
            <Footer />
        </div>
    );
};

export default Signup;