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
        <div
            className="grid grid-rows-3 grid-y-4 place-items-center">
            <div className="flex w-4/5 lg:w-2/5 m-4">
                <div className='relative h-[400px]'>
                    <img className="bg-slate-200 min-w-64 h-full \
                            transition-transform duration-300 ease-out transform \
                            hover:cursor-pointer rounded-3xl drop-shadow-lg border \
                            border-white border-4 hover:scale-110"
                        alt="Project" src={imageURL} />
                    <span className='absolute bottom-0 left-0 min-w-64 h-1/6 \
                    rounded-3xl bg-white flex items-center grid gird-cols-2 hover:h-2/3 \
                    hover:transition-transform hover:duration-300 hover:ease-out hover:transform hover:h-2/3'>
                        <span className='text-center'
                            onMouseOver={handleHoverEnter}
                            onMouseOut={handleHoverEnter}>
                            <label className='font-bold'>{title || "Title"}</label><br />
                            <label className='text-[10px]'>{subject || "Subject Area"}</label><br />
                            {isHovered && (
                                <div>
                                    <div className='text-[10px] mx-6 mt-4 ptborder border-blue-500'>
                                        acon ipsum dolor amet sausage kielbasa short loin, short
                                        ribs andouille strip steak leberkas burgdoggen ham doner
                                        jerky ball tip chislic filet mignon.</div>
                                    <div className='mt-2 cursor-pointer'>
                                        <a className='text-[10px] text-blue-500 \
                                    hover:underline hover:underline-offset-2'
                                            onClick={() => console.log("Clicked See More!")}
                                            href="#">See more</a></div>
                                </div>
                            )}
                        </span>
                    </span>
                </div>
                {/* {isHovered && (
                    <div className="flex bg-white transition-opacity duration-300 \
                        drop-shadow-lg p-8">
                        <label>Project Title</label> <br />
                        <div> Bacon ipsum dolor amet sausage kielbasa short loin, short
                            ribs andouille strip steak leberkas burgdoggen ham doner
                            jerky ball tip chislic filet mignon. Prosciutto ham kevin,
                            flank pastrami leberkas ball tip sausage. Doner kielbasa
                            bresaola sausage burgdoggen jowl pork belly venison.</div>
                    </div>
                )} */}
            </div>
        </div>
    );
};

export default Tile;
