/**
 * iOS system status chrome for the phone preview shell only.
 * Not a Design System component — do not add to Storybook.
 */
export function IosStatusChrome({ time = "9:41" }) {
  return (
    <div className="ios-status" aria-hidden="true">
      <div className="ios-status__island" />
      <div className="ios-status__time">{time}</div>
      <div className="ios-status__trailing">
        {/* Cellular signal */}
        <svg
          className="ios-status__cellular"
          width="19.2"
          height="12.226"
          viewBox="0 0 19.2 12.226"
          fill="none"
        >
          <path
            fill="#000"
            d="M1.2 7.626a1.2 1.2 0 0 1 1.2 1.2v2.2a1.2 1.2 0 0 1-2.4 0v-2.2a1.2 1.2 0 0 1 1.2-1.2Zm5.2-2.4a1.2 1.2 0 0 1 1.2 1.2v4.6a1.2 1.2 0 1 1-2.4 0v-4.6a1.2 1.2 0 0 1 1.2-1.2Zm5.2-2.4a1.2 1.2 0 0 1 1.2 1.2v7a1.2 1.2 0 1 1-2.4 0v-7a1.2 1.2 0 0 1 1.2-1.2Zm5.2-2.826a1.2 1.2 0 0 1 1.2 1.2v9.826a1.2 1.2 0 1 1-2.4 0V1.2a1.2 1.2 0 0 1 1.2-1.2Z"
          />
        </svg>
        {/* Wi‑Fi */}
        <svg
          className="ios-status__wifi"
          width="17.142"
          height="12.328"
          viewBox="0 0 17.142 12.328"
          fill="none"
        >
          <path
            fill="#000"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.571 2.454C6.02 2.454 3.68 3.39 1.93 4.94L.48 3.49C2.58 1.54 5.43.3 8.571.3c3.14 0 5.99 1.24 8.09 3.19l-1.45 1.45c-1.75-1.55-4.09-2.486-6.64-2.486Zm0 4.243c-1.48 0-2.82.55-3.86 1.45l-1.45-1.45c1.42-1.24 3.28-2 5.31-2s3.89.76 5.31 2l-1.45 1.45c-1.04-.9-2.38-1.45-3.86-1.45Zm0 4.243c-.74 0-1.41.28-1.92.74l1.92 1.918 1.92-1.918a2.72 2.72 0 0 0-1.92-.74Z"
          />
        </svg>
        {/* Battery */}
        <svg
          className="ios-status__battery"
          width="27.4"
          height="13"
          viewBox="0 0 27.4 13"
          fill="none"
        >
          <rect
            x="0.5"
            y="0.5"
            width="24"
            height="12"
            rx="3.5"
            stroke="#000"
            strokeOpacity="0.35"
          />
          <rect x="2" y="2" width="21" height="9" rx="2.5" fill="#000" />
          <path
            d="M26 4.5v4c.7-.35 1.15-1.05 1.15-1.85S26.7 4.85 26 4.5Z"
            fill="#000"
            fillOpacity="0.4"
          />
        </svg>
      </div>
    </div>
  );
}
