import React, { useEffect, useState } from "react";
import Toggle from "./Toggle";

interface TabsProps {
    tabName: string;
    link: string;
    styles?: string;
    newTab: boolean;
    isActive?: boolean;
}

const Tabs: React.FC<TabsProps> = ({ tabName, link, styles = '', newTab, isActive = false }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
        <a
            href={link}
            className={`hover:rounded-full w-max h-max lg:block transition-all duration-300 ease-in-out text-black hover:text-white ${styles}`}
            style={{
                backgroundColor: isActive ? 'var(--dark-blue)' : (isHovered ? 'var(--dark-blue-50)' : 'var(--beige)'),
                color: isActive ? 'white' : (isHovered ? 'white' : 'black'),
                borderRadius: isActive || isHovered ? '9999px' : '0',
            }}
            onMouseEnter={() => { setIsHovered(true); }}
            onMouseLeave={() => { setIsHovered(false); }}
            {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
            <div className="hover:scale-80 transition-transform duration-300 ease-in-out">
                {tabName}
            </div>
        </a>
    );
}

const tabs: { [key: string]: string } = {
    "PROJECTS": "/projects",
    "ABOUT": "/about",
    "CV": "https://drive.google.com/file/d/1bA7sGtLzLPg3tNwe4gpFBi4Cpz7uj4Mp/view?usp=sharing"
};

const Navbar: React.FC = () => {
    const [isClicked, setClicked] = useState(false);
    const [activeTab, setActiveTab] = useState<string>('');
    
    const handleClick = () => { setClicked(!isClicked) }

    useEffect(() => {
        // Get the current pathname
        const currentPath = window.location.pathname;
        
        // Find which tab matches the current URL
        Object.entries(tabs).forEach(([tabName, link]) => {
            if (!link.startsWith('http')) { // Only check internal links
                const linkPath = link;
                if (currentPath === linkPath || 
                    (currentPath.endsWith('/') && linkPath === currentPath.slice(0, -1)) ||
                    (linkPath.endsWith('/') && currentPath === linkPath.slice(0, -1))) {
                    setActiveTab(tabName);
                }
            }
        });
    }, []);

    return (
        <>
            <style>{`
                @keyframes wiggle {
                0%, 100% { transform: rotate(-6deg); }
                50% { transform: rotate(6deg); }
                }

                .logo-img {
                transform: rotate(0deg);
                transition: transform 0.6s ease-out;
                }

                .logo-img:hover {
                animation: wiggle 1s ease-in-out infinite;
                transition: none;
                }
                `}</style>

            <nav className="flex items-center justify-between mx-10 lg:px-48">
                <a href="/projects" className="items-center">
                    <img src="tomato.svg" alt="Logo" className="h-[5rem] m-5 logo-img"/>
                </a>
                <div className="flex items-center space-x-6">
                    <div className="flex items-center" style={{ borderColor: 'var(--dark-blue)' }}>
                        <button className="flex items-center lg:hidden block rounded px-4"
                            onClick={handleClick}>
                            <img src="menu.png" alt="Logo" className="h-7" />
                        </button>
                        <div className="flex space-x-2 ">
                            {Object.entries(tabs).map(([key, link]) => (
                                <Tabs
                                    key={key}
                                    tabName={key}
                                    link={link}
                                    newTab={key === "CV"}
                                    styles="px-8 py-4 hidden"
                                    isActive={activeTab === key}
                                />
                            ))}
                        </div>
                    </div>
                    {/* <Toggle /> */}
                </div>
            </nav>
            {isClicked && (
                <div className="flex flex-col space-y-4 m-4 p-12 rounded lg:hidden bg-yellow-400">
                    {Object.entries(tabs).map(([key, link]) => (
                        <Tabs
                            key={key}
                            tabName={key}
                            link={link}
                            newTab={key === "CV"}
                            styles="place-self-center px-2 py-0.5"
                            isActive={activeTab === key}
                        />
                    ))}
                </div>
            )}
        </>
    )
}

export default Navbar;