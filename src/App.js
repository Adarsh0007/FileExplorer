import React, { useState } from 'react';
import './App.css';
import { explorerData } from './data/explorerData';
import { explorerDataFlat } from './data/explorerDataFlat';
import Folder from './components/Folder';
import FolderWithFlat from './components/FolderWithFlat';


function App() {
  const [explorer, setExplorer] = useState(explorerData);
  
  return (
    <div className="App">
      <h1>File Explorer</h1>
      
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
