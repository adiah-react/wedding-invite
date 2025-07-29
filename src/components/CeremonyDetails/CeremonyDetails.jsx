import Hero from "../Hero/Hero";
import Map from "../Map/Map";
import Rsvp from "../Rsvp/Rsvp";
import Timer from "../Timer/Timer";

const CeremonyDetails = ({ name, access }) => {
  return (
    <>
      <Hero name={name} />
      <Timer />
      <Rsvp access={access} />
      <Map src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4084.5909408152224!2d-61.4824937!3d10.2523124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c358dc43917e2d1%3A0xacaaad023f390a71!2sSt%20Benedict&#39;s%20Roman%20Catholic%20Church!5e1!3m2!1sen!2stt!4v1753471808036!5m2!1sen!2stt" />
    </>
  );
};

export default CeremonyDetails;
