import "./Icons.css";

export const LikeIcon = ({ isPrimary = true }) => (
  <svg
    className="LikeIcon"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <rect width="24" height="24" rx="12" fill="#F9F9F9" />
    <path
      d="M14.2727 8C13.2727 8 12.5455 8.52308 12 9.08974C11.4545 8.56667 10.7273 8 9.72727 8C8.13636 8 7 9.2641 7 10.8333C7 11.6179 7.31818 12.3154 7.90909 12.7949L12 16.5L16.0909 12.7949C16.6364 12.2718 17 11.6179 17 10.8333C17 9.2641 15.8636 8 14.2727 8Z"
      fill={isPrimary ? "#FF3055" : "white"}
    />
  </svg>
);

export const DeleteIcon = () => (
  <div className="card__delete-icon-wrapper" alt="иконка удаления">
    <svg
      className="card__delete-icon"
      alt="х"
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 5.06055L6.65156 7.71211L7.71222 6.65145L5.06066 3.99989L7.71211 1.34844L6.65145 0.287781L4 2.93923L1.34826 0.287484L0.287598 1.34814L2.93934 3.99989L0.287484 6.65174L1.34814 7.7124L4 5.06055Z"
        fill="black"
      />
    </svg>
  </div>
);
