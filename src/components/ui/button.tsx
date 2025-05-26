
import React from 'react';
export function Button({ children, onClick, variant = 'default', size = 'md' }) {
  const base = "px-4 py-2 rounded font-semibold text-sm ";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
    destructive: "bg-red-500 text-white hover:bg-red-600",
    ghost: "bg-transparent text-blue-600 hover:bg-blue-100",
  };
  const sizes = {
    md: "",
    icon: "px-2 py-2",
  };
  return (
    <button onClick={onClick} className={base + variants[variant] + " " + sizes[size]}>
      {children}
    </button>
  );
}
