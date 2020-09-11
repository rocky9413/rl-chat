import { combineReducers } from 'redux';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

import skillReducer from './skillReducer';

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['mySkills']
// };

export default combineReducers({ mySkills: skillReducer });

// const rootReducer = combineReducers({ mySkills: skillReducer });
// export default persistReducer(persistConfig, rootReducer);
