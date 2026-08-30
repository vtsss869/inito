export function StatusBar({ time = "9:41" }) {
  return (
    <div className="status-bar">
      <div className="status-bar__notch" aria-hidden="true" />
      <div className="status-bar__time">{time}</div>
      <div className="status-bar__icons" aria-hidden="true">
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
          <rect x="0" y="7" width="3" height="5" rx="0.5" fill="#112D35" />
          <rect x="5" y="4.5" width="3" height="7.5" rx="0.5" fill="#112D35" />
          <rect x="10" y="2" width="3" height="10" rx="0.5" fill="#112D35" />
          <rect x="15" y="0" width="3" height="12" rx="0.5" fill="#112D35" />
        </svg>
        <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
          <path
            d="M8.5 10.08c.71-.61 1.75-.61 2.46 0 .04.03.06.08.06.13s-.02.1-.05.13l-1.11 1.15a.18.18 0 0 1-.26 0L8.49 10.34a.18.18 0 0 1-.01-.26c.01 0 .01 0 .02 0ZM5.49 7.26c1.53-1.45 3.9-1.45 5.43 0 .03.03.05.08.05.13s-.02.1-.05.13l-.64.66a.18.18 0 0 1-.26 0c-.5-.46-1.16-.72-1.84-.72s-1.33.26-1.83.72a.18.18 0 0 1-.26 0l-.64-.66a.18.18 0 0 1 0-.26c.01 0 .02 0 .04 0ZM2.49 4.44c2.35-2.3 6.05-2.3 8.4 0 .03.03.05.08.05.13s-.02.1-.05.13l-.64.66a.18.18 0 0 1-.26 0c-1.79-1.73-4.16-1.73-5.95 0a.18.18 0 0 1-.26 0l-.64-.66a.18.18 0 0 1 0-.26h.05Z"
            fill="#112D35"
          />
        </svg>
        <svg width="27" height="13" viewBox="0 0 27 13" fill="none">
          <rect x="0.5" y="0.5" width="22" height="12" rx="3.5" stroke="#112D35" strokeOpacity="0.35" />
          <rect x="2" y="2" width="19" height="9" rx="2" fill="#112D35" />
          <path d="M25 4v5c.85-.36 1.4-1.19 1.4-2.11C26.4 5.97 25.85 5.14 25 4Z" fill="#112D35" opacity="0.4" />
        </svg>
      </div>
    </div>
  );
}

export function HomeIndicator() {
  return (
    <div className="home-indicator">
      <div className="home-indicator__bar" />
    </div>
  );
}
