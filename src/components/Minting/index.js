import { useState } from 'react';
import "./index.css";

const Minting = () => {
  const [count, setCount] = useState(1);

  const changeCount = (add) => {
    let newCount = count;
    if (add) {
      newCount = count + 1;
    } else if(count > 1) {
      newCount = count - 1;
    }
    setCount(newCount);
  };

  return (
    <div className="minting">
        <div className="grey-back">
            <h1>Minting</h1>
            <div className="price-limits">
                <p>Price | 0.15 ETH Per NFT</p>
                <p>Limits | 10 Per Transaction</p>
            </div>
            <div id="counter">
                <span className="plus-minus" onClick={() => {changeCount(false)}}>-</span>
                <span>{count}</span>
                <span className="plus-minus" onClick={() => {changeCount(true)}}>+</span>
            </div>
            <button>Connect Wallet</button>
        </div>
    </div>
  );
};

export default Minting;