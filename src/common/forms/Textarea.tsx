// import { InputComponentProperties } from '@/index'
import React, { useState } from 'react'

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  InputComponentProperties
>((props, ref) => {
  const [values, setValues] = useState(props)
  const { label, id, name, autoComplete, required, placeholder, value } = props
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }
  return (
    <div className="form-control my-2">
      <label htmlFor={id} className="label">
        <span className="label-text">{label}</span>
      </label>
      <textarea
        id={id}
        name={name}
        autoComplete={autoComplete}
        required={required}
        className="block px-3 py-2 placeholder-gray-500 text-gray-300 focus:z-10 sm:text-sm textarea textarea-bordered h-24 w-full max-w-lg"
        placeholder={placeholder}
        ref={ref}
        value={value}
        onChange={handleChange}
      />
    </div>
  )
})
Textarea.displayName = 'Search'
export default Textarea
