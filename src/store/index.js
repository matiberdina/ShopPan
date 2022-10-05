import { categoryReducer, productsReducer } from "./reducers";
import { combineReducers, configureStore, createStore } from "redux";

const rootReducer = combineReducers({
    products: productsReducer,
    category: categoryReducer
});

export default createStore(rootReducer);