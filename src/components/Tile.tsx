import React, { useState } from 'react';

interface TileProps {
    imageURL: string;
    title: string;
    subject: string;
}

const Tile: React.FC<TileProps> = ({ imageURL, title, subject }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleHoverEnter = () => setIsHovered(true);
    const handleHoverLeave = () => setIsHovered(false);

    return (
        <div className='flex justify-center'>
            <div className="flex w-4/5 lg:w-2/5">
                <div className='relative w-[800px]'>
                    <img className="h-full \
                            transition-transform duration-300 ease-out transform \
                            hover:cursor-pointer rounded-3xl drop-shadow-lg border \
                            border-white border-4 hover:scale-110"
                        alt="Project" src={imageURL} />
                    <span
                        className='absolute bottom-0 left-0 w-full h-1/6 \
                        rounded-3xl flex flex-col items-center justify-center \
                        transition-all duration-300 ease-out'
                        onMouseEnter={handleHoverEnter}
                        onMouseLeave={handleHoverLeave}
                        style={{ height: isHovered ? '66%' : '16%' }}
                    >
                        <div className='text-center'>
                            <label className='font-bold'>{title || "Title"}</label><br />
                            <label className='text-[10px]'>{subject || "Subject Area"}</label><br />
                            {isHovered && (
                                <div>
                                    <div className='text-[10px] mx-6 mt-4 border border-blue-500'>
                                        Bacon ipsum dolor amet sausage kielbasa short loin, short
                                        ribs andouille strip steak leberkas burgdoggen ham doner
                                        jerky ball tip chislic filet mignon.
                                    </div>
                                    <div className='mt-2 cursor-pointer'>
                                        <a className='text-[10px] text-blue-500 \
                                        hover:underline hover:underline-offset-2'
                                            onClick={() => console.log("Clicked See More!")}
                                            href="\projects">See more</a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Tile;
