import React from 'react';

const Radio = ({ id, options, pergunta, value, onChange, active }) => {
  if (active === false) return null;
  return (
    <fieldset
      style={{
        padding: '2rem',
        marginBottom: '1rem',
        border: '2px solid #eee',
      }}
    >
      <legend style={{ fontWeight: 'bold' }}>{pergunta}</legend>
      {options.map((option) => (
        <label
          key={option}
          style={{ marginBottom: '1rem', fontFamily: 'monospace' }}
        >
          <input
            type="radio"
            id={id}
            value={option}
            onChange={onChange}
            checked={option === value}
          />
          {option}
        </label>
      ))}
    </fieldset>
  );
};

export default Radio;
