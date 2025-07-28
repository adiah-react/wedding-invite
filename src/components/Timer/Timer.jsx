import Countdown from "react-countdown";
import Counter from "../ReactBits/Counter/Counter";
import "./timer.scss";

const MyCounter = ({ time, places = [10, 1] }) => {
  return (
    <Counter
      value={time}
      places={places}
      fontSize={48}
      // padding={5}
      gap={0}
      textColor="black"
      fontWeight={400}
      gradientFrom="transparent"
      digitStyle={{ fontFamily: '"Allura", cursive' }}
    />
  );
};

const Timer = () => {
  const date = "2026-06-20T14:00:00";

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <p>Completed</p>;
    } else {
      return (
        <div className="countdown">
          <div className="block">
            <MyCounter time={days} places={[100, 10, 1]} />
            <div className="label">days</div>
          </div>
          <div className="block">
            <MyCounter time={hours} />
            <div className="label">hours</div>
          </div>
          <div className="block">
            <MyCounter time={minutes} />
            <div className="label">mins</div>
          </div>

          <div className="block">
            <MyCounter time={seconds} />
            <div className="label">secs</div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="timer">
      <p className="title">
        Time left until <span>the</span> wedding
      </p>
      <div className="countdown">
        {<Countdown date={date} renderer={renderer} />}
      </div>
    </div>
  );
};

export default Timer;
