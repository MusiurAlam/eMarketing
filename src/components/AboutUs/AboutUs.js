import React from "react";
import Bismillah from "./Bismillah.png";
import MyPic from "./myPhoto.jpeg";

const AboutUs = () => {
  const linkStyle = {
    margin: "5%",
  };
  const pStyle = {
    color: "grey",
  };
  return (
    <div style={{ textAlign: "center", margin: "2% 5%" }}>
      <img style={{ width: "30%", margin: "1% 35%" }} src={Bismillah} alt="" />
      <img
        style={{
          width: "50%",
          margin: "3% 25",
          borderRadius: "10px",
          boxShadow: "3px 3px 6px grey",
        }}
        src={MyPic}
        alt=""
      />
      <h3 style={{ marginTop: "5%", color: "skyblue" }}>MUSIUR ALAM OPU</h3>
      <h6>BSc in Computer Science and Engineering</h6>
      <p style={pStyle}>North_South_University</p>
      <p style={pStyle}>learner at Programming Hero</p>
      <p style={pStyle}>Web_developement_with_JhankarMahbub</p>
      <br />
      <h3>Assignments Info</h3>
      <h2 style={{ color: "green" }}>eMarketing</h2>
      <h3>ingradients</h3>
      <p style={pStyle}>
        This website is made with [react], [react-bootstrap], [firebase-auth],
        [heroku], [javascript], [MongoDB], [expressJs], [Stripe]
      </p>
      <h3>features</h3>
      <p style={pStyle}>
        Visitors can see the home page with full of demo card of various type of
        services, reviews and projects. From there one can click the Book button
        of Services Card and that will redirect to log in page in case not
        logged in. After authentication step visitor can checkout their
        selection and can book after payment method using Submit button which
        will confirm the order. Admins can add or remove the database
        information about specific Orders or Services item and can make admin
        someone else.
      </p>
      <p>
        More Specifically `Authentication with Google Sign In method` `Booking
        Services` `Add or remove Services, Bookings or Orders and Admins from
        Admin panel` `User can give review on services as one wishes` `Uses data
        base for saving information about specific user` `Brief description
        about how we do the project and give our survices in an illustrative
        way` `Information about Developer At About page`
      </p>
      <h3>Links</h3>
      <a style={linkStyle} href="https://emarketing-c2023.web.app/">
        Live Site
      </a>
      <a style={linkStyle} href="https://github.com/MusiurAlamOpu/eMarketing">
        Client Site GIT{" "}
      </a>
      <a
        style={linkStyle}
        href="https://github.com/MusiurAlamOpu/eMarketingServer.git"
      >
        Server Site GIT
      </a>
    </div>
  );
};

export default AboutUs;
