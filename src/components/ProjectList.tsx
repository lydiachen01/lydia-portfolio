import React, { useState } from 'react';

interface Project {
    title: string;
    description: string;
    year: number | string;
}

const List: React.FC<Project> = ({title, description, year}) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleHoverEnter = () => setIsHovered(true);
    const handleHoverLeave = () => setIsHovered(false);

    return (
        <div className='relative' 
        onMouseEnter={handleHoverEnter}
        onMouseLeave={handleHoverLeave}>
            <span
                    // Adding hover: p-4 looks cool
                    className='absolute py-4 lg:max-w-[35vw] max-w-[90vw] border \
                    bottom-0 left-0 bg-gradient-to-r from-teal-400 to-blue-500 \
                    rounded-xl flex flex-col items-center justify-center \
                    transition-all duration-500 ease-out h-full'
                    style={{ width: isHovered ? '100%' : '0%', opacity: isHovered ? "100%" : "0%" }}
                >&nbsp;
            </span>
            <div className="relative flex border rounded-xl lg:max-w-[35vw] \
            max-w-[90vw] p-4 px-6 mb-4 \
            cursor-pointer hover:text-white">
                <label className="cursor-pointer w-[15vw] mr-8">{title}</label>
                <label className="cursor-pointer w-[60vw] mr-8">{description}</label>
                <label className="cursor-pointer opacity-50 mr-4">{year}</label>
                <span className='relative rounded-3xl bg-blue-400' 
                style={{ width: '2%' }} >&nbsp;</span>
            </div>
        </div>
    )
}

export default List