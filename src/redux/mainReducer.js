import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn2114694Reducer from '../features/SignIn2114694/redux/reducers'
import SignIn2114675Reducer from '../features/SignIn2114675/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn2114694: SignIn2114694Reducer,
SignIn2114675: SignIn2114675Reducer,

});