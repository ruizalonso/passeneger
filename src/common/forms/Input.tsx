import React, { useState } from 'react'
// import { InputComponentProperties } from '@/index'

const Input = React.forwardRef<HTMLInputElement, InputComponentProperties>(
  (props, ref) => {
    const [values, setValues] = useState(props)
    const {
      label,
      id,
      type,
      name,
      autoComplete,
      required,
      placeholder,
      importanValue,
      value,
    } = props
    let inputClass =
      'block px-3 py-2 placeholder-gray-500 text-gray-300 focus:z-10 sm:text-sm input input-bordered w-full max-w-lg'
    if (importanValue) inputClass += ' input-primary'
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target
      setValues({ ...values, [name]: value })
    }
    return (
      <div className="form-control my-2">
        <label htmlFor={id} className="label">
          <span className="label-text">{label}</span>
        </label>
        <input
          id={id}
          name={name}
          type={type}
          autoComplete={autoComplete}
          required={required}
          className={inputClass}
          placeholder={placeholder}
          ref={ref}
          value={value}
          onChange={handleChange}
        />
      </div>
    )
  }
)
Input.displayName = 'Search'
export default Input
