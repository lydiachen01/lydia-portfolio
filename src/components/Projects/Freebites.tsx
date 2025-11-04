// import Image from 'next/image';

const Freebites = () => {
    return(
        <>
            <h1 className="text-3xl font-bold">freebites
                <a 
                    href="https://www.freebites.org/" 
                    className="external-link-symbol ml-2 text-3xl text-blue-600 hover:text-lime-500" 
                    target="_blank" 
                    rel="noopener noreferrer external"
                >
                    🔗
                </a>
            </h1>
            <img src="freebites.jpg" alt="Screenshot of Freebites Logo" className="md:w-4/5 py-4" />   
            <h2 className="text-xl font-bold underline pt-4 pb-2">Overview</h2>
            <p>Mobile app for crowd-sourced free food posts throughout campus, addressing the issue of campus food waste</p>
            <p>---</p>
            <p>Under construction 🚧</p>
        </>
    )
}

export default Freebites