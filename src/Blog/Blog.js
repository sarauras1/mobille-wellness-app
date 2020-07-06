import React from "react";
import "./Blog.css";

const blog = (props) => {
  return (
    <div id="blog">
      <div className="blog-component">
        <div className="blog-image-component">
          <img
            className="blog-image"
            src={require("./ayurveda.jpg")}
            alt="ayurveda"
          />
          <div className="blog-h3"></div>
        </div>
        <div className="blog-div-component">
          <h1 className="blog-h1-component">What is Ayurveda?</h1>

          <div className="blog-paragraph">
            <p>
              In Sanskrit, Ayurveda means “The Science of Life.” Ayurvedic
              knowledge originated in India more than 5,000 years ago and is
              often called the “Mother of All Healing.” It stems from the
              ancient Vedic culture and was taught for many thousands of years
              in an oral tradition from accomplished masters to their disciples.
              The principles of many of the natural healing systems now familiar
              in the West have their roots in Ayurveda. Used today as well in
              wellness treatments like facials and massages.The Ayurveda is
              represented with 3 differents doshas with are Pita, kapha and
              vata. in other words, these three doshas are different types of
              personalities.
            </p>
            <h3 className="blog-h1-component">Doshas</h3>
            <p>
              <strong>
                Vata is the subtle energy associated with movement —
              </strong>
              composed of Space and Air. It governs breathing, blinking, muscle
              and tissue movement, pulsation of the heart, and all movements in
              the cytopVata skin unbalance lasm and cell membranes. In balance,
              vata promotes creativity and flexibility. Out of balance, vata
              produces fear and anxiety, skin unbalance with dryness and a
              tendency to age earlier than normal.
            </p>

            <p>
              <strong>Pitta expresses as the body’s metabolic system — </strong>
              made up of Fire and Water. It governs digestion, absorption,
              assimilation, nutrition, metabolism and body temperature. In
              balance, pitta promotes understanding and intelligence. Out of
              balance, pitta arouses anger, hatred and jealousy and on the skin
              sensitivity in general redness that can degenerate to eczema.
            </p>

            <p>
              <strong>
                Kapha is the energy that forms the body’s structure — bones,
                muscles, tendons —
              </strong>
              and provides the “glue” that holds the cells together, formed from
              Earth and Water. Kapha supplies the water for all bodily parts and
              systems. It lubricates joints, moisturizes the skin, and maintains
              immunity. In balance, kapha is expressed as love, calmness and
              forgiveness. Out of balance, it leads to attachment, greed and
              envy with a tendency of having oily, comedic skin, or acne..
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default blog;
