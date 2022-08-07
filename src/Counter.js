import { observer } from "mobx-react-lite";
import counter from "./store/counter";

const Counter = observer(() => {
  return (
    <div>
      <h1>{counter.count}</h1>

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
