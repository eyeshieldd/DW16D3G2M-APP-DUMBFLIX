import { combineReducers } from "redux"; 

import film from "./film";
import auth from "./auth";
import payment from "./payment";

export default combineReducers({ film, auth, payment });
