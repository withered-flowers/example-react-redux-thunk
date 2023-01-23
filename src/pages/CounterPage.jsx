import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  counterFirstNumberDecrement,
  counterFirstNumberIncrement,
} from "../actions/actionCreator";

const CounterPage = () => {
  const [firstAmount, setFirstAmount] = useState(0);
  const [secondAmount, setSecondAmount] = useState(0);

  const { firstCounter, secondCounter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const firstIncrementButtonOnClickHandler = () =>
    dispatch(counterFirstNumberIncrement(Number(firstAmount)));

  const firstDecrementButtonOnClickHandler = () =>
    dispatch(counterFirstNumberDecrement(Number(firstAmount)));

  const secondIncrementButtonOnClickHandler = () => {};
  const secondDecrementButtonOnClickHandler = () => {};

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
        <button
          className="bg-gray-400 text-white py-2 px-4"
          onClick={firstIncrementButtonOnClickHandler}
        >
          Increment
        </button>
        <button
          className="bg-gray-400 text-white py-2 px-4"
          onClick={firstDecrementButtonOnClickHandler}
        >
          Decrement
        </button>
      </section>
      <section className="flex gap-2">
        <input
          type="number"
          name="secondCounter"
          id="secondCounter"
          placeholder="Second Counter"
          className="py-2 px-4"
        />
        <button className="bg-gray-400 text-white py-2 px-4">Increment</button>
        <button className="bg-gray-400 text-white py-2 px-4">Decrement</button>
      </section>
      <section>
        <button className="bg-gray-400 text-white py-2 px-4">Reset All</button>
      </section>
    </section>
  );
};

export default CounterPage;
