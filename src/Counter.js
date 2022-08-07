import { observer } from "mobx-react-lite";
import counter from "./store/counter";

const Counter = observer(() => {
  return (
    <div>
      <h1>{counter.total}</h1>
      <h3>Count: {counter.count}</h3>

      <div>
        <button
          onClick={() => {
            counter.increment();
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            counter.decrement();
          }}
        >
          -
        </button>
      </div>
    </div>
  );
});

export default Counter;
