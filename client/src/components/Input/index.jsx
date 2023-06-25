import React from 'react';
import './style.scss';

export default function Input({
  labelText,
  name,
  id,
  placeholder,
  register,
  errors,
  clearErrors,
  ...rest
}) {
  return (
    <div className="newsletter-input">
      <label htmlFor={id}>
        {labelText}
        {errors.email && <span>{errors.email?.message}</span>}
        {errors.email?.type === 'pattern' && <span>Valid email required</span>}
      </label>

      <input
        id={id}
        name={name}
        required
        aria-required="true"
        aria-invalid={errors.email?.type === 'pattern' ? true : false}
        className={
          errors.email ? 'newsletter-input__error' : 'newsletter-input__correct'
        }
        type="text"
        placeholder={placeholder}
        {...register(name, {
          required: 'Email is required',
          pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
          onBlur: () => {
            clearErrors(name);
          },
        })}
        {...rest}
      />
    </div>
  );
}
