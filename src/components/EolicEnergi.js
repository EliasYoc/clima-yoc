import "./EolicEnergi.css";
const EolicEnergi = ({ className }) => {
  return (
    <>
      <div className={`wrapper ${className ? className : ""}`}>
        <div className="poste"></div>
        <div className="circle">
          <span className="aleta"></span>
        </div>
      </div>
    </>
  );
};

export default EolicEnergi;
