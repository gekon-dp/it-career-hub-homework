function DestinationImage({ name, imageUrl, imageAlt }) {
  return (
    <div className="DestinationImage">
      <img src={imageUrl} alt={imageAlt} />
      <h2>{name}</h2>
    </div>
  );
}

export default DestinationImage;
