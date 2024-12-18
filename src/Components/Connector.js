import React from 'react';
import { Arrow } from 'react-konva';

const Connector = ({ points }) => {
  return <Arrow points={points} stroke="black" fill="black" />;
};

export default Connector;
