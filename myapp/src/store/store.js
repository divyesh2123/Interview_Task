// store.js
import { configureStore } from '@reduxjs/toolkit';
import leaveReducer from '../userSlice/leaveSlice'; // Adjust the path as needed
// import thunk from 'redux-thunk';

export default configureStore({
  reducer: {
    leave: leaveReducer,
  },
  // middleware: [thunk],
});
