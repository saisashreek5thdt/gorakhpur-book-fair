export default function EventCountdown() {
  return (
    <>
      <div className="event-countdown ec-1">
        <div className="event-countdown-wrap">
          <div data-countdown="2030/01/30" className="event-countdown"></div>
        </div>
        <div className="event-countdown-text">
          <span>Countdown</span>
        </div>
      </div>
    </>
  );
}
