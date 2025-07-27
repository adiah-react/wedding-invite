import Countdown from "react-countdown";
import "./timer.scss";

const Timer = () => {
  const date = "2026-06-20T14:00:00";

  // const renderer = ({ days, hours, minutes, seconds, completed }) => {
  //   if (completed) {
  //     return <p>Completed</p>;
  //   } else {
  //     return (
  //       <div className="countdown">
  //         <div className="block">
  //           <div className="time">{days}</div>
  //           <div className="label">days</div>
  //         </div>
  //         <div className="block">
  //           <div className="time">{hours.toString().padStart(2, "0")}</div>
  //           <div className="label">hours</div>
  //         </div>
  //         <div className="block">
  //           <div className="time">{minutes.toString().padStart(2, "0")}</div>
  //           <div className="label">mins</div>
  //         </div>

  //         <div className="block">
  //           <div className="time">{seconds.toString().padStart(2, "0")}</div>
  //           <div className="label">secs</div>
  //         </div>
  //       </div>
  //     );
  //   }
  // };

  return (
    <div className="timer">
      <p className="title">
        Time left until <span>the</span> wedding
      </p>

      {/* TODO: set it so that the size doesn't change when the time does */}
      <div className="countdown">
        {/* {<Countdown date={date} renderer={renderer} />} */}
        {<Countdown date={date} />}
      </div>

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
