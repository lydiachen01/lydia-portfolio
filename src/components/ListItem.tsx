import React, { useState } from 'react';

const List: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleHoverEnter = () => setIsHovered(true);
    const handleHoverLeave = () => setIsHovered(false);

    return (
        <div className='relative' 
        onMouseEnter={handleHoverEnter}
        onMouseLeave={handleHoverLeave}>
            <span
                    // Adding hover: p-4 looks cool
                    className='absolute py-4 md:max-w-[35vw] max-w-[75vw] border \
                    bottom-0 left-0 bg-gray-800 \
                    rounded-xl flex flex-col items-center justify-center \
                    transition-all duration-300 ease-out'
                    style={{ width: isHovered ? '100%' : '0%' }}
                >&nbsp;
            </span>
            <div className="relative flex border rounded-xl md:max-w-[35vw] \
            max-w-[75vw] p-4 px-6 mb-4 place-content-between \
            cursor-pointer hover:text-white">
                <label className="cursor-pointer ">Title</label>
                <label className="cursor-pointer">Description</label>
                <label className="cursor-pointer text-gray-400">20XX</label>
                <span className='relative rounded-3xl bg-blue-400' 
                style={{ width: '16%' }} >&nbsp;</span>
            </div>
        </div>
    )
}

export default List