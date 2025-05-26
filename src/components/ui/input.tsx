
import React from 'react';
export function Input({ placeholder, value, onChange }) {
  return (
    <input
      type="text"
      className="w-full px-3 py-2 border rounded-md text-sm"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
