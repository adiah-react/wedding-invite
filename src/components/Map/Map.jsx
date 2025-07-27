import "./map.scss";
const Map = ({ src }) => {
  return (
    <div className="map">
      <iframe
        src={src}
        // width="600"
        // height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
