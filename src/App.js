import "./styles.css";
import { useState } from "react";

export default function App() {
  const [amount, setAmount] = useState("");

  const [service1, setService1] = useState(0);
  const [service2, setService2] = useState(0);
  const avgservice = (service1 + service2) / 2;

  const handleReset = () => {
    setAmount("");
    setService1(0);
    setService2(0);
  };

  return (
    <div className="App">
      <InputBill bill={Number(amount)} setbill={setAmount}>
        <p>How much was the bill? </p>
      </InputBill>
      <Service s1={service1} onSelect={setService1}>
        <p>How did you like the service? </p>
      </Service>
      <Service s1={service2} onSelect={setService2}>
        <p>How did your friend like the service? </p>
      </Service>

      {amount > 0 && (
        <>
          <BillDisplay amt={avgservice} number={amount} />
          <Reset reset={handleReset} />
        </>
      )}
    </div>
  );
}

function InputBill({ bill, setbill, children }) {
  return (
    <div className="input-bill">
      <label>{children} </label>
      <input
        type="text"
        placeholder="Bill Value"
        onChange={(e) => setbill(Number(e.target.value))}
      />
    </div>
  );
}

function BillDisplay({ amt, number }) {
  const total = (number * amt) / 100;
  const bill = total + number;
  return (
    <div className="display">
      You pay ${bill} (${number} + ${total} tip)
    </div>
  );
}

function Service({ s1, onSelect, children }) {
  return (
    <div className="service">
      <label>{children} </label>
      <select value={s1} onChange={(e) => onSelect(Number(e.target.value))}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Reset({ reset }) {
  return (
    <div className="reset">
      <button onClick={reset}>Reset</button>
    </div>
  );
}
