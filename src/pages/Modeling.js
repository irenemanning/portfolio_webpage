import React from "react";
import {Carousel, Container} from 'react-bootstrap';


function Modeling() {
    return(
        <div>
            <h1>Modeling component</h1>
            <Carousel fade>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/272px-Cat_August_2010-4.jpg"
                    alt="First slide"
                    />
                    <div className="position-relative text-center">
                    Caption 1
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/272px-Cat_August_2010-4.jpg"
                    alt="Second slide"
                    />
                    <div className="position-relative text-center">
                    Caption 2
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/272px-Cat_August_2010-4.jpg"
                    alt="Third slide"
                    />
                    <div className="position-relative text-center">
                    Caption 3
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Modeling;