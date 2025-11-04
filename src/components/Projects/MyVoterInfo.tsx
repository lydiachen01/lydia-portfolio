// import Image from 'next/image';

const MyVoterInfo = () => {
    return(
        <>
            <h1 className="text-3xl font-bold">myvoterinfo
                <a 
                    href="https://devpost.com/software/myvoterinfo" 
                    className="external-link-symbol ml-2 text-3xl text-blue-600 hover:text-lime-500" 
                    target="_blank" 
                    rel="noopener noreferrer external"
                >
                    🔗
                </a>
            </h1>

            {/* <Image 
                src={'myvoterinfo_snapshot.png'} 
                alt={'MyVoterInfo Screenshot'}
                width={20}
                height={20}
                loading='lazy'
            ></Image> */}

            <img src="myvoterinfo_snapshot.png" alt="Screenshot of MyVoterInfo" className="md:w-4/5 py-4" />   

            <h2 className="text-xl font-bold underline pt-4 pb-2">Overview</h2>
            <p className="pb-4">MyVoterInfo is an app designed to make voting 
                easier by helping users check their voter registration status, 
                view relevant election data, and find nearby voting locations. 
                <br/><br/>
                (TLDR: This project was the brain child of a 48-hour hackathon)
            </p>

            <h2 className="text-xl font-bold underline pt-4 pb-2">Inspiration</h2>
            <p className="pb-4">We saw the recent voter law changes (in early 2024) that created 
                barriers to voting, such as removing inactive voters from registration 
                lists and decreasing access to mail-in voting drop boxes. 
                Our goal is to simplify the voting experience and provide easy access to critical information.
            
            </p>
            <h2 className="text-xl font-bold underline pt-4 pb-2">Process</h2>
            <p className="pb-4">We built the app using 
                <label className="bold"> Expo</label>,
                <label> React Native</label>, and 
                <label> Firebase </label> 
                for authentication. To check registration status, 
                we pull user data (first name, last name, birthday, and zip code) 
                and verify it against state databases. If the user is registered, 
                their elected representatives and polling location information are displayed. 
                For users who aren’t registered, we direct them to online registration options where available.
                <br/><br/>
                We integrated Google Maps to display nearby ballot drop-off
                 and voting locations. Tapping a marker shows location details, 
                 including voting hours and an option to open the location in 
                 Google Maps. We also added a crowdsourcing feature to allow 
                 users to report wait times at these locations.
            </p>
            <h2 className="text-xl font-bold underline pt-4 pb-2">Key Highlights</h2>
            <p className="pb-4">
                <ol className="list-disc pl-10">
                    <li>Firebase Authentication</li>
                    <li>Voter registration status check</li>
                    <li>Real-time polling locations and realted informations, connected to Google Maps</li>
                    <li>Crowdsourcing wait-time at each polling location</li>
                    <li>Web-scrapping registration data from state websites using Puppeteer</li>
                </ol>
            </p>
            {/* <h2 className="text-xl font-bold underline pt-4 pb-2">Impact</h2> */}
            <p className="pb-4">
            </p>
            <h2 className="text-xl font-bold underline pt-4 pb-2">Takeaways</h2>
            <p className="pb-4">
                <ol className="list-disc pl-10">
                    <li>Learned a new styling library</li>
                    <li>Hackatons are SUPER DUPER fast-paced and stressful, but also crazy fun.</li>
                </ol>
            </p>
            <p><b className="pt-4 text-lg">Rating:</b> 11/10 (Will definitely do this again 😋)</p>
        </>
    )
}

export default MyVoterInfo