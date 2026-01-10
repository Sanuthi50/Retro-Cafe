import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div id="about" className="about-us-container">
      <h1>About Us</h1>
      <section>
      <h2>Our Story</h2>
      <p>
       The Velvet Steam was born from a simple belief:
       Every coffee deserves to be more than just a morning ritual. 
       In 2024, we opened our doors on Newspaper Row in Lower Manhattan with a vision to create a sanctuary where stories brew as richly as our coffee. 
       Nestled in a historic corner of the city, our café honors the golden age of Manhattan's literary cafés while embracing the artistry of modern specialty coffee.
      </p>
      </section>
      <section>
        <h2>Our Mission</h2>
        <p>We exist to serve more than exceptional coffee—we serve moments.
         Every cup that leaves our counter carries the craftsmanship, passion, and care of our team. 
         We believe in slowing down in a city that never stops, in connecting with neighbors, and in treating every visitor as part of our growing community.</p>
      </section>
      <section>
        <h2>What Sets Us Apart</h2>
        <p>Our commitment to excellence runs deep. 
        We source our beans ethically from sustainable farms worldwide, roasting small batches fresh daily to capture the perfect flavor profile. Every drink—from our bold espresso to our slow-steeped cold brew—is handcrafted with precision and love. But beyond the coffee, it's our atmosphere that makes us special. Our vintage-inspired space, lined with character and warmth, invites you to linger, read, work, or simply exist in a timeless corner of Manhattan.</p>
      </section>
       <section>
        <h2>Our Values</h2>
        <section>
            <h3>Craftmanship</h3>
            <p>We believe in doing things right. Precision, attention to detail, and a reverence for the coffee-making process guide everything we do.</p>
        </section>
        <section>
            <h3>Community</h3>
            <p>We are committed to building a welcoming space where people can connect, collaborate, and feel at home.</p>
        </section>
        <section>
            <h3>Sustainability</h3>
            <p>We source our coffee ethically and strive to minimize our environmental impact through responsible practices.</p>
        </section>
        </section>
    </div>
  );
};

export default About; 
