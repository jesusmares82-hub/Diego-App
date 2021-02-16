const LocationInfo = ({ name, type, dimension }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h3>{type}</h3>
      <p>{dimension}</p>
    </div>
  );
};

export default LocationInfo;
