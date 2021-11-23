import { combineReducers } from "redux";
import repositoryReducer from "./repositoryReducer";

const rootReducer = combineReducers({
  repo: repositoryReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
