import confetti from 'canvas-confetti'
import type React from 'react';

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

    const attributes = [
        "CS@Tufts",
        "Inspiring Software Engineer",
        "Full-Stack Developer",
        ""
    ];
    
    const typingSpeed = 100; // Speed of typing in milliseconds
    const erasingSpeed = 50; // Speed of erasing in milliseconds
    const pauseBetweenWords = 1500; // Pause between typing each attribute in milliseconds
    
    const type = async (attributes: string[]): Promise<void> => {
        const element = document.getElementById("typing-animation") as HTMLDivElement;
    
        if (!element) {
            console.error("Element with id 'typing-animation' not found.");
            return;
        }
    
        for (const attr of attributes) {
            // Typing effect
            for (let i = 0; i <= attr.length; i++) {
                element.textContent = attr.slice(0, i);
                await new Promise(resolve => setTimeout(resolve, typingSpeed));
            }
    
            // Pause after typing
            await new Promise(resolve => setTimeout(resolve, pauseBetweenWords));
    
            // Erasing effect
            for (let i = attr.length; i >= 0; i--) {
                element.textContent = attr.slice(0, i);
                await new Promise(resolve => setTimeout(resolve, erasingSpeed));
            }
    
            // Pause before the next attribute
            await new Promise(resolve => setTimeout(resolve, pauseBetweenWords));
        }
    };

    return (
        <div className="p-[10vw] space-y-1">
            <img src="intro2.png"/>
            <div>
                <div className="font-bold text-3xl font-serif">I'm Lydia Chen.</div>
                <div className="text-xl font-serif">CS @Tufts</div>
            </div>
            <div className="flex items-center pt-2">
                <a href="https://github.com/lydiachen01" target="_blank"><img src="github_black.png" className="cursor-pointer h-[35px] mr-3"></img></a>
                <a href="https://www.linkedin.com/in/lydia-chen-tufts/" target="_blank"><img src="linkedin_black.png" className="hover:opacity-100 cursor-pointer h-[30px]"></img></a>
            </div>
            <div className="flex pt-4">
                <button onClick={() => window.open("https://calendly.com/lydia-chen-tufts")}className="py-2 px-4 border border-slate-400 mr-6 \ 
                        drop-shadow hover:bg-yellow-200 hover:border-yellow-200 \
                        rounded">Contact Me</button>
                <button className="py-2 px-4 border border-slate-400 text-2xl \
                        bg-black drop-shadow hover:bg-white rounded" onClick={throwConfetti}>🎊</button>
            </div>
        </div>
    )
}

export default Intro;