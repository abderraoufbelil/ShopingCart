import { configureStore } from "@reduxjs/toolkit";
import  CartSlicereduce from "./Slices";

const store=configureStore({reducer:{Cart:CartSlicereduce}})
export default store