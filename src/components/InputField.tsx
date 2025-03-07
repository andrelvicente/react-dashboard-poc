import React from 'react';

interface InputFieldProps {
  type: string;
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const InputField: React.FC<InputFieldProps> = ({ type, id, label, value, onChange, placeholder }) => {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={id} className="text-sm font-semibold text-gray-700">{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default InputField;
