const Card = ({ title, textBody, bgColor, color }) => {
  return (
    <div className="Card" style={{ backgroundColor: bgColor, color: color }}>
      {title}
      <div className="card mt">{textBody}</div>
    </div>
  );
};

export default Card;
