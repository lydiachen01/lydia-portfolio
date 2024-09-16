import React, { useState } from "react";
import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";
import Project4 from "./Project4";
import Project5 from "./Project5";

// Define a type for the tab item, which will include title and content
interface TabItem {
    title: string;
    contentID: number;
}

const tabs: TabItem[] = [
    { title: "b#", contentID: 1 },
    { title: "m.graph", contentID: 2 },
    { title: "print.spot", contentID: 3 },
    { title: "myvoterinfo", contentID: 4 },
    { title: "teatopia", contentID: 5 }
];

const mapping: { [key: number]: React.ReactNode } = {
    1: <Project1 />,
    2: <Project2 />,
    3: <Project3 />,
    4: <Project4 />,
    5: <Project5 />
};

const TabList: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState<number>(1);

    const handleTabClick = (content: number) => {
        setSelectedTab(content);
    };

    return (
        <div className="mx-auto max-w-[60rem] my-[4rem] overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <ul className="md:col-span-1 md:border-r border-gray-300">
                    {tabs.map((tab) => (
                        <li
                            key={tab.title}
                            onClick={() => handleTabClick(tab.contentID)}
                            className={`cursor-pointer px-4 py-2 \
                                ${selectedTab === tab.contentID ? "font-bold" : "font-normal"} \
                                ${selectedTab === tab.contentID ? "border-b-2 border-slate-600" : "border-b-2"} \
                                ${selectedTab === tab.contentID ? "text-gray-700" : "text-gray-300"} \
                                hover:bg-gray-100 hover:underline`}
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
