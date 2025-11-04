// import Image from 'next/image';

const GooseGoose = () => {
    return(
        <>
            <h1 className="text-3xl font-bold">goose goose
                <a 
                    href="https://owenwliao.wixsite.com/goose-goose" 
                    className="external-link-symbol ml-2 text-blue-600 hover:text-lime-500 text-3xl" 
                    target="_blank" 
                    rel="noopener noreferrer external"
                >
                    🔗
                </a>
            </h1>
            <img src="goose-goose-logo.png" alt="Screenshot of Goose Goose Logo" className="md:w-4/5 py-4" />   

            <h2 className="text-xl font-bold underline pt-4 pb-2">Overview</h2>
            <p>Silly geese-centric FPS - check out our itch.io page!</p>
            <p>---</p>
            <p>Under construction 🚧</p>
        </>
    )
}

export default GooseGoose