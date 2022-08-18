import "./index.css";

const Countdown = () => (
  <div className="countdown">
    <div className="countdown_text">
      <p>COUNTDOWN</p>
      <div className="countdown_text_time">
        <p>00</p>
        <p>00</p>
        <p>00</p>
        <p>00</p>
      </div>
    </div>
    <div className="coutdown_rotate"></div>
  </div>
);

export default Countdown;