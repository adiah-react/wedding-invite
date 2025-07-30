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

            <fieldset>
              <legend>Will you attend the ceremony?</legend>
              <div>
                <div className="form-group">
                  <input
                    type="radio"
                    id="attendanceChoice1"
                    name="attendance"
                    value="yes"
                  />
                  <label htmlFor="attendanceChoice1">Yes</label>
                </div>

                <div className="form-group">
                  <input
                    type="radio"
                    id="attendanceChoice2"
                    name="attendance"
                    value="no"
                  />
                  <label htmlFor="attendanceChoice2">No</label>
                </div>

                <div className="form-group">
                  <input
                    type="radio"
                    id="attendanceChoice3"
                    name="attendance"
                    value="maybe"
                  />
                  <label htmlFor="attendanceChoice3">Maybe</label>
                </div>
              </div>
            </fieldset>
            {access.includes("reception") && (
              <>
                <fieldset>
                  <legend>Will you attend the reception?</legend>
                  <div>
                    <div className="form-group">
                      <input
                        type="radio"
                        id="attendanceChoice1"
                        name="attendance"
                        value="yes"
                      />
                      <label htmlFor="attendanceChoice1">Yes</label>
                    </div>

                    <div className="form-group">
                      <input
                        type="radio"
                        id="attendanceChoice2"
                        name="attendance"
                        value="no"
                      />
                      <label htmlFor="attendanceChoice2">No</label>
                    </div>

                    <div className="form-group">
                      <input
                        type="radio"
                        id="attendanceChoice3"
                        name="attendance"
                        value="maybe"
                      />
                      <label htmlFor="attendanceChoice3">Maybe</label>
                    </div>
                  </div>
                </fieldset>
                <div className="form-group">
                  <label htmlFor="song">
                    What song will <i>definitely</i> get you on the dance floor?
                  </label>
                  <input type="text" name="song" id="song" />
                </div>

                <div className="form-group">
                  <label htmlFor="restrictions">
                    Any dietary restrictions or preferences?
                  </label>
                  <input type="text" name="restrictions" id="restrictions" />
                </div>
              </>
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
