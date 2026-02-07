import { useState, useEffect } from "react";

interface QuantityProps {
  onChange: (quantity: number) => void;
}

function Quantity({ onChange }: QuantityProps) {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    onChange(quantity);
  }, [quantity]);

  const handleDecreaseQuant = () => {
    if (quantity === 1) {
      return;
    } else {
      setQuantity(quantity - 1);
    }
  };

  const handleIncreaseQuant = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="flex items-center gap-3 mt-6">
      <span className="font-medium">Quantity</span>
      <div className="flex border rounded">
        <button className="px-3 cursor-pointer" onClick={handleDecreaseQuant}>
          -
        </button>
        <span className="px-4">{quantity}</span>
        <button className="px-3 cursor-pointer" onClick={handleIncreaseQuant}>
          +
        </button>
      </div>
    </div>
  );
}

export default Quantity;
