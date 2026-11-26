import DestinationImage from "../destinationImage";
import DestinationInfo from "../destinationInfo";
import DestinationStats from "../destinationStats";

function TravelCard({ cardInfo }) {
  return (
    <article className={`TravelCard TravelCard--${cardInfo.stats.timeofday}`}>
      <DestinationImage
        name={cardInfo.name}
        imageUrl={cardInfo.imageUrl}
        imageAlt={cardInfo.name}
      />
      <div className="TravelCard__body">
        <DestinationInfo description={cardInfo.description} />
        <DestinationStats stats={cardInfo.stats} />
      </div>
    </article>
  );
}

export default TravelCard;
