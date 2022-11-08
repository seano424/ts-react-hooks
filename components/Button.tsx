import React from 'react'

const Button: React.FunctionComponent<
  React.ButtonHTMLAttributes<HTMLButtonElement> & { title?: string }
> = ({ title, children, ...rest }) => {
  return <button {...rest}>{title ?? children}</button>
}

export default Button
