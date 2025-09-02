/**
 * @fileoverview Hierarchical file system data structure.
 * This file contains a nested object representation of a file system
 * with folders and files organized in a parent-child hierarchy.
 * 
 * @author File Explorer Team
 * @version 1.0.0
 */

/**
 * Hierarchical file system data structure.
 * Represents files and folders in a nested object format where each folder
 * contains a children array with its contents.
 * 
 * @type {Object}
 * @property {string} name - Name of the root directory
 * @property {string} type - Type of item (always "folder" for root)
 * @property {Array} children - Array of child items (folders and files)
 * 
 * @example
 * // Example usage:
 * import { explorerData } from './explorerData';
 * <Folder explorer={explorerData} />
 */
export const explorerData = {
    "name": "root",
    "type": "folder",
    "children": [
      {
        "name": "src",
        "type": "folder",
        "children": [
          {
            "name": "components",
            "type": "folder",
            "children": [
              {
                "name": "Header.js",
                "type": "file"
              },
              {
                "name": "Footer.js",
                "type": "file"
              }
            ]
          },
          {
            "name": "App.js",
            "type": "file"
          },
          {
            "name": "index.js",
            "type": "file"
          }
        ]
      },
      {
        "name": "public",
        "type": "folder",
        "children": [
          {
            "name": "index.html",
            "type": "file"
          },
          {
            "name": "favicon.ico",
            "type": "file"
          }
        ]
      },
      {
        "name": "package.json",
        "type": "file"
      },
      {
        "name": "README.md",
        "type": "file"
      }
    ]
  };