import React from 'react';
import {Button} from "../../../../shared/ui/Button";
import {useDispatch, useSelector} from "react-redux";
import {counterActions} from "../model/slice/counterSlice";
import {StateSchema} from "../../../providers/StoreProvider/config/StateSchema";
import {getCounterValue} from "../model/selectors/getCounter/getCounterValue";

export const Counter = () => {
    const counterValue = useSelector(getCounterValue)
    console.log(counterValue)
    const dispatch = useDispatch()
    const increment = () => {
        dispatch(counterActions.increment())
    }

    const decrement = () => {
        dispatch(counterActions.decrement())
    }

    return (
        <div>
            <h1 data-testId="value-title">{counterValue}</h1>

                <Button data-testId="increment-button" onClick={increment}>Inc</Button>
                <Button data-testId="increment-button" onClick={decrement}>Dec</Button>

        </div>
    );
};
