import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducers from "../reducers";

const middleware = [thunk];

const composeEnhancers = composeWithDevTools({});

const enhancers = composeEnhancers(applyMiddleware(...middleware));

const configStore = initialState => {
    const store = createStore(rootReducers, initialState, enhancers);

    return store;
};

export default configStore;
