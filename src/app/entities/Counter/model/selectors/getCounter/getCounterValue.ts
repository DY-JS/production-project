import {CounterSchema} from "../../types/counterSchema";
import {createSelector} from "@reduxjs/toolkit";
import {getCounter} from "./getCounter";

// export const getCounterValue = (state: CounterSchema) => state.counter.value
export const getCounterValue = createSelector(getCounter, (counter: CounterSchema) => counter.value)