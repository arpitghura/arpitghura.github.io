import React from 'react'
import { Button, Img, Line, List, Text, BackToTop } from "components";


const ArrowAnim = () => {
    return (
        <div className="bg-blue_gray_100 p-[7px] rounded-[37px] w-[75px] motion-safe:animate-bounce">
            <Img
                src="images/img_collapsearrow.png"
                className="h-[60px] md:h-auto object-cover w-[60px]"
                alt="collapsearrow"
            />
        </div>
    )
}

export { ArrowAnim };