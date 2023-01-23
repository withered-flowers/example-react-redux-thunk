import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  counterFirstNumberDecrement,
  counterFirstNumberIncrement,
  counterResetNumber,
  counterSecondNumberDecrement,
  counterSecondNumberIncrement,
} from "../actions/actionCreator";
import CustomButton from "../components/CustomButton";

const CounterPage = () => {
  const [firstAmount, setFirstAmount] = useState(0);
  const [secondAmount, setSecondAmount] = useState(0);

  const { firstCounter, secondCounter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const firstIncrementButtonOnClickHandler = () =>
    dispatch(counterFirstNumberIncrement(Number(firstAmount)));

  const firstDecrementButtonOnClickHandler = () =>
    dispatch(counterFirstNumberDecrement(Number(firstAmount)));

  const secondIncrementButtonOnClickHandler = () =>
    dispatch(counterSecondNumberIncrement(Number(secondAmount)));

  const secondDecrementButtonOnClickHandler = () =>
    dispatch(counterSecondNumberDecrement(Number(secondAmount)));

  const resetButtonOnClickHandler = () => dispatch(counterResetNumber());

  return (
    <section className="bg-gray-100 flex flex-col gap-4 p-4">
      <p>
        firstCounter: <span className="font-semibold">{firstCounter}</span>
      </p>
      <p>
        secondCounter: <span className="font-semibold">{secondCounter}</span>
      </p>
      <section className="flex gap-2">
        <input
          type="number"
          name="firstCounter"
          id="firstCounter"
          placeholder="First Counter"
          className="py-2 px-4"
          value={firstAmount}
          onChange={(evt) => setFirstAmount(evt.currentTarget.value)}
        />
        <CustomButton onClick={firstIncrementButtonOnClickHandler}>
          Increment
        </CustomButton>
        <CustomButton onClick={firstDecrementButtonOnClickHandler}>
          Decrement
        </CustomButton>
      </section>
      <section className="flex gap-2">
        <input
          type="number"
          name="secondCounter"
          id="secondCounter"
          placeholder="Second Counter"
          className="py-2 px-4"
          value={secondAmount}
          onChange={(evt) => setSecondAmount(evt.currentTarget.value)}
        />
        <CustomButton onClick={secondIncrementButtonOnClickHandler}>
          Increment
        </CustomButton>
        <CustomButton onClick={secondDecrementButtonOnClickHandler}>
          Decrement
        </CustomButton>
      </section>
      <section>
        <CustomButton onClick={resetButtonOnClickHandler}>
          Reset All
        </CustomButton>
      </section>
    </section>
  );
};

export default CounterPage;
