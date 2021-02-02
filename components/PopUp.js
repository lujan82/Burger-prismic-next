import { RichText } from 'prismic-reactjs';

const PopUp = ({burger, popup, setIsPopupOpen}) => {

    const handlePopupOff = () => {
        setIsPopupOpen({
            popup: false,
            burgerData: ''
        })
    }
 
    if (burger === '') {
        return null
    }

    return (
        <div className={popup ? "popup on" : "popup off"}>

            <div className="popup--container">
                <div className="popup-img">
                    <img src={burger.data.img_burger.url} alt={burger.data.img_burger.alt} />
                </div>

                <div className="popup--content ">
                    <div className="popup--close">
                        <img onClick={ handlePopupOff} src="https://images.prismic.io/carlostest/4a89ff0c-fe3b-4f4e-a766-bd737402292e_hover.png?auto=compress,format" />
                    </div>
                    <div className="popup--title">{burger.data.burger_name[0].text }</div> 
                    <hr className="popup--hr" />
                    <div className="popup--text">
                        <RichText render={burger.data.description_burger} /> 
                    </div>
                    <div className="alergenos">
                        <a href="#">+ ver carta de alérgenos</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PopUp;