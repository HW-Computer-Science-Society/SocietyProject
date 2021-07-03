import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import thunk from "redux-thunk";

// root reducer //
import rootReducer from "./rootReducer";

// add more middlewares - link thunk //
const middlewares = [];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares, thunk)
);

export const persistor = persistStore(store);
