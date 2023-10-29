import HeaderSimple from "./components/Header/Header";
import { useState } from "react";
import { SegmentedControl } from "@mantine/core";
import { Toaster } from "react-hot-toast";
import Create from "./components/Create/Create";
import Retrieve from "./components/Retrieve/Retrieve";
import Update from "./components/Update/Update";
import Delete from "./components/Delete/Delete";

type Operation = "Create" | "Retrieve" | "Update" | "Delete";

const CRUD = ({
    operation,
}: {
    operation: Operation;
}) => {
    if (operation == "Create") {
        return <Create />;
    } else if (operation == "Retrieve") {
        return <Retrieve />;
    }
    else if(operation == "Update"){
        return <Update />
    }
    else if(operation == "Delete"){
        return <Delete />
    }
    else {
        return <></>;
    }
};

function App() {
    const [value, setValue] = useState<Operation>("Create");

    return (
        <>
            <Toaster position="top-right" />
            <HeaderSimple />
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                }}
            >
                <SegmentedControl 
                    value={value}
                    //@ts-ignore
                    onChange={setValue}
                    data={["Create", "Retrieve", "Update", "Delete"]}
                />
            </div>
            <CRUD operation={value} />
        </>
    );
}

export default App;
