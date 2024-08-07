import React from "react";

interface TabsProps {
    tabName: string;
    link: string;
}

const Tabs: React.FC<TabsProps> = ({ tabName, link }) => {
    return (
        <a href={link} className="hover:underline">{tabName}</a>
    );
}

const Navbar: React.FC = () => {
    return (
        <nav className="flex items-center justify-between py-4 mx-[15vw]">
            <a href="/" className="flex items-center">
                <img src="logo_2.png" alt="Logo" className="h-12 w-36 pl-4" />
            </a>
            <div className="flex items-center space-x-10">
                <Tabs tabName="PROJECTS" link="/projects" />
                <Tabs tabName="ABOUT" link="/about" />
                <a href={"https://drive.google.com/file/d/1r8GiErJp1q6CglL7hKQiWv0mYPvEg43Q/view?usp=sharing"} className="hover:underline" target="blank_">RESUME</a>
                <Tabs tabName="BLOG" link="/blog" />
            </div>
        </nav>
    )
}

export default Navbar