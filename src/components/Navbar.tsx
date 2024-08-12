import React, { useState } from "react";

interface TabsProps {
    tabName: string;
    link: string;
}

const Tabs: React.FC<TabsProps> = ({ tabName, link }) => {
    return (
        <a href={link} className="hover:underline hidden lg:block">{tabName}</a>
    );
}

const Navbar: React.FC = () => {
    const [isClicked, setClicked] = useState(false);

    const handleClick = () => {setClicked(!isClicked)}

    return (
        <>
            <nav className="flex items-center justify-between py-4 lg:pl-10 mx-[15vw]">
                <a href="/" className="flex items-center">
                    <img src="logo_2.png" alt="Logo" className="h-[7vh] pl-4" />
                </a>
                <div className="flex items-center space-x-10">
                    <button className="flex items-center lg:hidden block rounded p-2"
                        onClick={handleClick}>
                        <img src="menu.png" alt="Logo" className="h-7" />
                    </button>
                    <Tabs tabName="PROJECTS" link="/projects" />
                    <Tabs tabName="ABOUT" link="/about" />
                    <a href={"https://drive.google.com/file/d/1r8GiErJp1q6CglL7hKQiWv0mYPvEg43Q/view?usp=sharing"} 
                    className="hover:underline hidden lg:block" target="blank_">RESUME</a>
                    <Tabs tabName="BLOG" link="/blog" />
                </div>
            </nav>
            {isClicked && (
                <div className="flex flex-col space-y-4 m-4 p-12 rounded lg:hidden bg-slate-300">
                    <a href="/projects" className="hover:underline place-self-center">PROJECTS</a>
                    <a href="/about" className="hover:underline place-self-center ">ABOUT</a>
                    <a href={"https://drive.google.com/file/d/1r8GiErJp1q6CglL7hKQiWv0mYPvEg43Q/view?usp=sharing"} 
                    className="hover:underline place-self-center " target="blank_">RESUME</a>
                    <a href="/blog" className="hover:underline place-self-center ">BLOG</a>
                </div>
            )}
        </>
    )
}

export default Navbar