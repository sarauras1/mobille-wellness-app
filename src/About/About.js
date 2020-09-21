import React from "react";
import "./About.css";

const about = (props) => {
  return (
    <div className="about" id="about">
      <h1>About me</h1>
      <div className="about-img">
        <div>
          <img src={require("./thailand.jpg")} alt="me" />{" "}
        </div>
        <h4 className="about-h4">Profile</h4>
      </div>
      <div className="about-text">
        <p>
          All Beauty By Sara is a home service business based in London,
          England. I am passionate about my work and am keen on achieving clean
          and standout results. By handpicking products of the best quality, I
          strive to deliver exceptional services that meet or even exceed my
          clients’ expectations.
        </p>
        <p>
          I am a highly experienced and fully certified mobile beauty therapist
          with more than 15 years of experience in the beauty industry. I gained
          6 years of experience working on the beautiful Sardinian coastline, an
          exclusive destination for some of Europe's elite, where I offered a
          full suite of treatments.
        </p>
        <p>
          To further my knowledge and experience, I moved to London to work in
          an illustrious Mayfair beauty hotspot for 5 years. I have also worked
          at exclusive events such as London fashion shows and I had a number of
          A-list celebrities amongst her former clients and 4 years now on my 
          All Beauty By Sara mobile business.
        </p>
        <p>
          I also developed a deep understanding of traditional Thai massage
          techniques learnt during an extended stay in the Jungles near Chiang
          Mai, Thailand and in India, Rishikesh Ayurveda technique of marma
          pressure points and Hatha yoga.
        </p>
        <p>
          Now, I bring those 15 years of beauty experience and luxury treatments
          directly to your door!
        </p>
        <h4>Mission</h4>
        <p>
          My mission is to deliver luxurious beauty treatments at your home and
          office. That will make you save time and keep you comfortable.
        </p>
      </div>
    </div>
  );
};
export default about;
