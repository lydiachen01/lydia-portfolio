const Intro: React.FC = () => {
    return (
        <div className="p-[15vw] space-y-1">
            <div>Hi!</div>
            <div>
                <div className="font-bold text-3xl font-serif">I'm Lydia Chen.</div>
                <div className="font-bold text-3xl font-serif">A curiosity-driven developer.</div>
            </div>
            <div className="flex items-center pt-2">
                <a href="https://github.com/lydiachen01" target="_blank"><img src="github_black.png" className="cursor-pointer h-[35px] mr-3"></img></a>
                <a href="https://www.linkedin.com/in/lydia-chen-tufts/" target="_blank"><img src="linkedin_black.png" className="hover:opacity-100 cursor-pointer h-[30px]"></img></a>
            </div>
            <div className="flex pt-4">
                <button className="py-2 px-4 border border-slate-400 mr-6 drop-shadow hover:bg-yellow-200 hover:border-yellow-500 rounded">Contact Me</button>
                <button className="py-2 px-4 border border-slate-400 text-2xl bg-black hover:bg-white rounded">🎊</button>
            </div>
        </div>
    )
}

export default Intro;