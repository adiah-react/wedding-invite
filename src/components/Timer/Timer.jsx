import Countdown from "react-countdown";
import "./timer.scss";

const Timer = () => {
  const date = "2026-06-20T14:00:00";

  // const renderer = ({ days, hours, minutes, seconds, completed }) => {
  //   if (completed) {
  //     return <p>Completed</p>;
  //   } else {
  //     return (
  //       <span>
  //         {days}:{hours}:{minutes}:{seconds}
  //       </span>
  //     );
  //   }
  // };
  return (
    <div className="timer">
      <p className="title">
        Time left until <span>the</span> wedding
      </p>

      <div className="countdown">{<Countdown date={date} />}</div>
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
