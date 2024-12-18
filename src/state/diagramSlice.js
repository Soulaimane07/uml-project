import { createSlice } from '@reduxjs/toolkit';

const diagramSlice = createSlice({
  name: 'diagram',
  initialState: {
    elements: [],
    connectors: [],
    selectedElement: null,
  },
  reducers: {
    addElement: (state, action) => {
      state.elements.push(action.payload);
    },
    addConnector: (state, action) => {
      state.connectors.push(action.payload);
    },
    selectElement: (state, action) => {
      state.selectedElement = action.payload;
    },
  },
});

export const { addElement, addConnector, selectElement } = diagramSlice.actions;
export default diagramSlice.reducer;
