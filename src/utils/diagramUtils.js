export const generateId = () => Math.random().toString(36).substr(2, 9);

export const calculateConnectorPoints = (from, to) => {
  return [from.x, from.y, to.x, to.y];
};
