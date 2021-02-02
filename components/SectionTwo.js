
const SectionTwo = ({slice}) => {
    
    return (
        <div className="big-two--item">
            <div className="big-two--img">
                <img src={slice.img.url} alt="" />
            </div>
            <div className="big-two--content">
                <h2> {slice.text}</h2>
                <button><a href={slice.link}>{slice.link}</a></button>
            </div>
        </div>
    );
};

export default SectionTwo;