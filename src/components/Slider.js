import React from "react";
import { Carousel } from "react-responsive-carousel";
import img from '../imagesSrc/Austria/Austria.jpg';
import center from '../imagesSrc/Belguim/center.jpg'
export default () => (
    <Carousel infiniteLoop useKeyboardArrows autoPlay>
        <div>
            <img src={center} />
            <p className="legend">
                Гранд-плас (фр. Grand place, нидерл. Grote markt)
                — историческая площадь в центре Брюсселя, один из важнейших туристических объектов города.
                Здесь расположены две важнейшие достопримечательности — ратуша и Хлебный дом или Дом короля

            </p>
        </div>
        <div>
            <img src={img} />
            <p className="legend">
                Legend

            </p>
        </div>
        <div>
            <img src={img} />
            <p className="legend">
                Legend

            </p>

        </div>
        <div>
            <img src={img} />
            <p className="legend">
                Legend
                f
            </p>
        </div>
        <diтзьv>
            <img src={img} />
            <p className="legend">
                Legend

            </p>
        </diтзьv>
    </Carousel>
);
