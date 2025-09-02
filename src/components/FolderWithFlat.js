import { useState, useMemo } from "react";

const FolderWithFlat = ({ explorerDataFlat }) => {
    const [expandedFolders, setExpandedFolders] = useState(new Set());

    // Convert flat data to tree structure
    const treeData = useMemo(() => {
        const itemMap = new Map();
        const rootItems = [];

        // First pass: create map of all items
        explorerDataFlat.forEach(item => {
            itemMap.set(item.id, { ...item, children: [] });
        });

        // Second pass: build tree structure
        explorerDataFlat.forEach(item => {
            if (item.parentId === null) {
                rootItems.push(itemMap.get(item.id));
            } else {
                const parent = itemMap.get(item.parentId);
                if (parent) {
                    parent.children.push(itemMap.get(item.id));
                }
            }
        });

        return rootItems;
    }, [explorerDataFlat]);

    const toggleFolder = (folderId) => {
        setExpandedFolders(prev => {
            const newSet = new Set(prev);
            if (newSet.has(folderId)) {
                newSet.delete(folderId);
            } else {
                newSet.add(folderId);
            }
            return newSet;
        });
    };

    const renderItem = (item) => {
        if (item.type === "folder") {
            const isExpanded = expandedFolders.has(item.id);
            return (
                <div key={item.id} style={{ marginTop: '5px' }}>
                    <div
                        className="folder"
                        onClick={() => toggleFolder(item.id)}
                        style={{ cursor: 'pointer' }}
                    >
                        <span>📂 {item.name}</span>
                    </div>
                    <div
                        className="folder-container"
                        style={{
                            display: isExpanded ? "block" : "none",
                            marginLeft: '20px'
                        }}
                    >
                        {item.children.map(child => renderItem(child))}
                    </div>
                </div>
            );
        } else {
            return (
                <div key={item.id} className="file" style={{ marginLeft: '20px' }}>
                    <span>📄 {item.name}</span>
                </div>
            );
        }
    };

    return (
        <div className="folder-with-flat">
            {treeData.map(item => renderItem(item))}
        </div>
    );
};

export default FolderWithFlat;
