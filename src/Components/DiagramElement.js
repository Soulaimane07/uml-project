import React, { useState } from 'react';
import { Rect, Text, Group } from 'react-konva';

const DiagramElement = ({ element, onUpdate, setShowSidebar }) => {
  const { id, x, y, width, height, name, attributes = [], methods = [] } = element;
  const padding = 15;
  const titleHeight = 40;
  const attributeHeight = attributes.length * 25;
  const methodHeight = methods.length * 25;
  const totalHeight = titleHeight + attributeHeight + methodHeight + padding * 2;

  const handleDragMove = (e) => {
    const newX = e.target.x();
    const newY = e.target.y();
    onUpdate(id, { x: newX, y: newY });
  };

  return (
    <Group draggable onDragMove={handleDragMove}>
      {/* Rectangular background */}
      <Rect
        x={x}
        y={y}
        width={width}
        height={totalHeight}
        fill="#f5f5f5"
        stroke="#007bff"
        strokeWidth={2}
        cornerRadius={15}
        shadowColor="rgba(0,0,0,0.2)"
        shadowBlur={10}
        shadowOffsetX={5}
        shadowOffsetY={5}
        onClick={()=> setShowSidebar(element?.id)}
      />
      
      {/* Name/Title */}
        <Text
          x={x + padding}
          y={y + padding}
          text={name}
          fontSize={18}
          fontStyle="bold"
          fill="#333"
        />

      {/* Attributes */}
      {attributes.map((attribute, index) => (
        <Text
          key={index}
          x={x + padding}
          y={y + titleHeight + padding + index * 25}
          text={attribute}
          fontSize={16}
          fill="#555"
        />
      ))}

      {/* Methods */}
      {methods.map((method, index) => (
        <Text
          key={index}
          x={x + padding}
          y={y + titleHeight + attributeHeight + padding + index * 25}
          text={`${method}()`}
          fontSize={16}
          fill="#555"
        />
      ))}
    </Group>
  );
};

export default DiagramElement;
