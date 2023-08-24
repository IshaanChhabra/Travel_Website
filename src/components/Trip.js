import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover new and unique destinations using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip to Indonesia"
          text="Indonesia is a country in Southeast Asia and Oceania between the Indian Ocean and the Pacific Ocean."
        />
        <TripData
          image={Trip2}
          heading="Trip to India"
          text="Indonesia is a country in Southeast Asia and Oceania between the Indian Ocean and the Pacific Ocean."
        />
        <TripData
          image={Trip3}
          heading="Trip to Canada"
          text="Indonesia is a country in Southeast Asia and Oceania between the Indian Ocean and the Pacific Ocean."
        />
      </div>
    </div>
  );
}
export default Trip;
