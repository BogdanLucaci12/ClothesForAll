import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
const style = {
    height: "10em",
}
const imageStyle = {
    width: "20em",
    height: "10em",
}
const ControlledCarousel = ({ cartItems, activeIndex }) => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
        activeIndex(selectedIndex);
    };
   
    return (
        <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            style={style}
            data-bs-theme="dark"
            interval={null}
        >
            {
                cartItems.map((item, index) => (
                    <Carousel.Item
                        key={index}
                        
                    >
                        <img
                            src={item.ImageUrl}
                            alt=""
                            style={imageStyle}
                        />
                    </Carousel.Item>
                ))
            }
        </Carousel>
    );
}

export default ControlledCarousel;