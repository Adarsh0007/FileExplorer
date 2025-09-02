/**
 * @fileoverview FolderWithFlat component for rendering flat file system data.
 * This component converts flat array data with parentId references into a hierarchical
 * tree structure and provides expand/collapse functionality.
 * 
 * @author File Explorer Team
 * @version 1.0.0
 */

import { useState, useMemo } from "react";

/**
 * FolderWithFlat component that processes flat data and renders it as an interactive tree.
 * 
 * @param {Object} props - Component props
 * @param {Array} props.explorerDataFlat - Array of flat file system items
 * @param {number} props.explorerDataFlat[].id - Unique identifier for the item
 * @param {string} props.explorerDataFlat[].name - Name of the file or folder
 * @param {string} props.explorerDataFlat[].type - Type of item ('folder' or 'file')
 * @param {number|null} props.explorerDataFlat[].parentId - ID of parent item (null for root)
 * @returns {JSX.Element} Rendered file system tree with expand/collapse functionality
 */
const FolderWithFlat = ({ explorerDataFlat }) => {
    const [expandedFolders, setExpandedFolders] = useState(new Set());

    /**
     * Converts flat data array to hierarchical tree structure.
     * Uses useMemo for performance optimization - only recalculates when data changes.
     * 
     * @returns {Array} Array of root items with nested children structure
     */
    const treeData = useMemo(() => {
        const itemMap = new Map();
        const rootItems = [];

        // First pass: create map of all items with empty children arrays
        explorerDataFlat.forEach(item => {
            itemMap.set(item.id, { ...item, children: [] });
        });

        // Second pass: build tree structure by linking children to parents
        explorerDataFlat.forEach(item => {
            if (item.parentId === null) {
                // Root items have no parent
                rootItems.push(itemMap.get(item.id));
            } else {
                // Find parent and add this item as a child
                const parent = itemMap.get(item.parentId);
                if (parent) {
                    parent.children.push(itemMap.get(item.id));
                }
            }
        });

        return rootItems;
    }, [explorerDataFlat]);

    /**
     * Toggles the expanded state of a folder.
     * 
     * @param {number} folderId - The ID of the folder to toggle
     */
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

        /**
     * Recursively renders file system items (folders and files).
     * 
     * @param {Object} item - The item to render
     * @param {number} item.id - Unique identifier
     * @param {string} item.name - Name of the item
     * @param {string} item.type - Type ('folder' or 'file')
     * @param {Array} item.children - Child items (for folders)
     * @returns {JSX.Element} Rendered file system item
     */
    const renderItem = (item) => {
        if (item.type === "folder") {
            const isExpanded = expandedFolders.has(item.id);
            return (
                <div key={item.id} style={{ marginTop: '5px' }}>
                    {/* Clickable folder header with expand/collapse functionality */}
                    <div 
                        className="folder" 
                        onClick={() => toggleFolder(item.id)}
                        style={{ cursor: 'pointer' }}
                    >
                        <span>📂 {item.name}</span>
                    </div>
                    
                    {/* Collapsible folder contents with indentation */}
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
            // Render file item with indentation
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
