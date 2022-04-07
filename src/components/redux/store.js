import { createStore } from "redux";
import dataReducer from "./dataReducer";


const datastore = createStore(dataReducer)

export default datastore