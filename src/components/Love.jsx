"use client";

import {Heart, HeartFill} from "@gravity-ui/icons";
import {ToggleButton} from "@heroui/react";
import {useState} from "react";


const Love = () => {
    const [isSelected, setIsSelected] = useState(false);
    return (
        <div className="">
            <ToggleButton isSelected={isSelected} onChange={setIsSelected} className={''}>
                {({ isSelected: selected }) => (
                    <>
                        {selected ? <HeartFill color="red"/> : <Heart />}
                    </>
                )}
            </ToggleButton>
        </div>
    );
};

export default Love;