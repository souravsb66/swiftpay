import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { reducer as authReducer } from "./authReducer/reducer";
import { reducer as transactionsReducer } from "./admin/transactionsReducer/reducer";
import { reducer as userTransactionsReducer} from "./user/userTransactions/reducer"
import { reducer as usersReducer } from "./user/usersReducer/reducer";
import { reducer as userQueryReducer } from "./user/userQuery/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  authReducer,
  transactionsReducer,
  usersReducer,
  userTransactionsReducer,
  userQueryReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
// Checking