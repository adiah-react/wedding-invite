import "./rsvp.scss";

const Rsvp = () => {
  return (
    <div className="rsvp">
      <div className="top">
        <div className="text">
          <p className="start">kindly</p>
          <div className="second-line">
            <p className="bold">RSVP</p>
          </div>
          <div className="third-line">
            <p className="end">by May</p>
            <p className="end-large">20</p>
          </div>
          <p className="post">
            to let us know if you'll be part of our special day
          </p>
        </div>

        <div className="image"></div>
      </div>

      <div className="bottom">
        <div className="form"></div>
        <div className="thanks"></div>
      </div>
    </div>
  );
};

export default Rsvp;
