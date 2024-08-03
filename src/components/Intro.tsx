import confetti from 'canvas-confetti'

const Intro: React.FC = () => {

    const throwConfetti = () => {
        var count = 200;
        var defaults = {
        origin: { y: 0.7 }
        };

        function fire(particleRatio: number, opts: { spread: number; startVelocity?: number; decay?: number; scalar?: number; }) {
        confetti({
            ...defaults,
            ...opts,
            particleCount: Math.floor(count * particleRatio)
        });
        }

        fire(0.25, {spread: 26, startVelocity: 55,});
        fire(0.2, {spread: 60,});
        fire(0.35, {spread: 100, decay: 0.91, scalar: 0.8});
        fire(0.1, {spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2});
        fire(0.1, {spread: 120, startVelocity: 45,});
    }

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
                <button className="py-2 px-4 border border-slate-400 mr-6 \ 
                        drop-shadow hover:bg-yellow-200 hover:border-yellow-500 \
                        rounded">Contact Me</button>
                <button className="py-2 px-4 border border-slate-400 text-2xl \
                        bg-black hover:bg-white rounded" onClick={throwConfetti}>🎊</button>
            </div>
        </div>
    )
}

export default Intro;