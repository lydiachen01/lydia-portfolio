import React, { useState } from "react";
import MyVoterInfo from "./MyVoterInfo";
import GooseGoose from "./GooseGoose";
import Freebites from "./Freebites";
import AKA from "./AKA";

const tabs = [
    { title: "myvoterinfo [2024]", contentID: 1 },
    { title: "goosegoose [2025]", contentID: 2 },
    { title: "freebites [2025 - PRESENT]", contentID: 3 },
    { title: "aka. [WIP]", contentID: 4 },
];

const mapping: { [key: number]: React.ReactNode } = {
    1: <MyVoterInfo />,
    2: <GooseGoose />,
    3: <Freebites />,
    4: <AKA />
};

const TabList: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState<number>(1);

    const handleTabClick = (content: number) => {
        console.log("A tab was clicked")
        setSelectedTab(content);
    };

    return (
        <div className="mx-auto max-w-[60rem] py-[4rem] overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <ul className="md:col-span-1 md:border-r border-slate-600 text-gray-700">
                    {tabs.map((tab) => (
                        <li
                            key={tab.title}
                            onClick={() => handleTabClick(tab.contentID)}
                            className={`cursor-pointer px-4 py-2 \
                                ${selectedTab === tab.contentID ? "font-bold" : "font-normal"} \
                                ${selectedTab === tab.contentID ? "border-b-2 border-slate-600" : "border-b-2"} \
                                ${selectedTab === tab.contentID ? "opacity-100" : "opacity-50"} \
                                hover:underline`}
                        >
                            {tab.title}
                        </li>
                    ))}
                </ul>
                <div className="md:col-span-2 md:pl-4 p-8">
                    {mapping[selectedTab]}
                </div>
            </div>
        </div>
    );
};

export default TabList;
