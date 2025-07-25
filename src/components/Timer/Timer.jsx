import Countdown from "react-countdown";

const Timer = () => {
  const date = "2026-06-20T14:00:00";
  return (
    <div className="timer">
      <p>
        Time left until <span>the</span> wedding
      </p>
      <Countdown date={date} />
      <div className="labels">
        <span>days</span>
        <span>hours</span>
        <span>mins</span>
        <span>secs</span>
      </div>
    </div>
  );
};

export default Timer;
