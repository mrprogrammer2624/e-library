import bookReducer from "@/reducer";
import { createStore } from "redux";

const store = createStore(bookReducer);

export default store;
