import List from "../ProjectList";

const BentoLayout: React.FC = () => {
    return (
        <>
            <div className="py-12 px-24">
                <div className="flex">
                    <div
                        id="main-hero"
                        className="flex-auto w-[50%] border h-96 rounded-lg mr-6">hero</div>
                    <div className="flex-auto border h-96 rounded-lg">b</div>
                </div>

                {/* <div className="flex pt-12">
                    <div className="flex-auto  border h-60 rounded-lg mr-6">c</div>
                    <div className="flex-auto w-[60%] border h-60 rounded-lg">
                        <List
                            title="b#"
                            description="cozy game for learning music theory"
                            year="IP"
                            route="\projects"
                            client:idle
                        />
                        <List
                            title="m.graph"
                            description="visualization tool to track your courses"
                            year="IP"
                            route="\projects"
                            client:idle
                        />
                        <List
                            title="print.spot"
                            description="webapp for finding campus printers"
                            year="IP"
                            route="\projects"
                            client:idle
                        />
                        <List
                            title="myvoterinfo"
                            description="app showing up-to-date personalized voting info"
                            year={2024}
                            route="\projects"
                            client:idle
                        />
                        <List
                            title="teatopia"
                            description="e-commerce website for tea lovers"
                            year={2023}
                            route="\projects"
                            client:idle
                        />

                    </div>
                </div> */}
            </div>
        </>
    )
}

export default BentoLayout