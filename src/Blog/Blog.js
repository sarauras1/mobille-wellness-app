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
              wellness treatments like facials and massages. The Ayurveda is
              represented with 3 differents doshas which are Pitta, Kapha and
              Vata.
            </p>

            <h3 className="blog-h1-component">Doshas</h3>
            <p>
              The doshas in Ayurvedic medicine, each of three energies believed
              to circulate in the body and govern physiological activity, their
              differing proportions determining individual temperament and
              physical constitution and when unbalanced, causing a disposition
              to particular physical and mental disorders.
            </p>

            <p>
              <img
                className="blog-image-min"
                src={require("./3-doshas.jpg")}
                alt="ayurveda"
              />
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
              <img
                className="blog-image-min"
                src={require("./3-doshas-pitta.jpg")}
                alt="ayurveda"
              />
              <strong>Pitta expresses as the body’s metabolic system — </strong>
              made up of Fire and Water. It governs digestion, absorption,
              assimilation, nutrition, metabolism and body temperature. In
              balance, Pitta promotes understanding and intelligence. Out of
              balance, Pitta arouses anger, hatred and jealousy and on the skin
              sensitivity in general redness that can degenerate to eczema.
            </p>

            <p>
              <strong>
                Kapha is the energy that forms the body’s structure — bones,
                muscles, tendons —
              </strong>
              <img
                className="blog-image-min"
                src={require("./3-doshas-kapha.jpg")}
                alt="ayurveda"
              />
              and provides the “glue” that holds the cells together, formed from
              Earth and Water. Kapha supplies the water for all bodily parts and
              systems. It lubricates joints, moisturizes the skin, and maintains
              immunity. In balance, kapha is expressed as love, calmness and
              forgiveness. Out of balance, it leads to attachment, greed and
              envy with a tendency of having oily, comedic skin, or acne..
            </p>

            <h3 className="blog-h1-component">
              Why Ayurveda in your skin care?
            </h3>
            <p>
              Simple, Ayurveda is about nourishing your mind, body, and soul and
              becoming in tune with yourself and your body's needs. Ayurveda in
              Sanskrit translates to "life knowledge" and teaches nourishment
              following the rhythms of nature. "Ayurveda is the foundation for
              wellness internally that helps you look better externally,
              supporting all efforts to shape and tone your skin and body," So,
              while you can adapt its principles when it comes to your diet, you
              can also use the same principles when it comes to your skin-care
              routine. Here's how to implement Ayurvedic skin-care tips for
              healthier, glowing skin. Now, there are many ways to follow the
              Ayurveda suggestions, in terms of skin care, but i personaly love
              the Lakshmi brand method. find below the right routine for you.
            </p>
            <h3 className="blog-h1-component">
              Vata/Dry skin routine with the lakshmi brand
            </h3>
            <p>
              If your skin appearance is typically dry, according with the
              Ayurveda, you have a Vata skin type. In this case I racommend to
              use the fantastic Vata line of the Lakshmi brand.
            </p>

            <h3 className="blog-h1-component">
              Pitta/Sensitive skin routine with the Lakshmi brand
            </h3>
            <p>
              If your skin appearance is typically sensitive, thin or red,
              according to the Ayurveda, you have a Pitta skin type. In this case
              I racommend to use the the awesome Pitta line of the Lakshmi brand.
            </p>
            <h3 className="blog-h1-component">
              Kapha/Oily and Combinate skin routine with the Lakshmi brand
            </h3>
            <p>
              If your skin appearance is typically oily, with brakeouts,
              according to the Ayurveda, you have a Kapha skin type. In this case
              I racommend to use the the magic Kapha line of the Lakshmi brand.
            </p>
            <h3 className="blog-h1-component">
              Anti age skin routine with the Lakshmi brand
            </h3>
            <p>
              Use the antiage Lakshmi products
                
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default blog;
