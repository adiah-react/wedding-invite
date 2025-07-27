import "./hero.scss";
const Hero = () => {
  return (
    <div className="hero">
      <p className="top-text">You're cordially invited</p>
      <div className="image"></div>
      <div className="text">
        <p className="subheading">Celebrating the beautiful beginning of</p>
        <h1>
          Rhiannon <span className="cursive">&amp;</span> Rashaad
        </h1>
        <div className="date">
          <p className="month">June</p>
          <p className="day">20</p>
        </div>
        {/* <p className="date">
          June <span>20</span>
        </p> */}
        <div className="details">
          <p>Two o'clock in the afternoon</p>
          <p>St. Benedict's Roman Catholic Church, La Romaine</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
