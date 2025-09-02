/**
 * @fileoverview Flat file system data structure with parentId references.
 * This file contains an array of file system items where each item
 * references its parent through a parentId property.
 * 
 * @author File Explorer Team
 * @version 1.0.0
 */

/**
 * Flat file system data structure.
 * Represents files and folders as a flat array where each item has a parentId
 * that references its parent. This approach is more efficient for large datasets
 * and easier to manipulate programmatically.
 * 
 * @type {Array<Object>}
 * @property {number} id - Unique identifier for each item
 * @property {string} name - Name of the file or folder
 * @property {string} type - Type of item ('folder' or 'file')
 * @property {number|null} parentId - ID of parent item (null for root items)
 * 
 * @example
 * // Example usage:
 * import { explorerDataFlat } from './explorerDataFlat';
 * <FolderWithFlat explorerDataFlat={explorerDataFlat} />
 */
export const explorerDataFlat = [
    { id: 1, name: "root", type: "folder", parentId: null },
    { id: 2, name: "src", type: "folder", parentId: 1 },
    { id: 3, name: "components", type: "folder", parentId: 2 },
    { id: 4, name: "Header.js", type: "file", parentId: 3 },
    { id: 5, name: "Footer.js", type: "file", parentId: 3 },
    { id: 6, name: "App.js", type: "file", parentId: 2 },
    { id: 7, name: "index.js", type: "file", parentId: 2 },
    { id: 8, name: "public", type: "folder", parentId: 1 },
    { id: 9, name: "index.html", type: "file", parentId: 8 },
    { id: 10, name: "favicon.ico", type: "file", parentId: 8 },
    { id: 11, name: "package.json", type: "file", parentId: 1 },
    { id: 12, name: "README.md", type: "file", parentId: 1 }
  ];
  