/**
 * @fileoverview Main application component for the File Explorer application.
 * This component demonstrates two different approaches to file system visualization:
 * 1. Hierarchical data structure using nested objects
 * 2. Flat data structure using arrays with parentId references
 * 
 * @author File Explorer Team
 * @version 1.0.0
 */

import React, { useState } from 'react';
import './App.css';
import { explorerData } from './data/explorerData';
import { explorerDataFlat } from './data/explorerDataFlat';
import Folder from './components/Folder';
import FolderWithFlat from './components/FolderWithFlat';


/**
 * Main application component that renders the file explorer interface.
 * Displays both hierarchical and flat data approaches side by side for comparison.
 * 
 * @returns {JSX.Element} The main application UI with dual file explorer views
 */
function App() {
  // State for hierarchical data structure (setExplorer removed to fix ESLint warning)
  const [explorer] = useState(explorerData);
  
  return (
    <div className="App">
      <h1>File Explorer</h1>
      
      {/* Side-by-side comparison of both approaches */}
      <div style={{ display: 'flex', gap: '40px' }}>
        <div>
          <h2>Hierarchical Data (Original)</h2>
          <Folder explorer={explorer} />
        </div>
        
        <div>
          <h2>Flat Data (New)</h2>
          <FolderWithFlat explorerDataFlat={explorerDataFlat} />
        </div>
      </div>
    </div>
  );
}

export default App;
