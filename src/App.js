import Toolbar from './Components/Toolbar'
import Canvas from './Components/Canvas'
import Sidebar from './Components/Sidebar'
import { useState } from 'react'
import SelectionBox from './Components/Selections/SelectionBox'
import Generate from './Components/Generate/Generate'
import AddAttribute from './Components/Add/AddAttribute'

function App() {
  const [elements, setElements] = useState([])
  const [connectors, setConnectors] = useState([]);
  
  const [showSelection, setShowSelection] = useState(null)
  const [showGenerate, setShowGenerate] = useState(null)
  const [showSidebar, setShowSidebar] = useState(null)

  const [addAttribute, setAddAttribute] = useState(false)

  

  return (
    <div className="App h-screen flex">
      <Toolbar elements={elements} setElements={setElements} setShowSelection={setShowSelection} connectors={connectors} setConnectors={setConnectors} setShowGenerate={setShowGenerate} />
      <Canvas elements={elements} setElements={setElements} connectors={connectors} setShowSidebar={setShowSidebar}  />
      {showSidebar && <Sidebar elements={elements}  elementId={showSidebar} setShowSidebar={setShowSidebar} setAddAttribute={setAddAttribute} />}

      {showSelection && <SelectionBox elements={elements} setConnectors={setConnectors} connectors={connectors} showSelection={showSelection} setShowSelection={setShowSelection} />}
      {showGenerate && <Generate setShowGenerate={setShowGenerate} elements={elements} connectors={connectors} />}

      {addAttribute && <AddAttribute setAddAttribute={setAddAttribute} />}
    </div>
  );
}

export default App;
