
const SectionLocation = ({location}) => {
    return (
        <div className="location--item">
            <div className="location-img">
                <img src={location.img.url} alt="" />
            </div>
            <div className="location--content">
                <h3>{location.city}</h3>
                <hr className="hr" />
                <p>{location.adress}</p>
                <p>{location.phone}</p>
                <p>{location.open}.</p>
                <p>{location.schedule}.</p>
            </div>
        </div>
    );
};

export default SectionLocation;