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
        <nav className="flex items-center justify-between pr-10 py-4">
            <a href="#" className="flex items-center">
                <img src="src/styles/assets/logo_png (1).png" alt="Logo" className="h-16 w-36 pl-4" />
            </a>
            <div className="flex items-center space-x-10">
                <Tabs tabName="PROJECTS" link="#projects" />
                <Tabs tabName="ABOUT" link="#about" />
            </div>
        </nav>
    )
}

export default Navbar