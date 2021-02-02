import { RichText } from 'prismic-reactjs';
import React from 'react';

const Burger = ({burger, setIsPopupOpen }) => {

    const handlePopup = () => {
        setIsPopupOpen({
            popup: true,
            burgerData: burger
        })
    }

    return (
        <div className="burgers--item" onClick={handlePopup}>
            <img src={burger.data.img_burger.url} alt={ burger.data.burger_name[0].text} />
            <h3>{burger.data.burger_name[0].text}</h3>
        </div> 
    );
};

export default Burger;