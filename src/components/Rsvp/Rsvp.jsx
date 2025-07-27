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
        <div className="form">
          <form action="">
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea name="" id="message" rows="4"></textarea>
            </div>
            {/* <div className="form-group">
              <label htmlFor="attendance">Attendance</label>
            </div> */}
            <fieldset>
              <legend>Will you be attending?</legend>
              <div>
                <input
                  type="radio"
                  id="attendanceChoice1"
                  name="attendance"
                  value="yes"
                />
                <label for="attendanceChoice1">Yes</label>

                <input
                  type="radio"
                  id="attendanceChoice2"
                  name="attendance"
                  value="no"
                />
                <label for="attendanceChoice2">No</label>

                <input
                  type="radio"
                  id="attendanceChoice3"
                  name="attendance"
                  value="maybe"
                />
                <label for="attendanceChoice3">Maybe</label>
              </div>
            </fieldset>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="thanks">
          <p className="top">
            Thank you <span>for your response</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rsvp;
