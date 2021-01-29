import React from "react";
import Button from "../Button/Button";
import "./Blog.css";
import DoshaKapha from "./3-doshas-kapha.jpg";
import Ayurveda from "./ayurveda.jpg";
import DoshaPitta from "./3-doshas-pitta.jpg";
import DoshaVata from "./3-doshas.jpg";

const blog = (props) => {
  return (
    <div id="blog">
      <div className="blog-component">
        <div className="blog-image-component">
          <img className="blog-image" src={Ayurveda} alt="ayurveda" />
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
              <img className="blog-image-min" src={DoshaVata} alt="Vata" />
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
              <img className="blog-image-min" src={DoshaPitta} alt="Pitta" />
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
              <img className="blog-image-min" src={DoshaKapha} alt="ayurveda" />
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
              the Organic and Ayurvedic Lakshmi brand method. find below the
              right routine for you.
            </p>
            <h3 className="blog-h1-component">
              Vata/Dry skin routine with the Organic and Ayurvedic lakshmi brand
            </h3>
            <p>
              If your skin appearance is typically dry, according with the
              Ayurveda, you have a Vata skin type. In this case I racommend to
              use the fantastic Vata line of the Lakshmi brand.
            </p>
            <h3 className="blog-h1-component">
              Pitta/Sensitive skin routine with the Organic and Ayurvedic
              Lakshmi brand
            </h3>
            <p>
              If your skin appearance is typically sensitive, thin or red,
              according to the Ayurveda, you have a Pitta skin type. In this
              case I racommend to use the the awesome Pitta line of the Organic
              and Ayurvedic Lakshmi brand.
            </p>
            <h3 className="blog-h1-component">
              Kapha/Oily and Combinate skin routine with the Organic and
              Ayurvedic Lakshmi brand
            </h3>
            <p>
              If your skin appearance is typically oily, with brakeouts,
              according to the Ayurveda, you have a Kapha skin type. In this
              case I racommend to use the the magic Kapha line of the Lakshmi
              brand.
            </p>
            <h3 className="blog-h1-component">
              Anti age skin routine with the Organic and Ayurvedic Lakshmi brand
            </h3>
            <p>Use the antiage Organic and Ayurvedic Lakshmi products</p>
            <h3 className="blog-h1-component">
              How do I know what is right for my skin?
            </h3>
            <p>
              It is never easy to choose the right products for your skin,
              please ladies and gentlemens leave it in the hands of the
              beauty experts...!
            </p>
            <p>
              Booking your the Organic Ayurvedic Lakshmi Facial treatment,
              it's included in the price your skin care consultation.
            </p>
            <p>
               I will carefully analyse of your skin,
              choose the right treatment for you and then suggest you the right
              skin care products for your daily basis routine.
            </p>
            <strong>
              Normally if we could get done 1 professional Lakshmi facial per
              month you will just need a:
            </strong>
            <ul>
              <li>Cleanser</li>
              <li>Toner</li>
              <li>Serum</li>
              <li>Day Cream</li>
              <li>Night Cream</li>
            </ul>
            <strong>
              If for any reason you can't get done a facial per month you, might
              need also a:
            </strong>
            <ul>
              <li>Scrub</li>
              <li>Mask</li>
            </ul>
            <strong>
              But, again, and I cannot stress this enough please let me suggest
              you which type of skin care it's best for you, that can be the
              Vata, Pitta, Kapha or Anti Age by booking your facial with All
              Beauty By Sara Mobile Wellness service. You will not be
              disappointed any more, I promise! You will notice improvements
              from the first treatment!
            </strong>
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};

export default blog;
