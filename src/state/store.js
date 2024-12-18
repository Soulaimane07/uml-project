import { configureStore } from '@reduxjs/toolkit';
import diagramReducer from './diagramSlice';

export default configureStore({
  reducer: {
    diagram: diagramReducer,
  },
});
