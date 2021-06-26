import { useState } from 'react'; 

export const ClickCounter = () => {
  const [count, setCount] = useState(0);
  return (
    <button
      onClick={() => {
        setCount(count + 1);
        console.log('clicked');
      }}
    >
      Click me {count}
    </button>
  );
};
