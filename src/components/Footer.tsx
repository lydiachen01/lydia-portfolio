const Footer = () => {
    return (
        <footer className="align-basline bg-black p-[20%] py-20 mt-56 text-white">
            <div className="grid grid-cols-1">
                <div className="text-3xl pb-4 font-serif">Oh! Want to stay in touch?</div>
                {/* <div className="text-slate-800">
                    <input className="p-4 rounded-xl"></input>
                </div> */}
            <div>

            </div>
                <div className="flex">
                    <img src="mail.png" className="h-6"></img>
                    <a href="mailto:[lydia.chen@tufts.edu]" className="ml-2 hover:underline underline-offset-2"><i>lydia.chen@tufts.edu</i></a>
                </div>
                <div className="flex pt-1">
                    <img src="ricebowl.png" className="h-6"></img>
                    <span className="ml-2">fueled by avocado toasts + matcha lattes</span>
                </div>
                <ul>
                    <li className="flex py-4">
                        {/* <img src="github.png" className="cursor-pointer"></img>
                        <img src="linkedin.png" className="h-[80%] hover:opacity-100 cursor-pointer"></img> */}
                        {/* <img src="medium.png" className="h-8 m-1 opacity-40 cursor-pointer"></img> */}
                        {/* <img src="twitter.png" className="h-7 m-1.5 opacity-40 cursor-pointer"></img> */}
                    </li>
                </ul>
                <div className="flex">
                    <span className="pr-1">Copyright</span>
                    <span className="text-xl pr-1">©</span>
                    <span>Last Updated on Aug 2, 2024</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;