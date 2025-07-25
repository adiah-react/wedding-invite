import "./hero.scss";
const Hero = () => {
  return (
    <div className="hero">
      <p className="top-text">You're cordially invited</p>
      <div className="image"></div>
      <div className="text">
        <p>Celebrating the beautiful beginning of</p>
        <h1>
          Rhiannon <span className="cursive">&amp;</span> Rashaad
        </h1>
        <p className="date">
          June <span>20</span>
        </p>
        <div className="details">
          <p>Two o'clock in the afternoon</p>
          <p>St. Benedict's Roman Catholic Church,</p>
          <p>La Romain</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
