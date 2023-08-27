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
          text="India goes beyond just a destination—it's an immersion into a kaleidoscope of cultures, landscapes, and experiences."
        />
        <TripData
          image={Trip3}
          heading="Trip to Canada"
          text="We see Canada as a land of contrasts, where towering mountain ranges meet expansive prairies, where ancient forests intertwine with modern cities, and where indigenous traditions coexist with global influences."
        />
      </div>
    </div>
  );
}
export default Trip;
