function CircleBar({ level, isAnimating }: CircleBarProps) {
  const size = 150;
  const radius = 63.75;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * level) / 100;

  function colorCircle() {
    if (level <= 32) {
      return "red";
    } else if (level >= 33 && level <= 66) {
      return "orange";
    } else if (level >= 67) {
      return "green";
    }
  }
  const playAnimation = (isAnimating ? "progress-circle" : "")
  return (
    <div className="w-48 h-48 flex items-center justify-center sm:w-24 sm:h-24">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle cx={size / 2} cy={size / 2} strokeWidth={5} r={radius} fill="transparent" stroke="white"/>
        <circle
          cx={size / 2}
          cy={size / 2}
          strokeWidth={6}
          r={radius}
          fill="transparent"
          stroke={colorCircle()}
          strokeDasharray={dashArray}
          strokeDashoffset={dashOffset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={playAnimation}
        />
        <text x="50%" y="40%" dy="1em" fill="white" textAnchor="middle" className="sm:text-xl md:text-xl">
          {level}%
        </text>
      </svg>
      <style>
        {`
        .progress-circle {
          animation: circleProgressAnimation 0.7s ease-in-out forwards;
          --dash-array: ${dashArray};
          --dash-offset: ${dashOffset};
        }
        @keyframes circleProgressAnimation {
            0% {
              stroke-dashoffset: var(--dash-array);
            }
            100% {
              stroke-dashoffset: var(--dash-offset+149.99);
            }
          }
        `}
      </style>
    </div>
  );
}

type CircleBarProps = {
    level: number;
    isAnimating: boolean;
  };

export default CircleBar;