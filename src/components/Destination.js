import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/3.jpg";
import Mountain4 from "../assets/4.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";
const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame.</p>
      <DestinationData
        className="first-des"
        heading="Taal Volcano, Batangas"
        text="One of the most iconic view in Luzon, Mt. Taal boasts a volcano
      inside a lake inside an island. If you fancy a closer look, the hike
      upto the crater is a mere 45 minutes."
        img1={Mountain1}
        img2={Mountain2}
      />
      <DestinationData
        className="first-des-reverse"
        heading="Mt. Daguldul, Batangas"
        text="Nestled in the heart of Batangas, Philippines, the majestic Mt. Daguldul stands as a testament to nature's breathtaking beauty and its ability to captivate the soul. Our vision is to introduce adventurers to the splendor of this hidden gem, offering an experience that transcends the ordinary and fosters a deep connection with the natural world."
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};
export default Destination;
