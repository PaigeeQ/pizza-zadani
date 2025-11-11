import React, { useState } from 'react';
import './style.css';

interface ICheckProps {
  checked: boolean;
  onChange: (next: boolean) => void;
}

const Check = ({ checked, onChange }: ICheckProps) => {
  return (
    <button
      type="button"
      className="check"
      onClick={() => onChange(!checked)}
    >
      {checked ? '✓' : ''}
    </button>
  );
};

export default Check;
//  const [checked, setChecked] = useState(false);

  // const handleClick = () => {
  //   setChecked(!checked);
  // }; 