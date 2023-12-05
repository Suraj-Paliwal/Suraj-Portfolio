import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
// import {loginAdminReducer} from './reducers/adminReducer';
import {sendEmailRecruiterReducer} from './reducers/recruiterReducer';

const rootReducer = combineReducers({
    sendEmailRecruiterReducer,
});

const initialState = {

};

const middleware = [thunk];

const store = createStore(rootReducer,initialState,
    composeWithDevTools(applyMiddleware(...middleware)),
    + window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;