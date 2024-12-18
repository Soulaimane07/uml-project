import React from 'react';
import { Stage, Layer } from 'react-konva';
import DiagramElement from './DiagramElement';
import Connector from './Connector';

const Canvas = ({ elements, setElements, connectors, setShowSidebar }) => {
  const handleElementUpdate = (id, newProperties) => {
    setElements((prevElements) =>
      prevElements.map((element) =>
        element.id === id ? { ...element, ...newProperties } : element
      )
    );
  };

  return (
    <div className="canvas w-full overflow-hidden">
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          {elements.map((el, index) => (
            <DiagramElement
              key={index}
              element={el}
              onUpdate={handleElementUpdate}  // Pass the update handler
              setShowSidebar={setShowSidebar}
            />
          ))}
          {connectors.map((conn, index) => (
            <Connector key={index} {...conn} />
          ))}
        </Layer>
      </Stage>
    </div>
  );
};

export default Canvas;
