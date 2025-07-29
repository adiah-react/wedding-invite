import BlurText from "../ReactBits/BlurText/BlurText";
import "./rsvp.scss";

const Rsvp = ({ access }) => {
  return (
    <div className="rsvp">
      <div className="top">
        <div className="text">
          {/* <p className="start">kindly</p> */}
          {/* <MyBlur text="kindly" className="start" /> */}
          <BlurText
            text="kindly"
            delay={150}
            animateBy="letters"
            direction="top"
            className="start"
          />

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
                <label htmlFor="attendanceChoice1">Yes</label>

                <input
                  type="radio"
                  id="attendanceChoice2"
                  name="attendance"
                  value="no"
                />
                <label htmlFor="attendanceChoice2">No</label>

                <input
                  type="radio"
                  id="attendanceChoice3"
                  name="attendance"
                  value="maybe"
                />
                <label htmlFor="attendanceChoice3">Maybe</label>
              </div>
            </fieldset>
            {access.includes("reception") && (
              <fieldset>
                <legend>Will you attend the reception?</legend>
                <div>
                  <input
                    type="radio"
                    id="attendanceChoice1"
                    name="attendance"
                    value="yes"
                  />
                  <label htmlFor="attendanceChoice1">Yes</label>

                  <input
                    type="radio"
                    id="attendanceChoice2"
                    name="attendance"
                    value="no"
                  />
                  <label htmlFor="attendanceChoice2">No</label>

                  <input
                    type="radio"
                    id="attendanceChoice3"
                    name="attendance"
                    value="maybe"
                  />
                  <label htmlFor="attendanceChoice3">Maybe</label>
                </div>
              </fieldset>
            )}
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="thanks">
          <BlurText
            text="Thank you"
            delay={150}
            animateBy="letters"
            direction="top"
            className="top"
          />
          <p>for your response</p>
          {/* <motion.p
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            for your response
          </motion.p> */}
        </div>
      </div>
    </div>
  );
};

export default Rsvp;
