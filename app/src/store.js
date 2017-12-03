import { createStore, compose, applyMiddleware} from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import reducers from "./reducers";

const middlewares = [
	createLogger(),
	thunk,
	promise
  ];

export default createStore(
    reducers,
    undefined,
	compose(
	  applyMiddleware(...middlewares),
	  window.devToolsExtension ? window.devToolsExtension() : f => f
	)
);