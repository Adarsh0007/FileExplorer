/**
 * @fileoverview Folder component for rendering hierarchical file system data.
 * This component recursively renders folders and files with expand/collapse functionality.
 * 
 * @author File Explorer Team
 * @version 1.0.0
 */

import { useState } from "react";

/**
 * Folder component that renders file system items with expand/collapse functionality.
 * 
 * @param {Object} props - Component props
 * @param {Object} props.explorer - The file system item to render
 * @param {string} props.explorer.name - Name of the file or folder
 * @param {string} props.explorer.type - Type of item ('folder' or 'file')
 * @param {Array} [props.explorer.children] - Array of child items (for folders)
 * @returns {JSX.Element} Rendered file system item with appropriate styling and behavior
 */
const Folder = ({ explorer }) => {
    // State to track whether this folder is expanded or collapsed
    const [expand, setExpand] = useState(false);
    
    // Render folder with expand/collapse functionality
    if (explorer.type === "folder") {
        return (
            <div style={{ marginTop: '5px' }}>
                {/* Clickable folder header */}
                <div className="folder" onClick={() => setExpand(!expand)}>
                    <span> 📂 {explorer.name}</span>
                </div>
                
                {/* Collapsible folder contents */}
                <div className="folder-container" style={{ display: expand ? "block" : "none" }}>
                    {explorer?.children?.map((child) => (
                        <Folder key={child.name} explorer={child} />
                    ))}
                </div>
            </div>
        )
    }
    // Render file item
    else {
        return (
            <div className="file">
                <span> 📄 {explorer.name}</span>
            </div>
        )
    }
}

export default Folder;
