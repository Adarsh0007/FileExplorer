import { useState } from "react";

const Folder = ({ explorer }) => {
    const [expand, setExpand] = useState(false);
    if (explorer.type === "folder") {
        return (
            <div style={{ marginTop: '5px' }}>

                <div className="folder" onClick={() => setExpand(!expand)}>
                    <span> 📂 {explorer.name}</span>
                    
                </div>
                <div className="folder-container" style={{ display: expand ? "block" : "none" }}>
                        {explorer?.children?.map((child) => (
                            <Folder key={child.name} explorer={child} />
                        ))}
                    </div>
            </div>

        )
    }
    else {
        return (
            <div className="file">
                <span> 📄 {explorer.name}</span>
            </div>
        )
    }
}

export default Folder;
