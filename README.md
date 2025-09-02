# File Explorer

A React application for exploring files and directories with both hierarchical and flat data structure support. This application demonstrates two different approaches to file system visualization and management.

## Features

### 🗂️ **Dual Data Structure Support**
- **Hierarchical Data**: Traditional nested object structure with parent-child relationships
- **Flat Data**: Array-based structure with parentId references for efficient data management

### 📁 **File Explorer Components**
- **Folder Component**: Handles hierarchical data with expand/collapse functionality
- **FolderWithFlat Component**: Processes flat data arrays and converts them to interactive tree views
- **Interactive UI**: Click to expand/collapse folders, visual folder and file icons

### 🎯 **Core Functionality**
- **Expand/Collapse**: Click on folder icons to show/hide contents
- **Tree Visualization**: Hierarchical display of files and folders
- **Responsive Design**: Clean, modern interface with proper spacing and indentation
- **State Management**: React hooks for managing component state and user interactions

### 🔧 **Technical Features**
- **React 18**: Latest React features and hooks
- **Modern JavaScript**: ES6+ syntax and modern React patterns
- **Performance Optimized**: useMemo for efficient data processing
- **Component Architecture**: Modular, reusable components
- **CSS Styling**: Clean, responsive design with proper visual hierarchy

## Project Structure

```
src/
├── components/
│   ├── Folder.js          # Hierarchical data component
│   └── FolderWithFlat.js  # Flat data component
├── data/
│   ├── explorerData.js    # Hierarchical file structure
│   └── explorerDataFlat.js # Flat file structure with parentId references
├── App.js                 # Main application component
├── App.css                # Application styles
├── index.js               # Application entry point
└── index.css              # Global styles
```

## Data Structures

### Hierarchical Data (explorerData.js)
```javascript
{
  "name": "root",
  "type": "folder",
  "children": [
    {
      "name": "src",
      "type": "folder",
      "children": [...]
    }
  ]
}
```

### Flat Data (explorerDataFlat.js)
```javascript
[
  { id: 1, name: "root", type: "folder", parentId: null },
  { id: 2, name: "src", type: "folder", parentId: 1 },
  { id: 3, name: "components", type: "folder", parentId: 2 }
]
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Usage Examples

### Using the Folder Component (Hierarchical)
```javascript
import Folder from './components/Folder';
import { explorerData } from './data/explorerData';

<Folder explorer={explorerData} />
```

### Using the FolderWithFlat Component (Flat Data)
```javascript
import FolderWithFlat from './components/FolderWithFlat';
import { explorerDataFlat } from './data/explorerDataFlat';

<FolderWithFlat explorerDataFlat={explorerDataFlat} />
```

## Key Benefits

- **Flexibility**: Support for both data structure approaches
- **Performance**: Optimized rendering with React hooks and memoization
- **Maintainability**: Clean, modular component architecture
- **Scalability**: Easy to extend with additional features
- **User Experience**: Intuitive expand/collapse interactions

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
