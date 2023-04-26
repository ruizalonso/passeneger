import Link from 'next/link'
import React from 'react'

type ButtonType = {
  type:
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'ghost'
    | 'link'
    | 'info'
    | 'success'
    | 'warning'
    | 'error'
    | 'btn'
  buttonType: 'link' | 'button'
  hfref: string
  isLarge?: boolean
  isOutline?: boolean
  size?: 'xs' | 'sm' | 'lg'
  children: React.ReactElement | string
  isCircle?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}
function Button({
  buttonType,
  type,
  hfref,
  isOutline,
  isLarge,
  size,
  children,
  isCircle,
  onClick,
}: ButtonType) {
  const styleButton = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    accent: 'btn-accent',
    ghost: 'btn-ghost',
    link: 'btn-link',
    info: 'btn-info',
    success: 'btn-success',
    warning: 'btn-warning',
    error: 'btn-error',
    btn: '',
  }
  let classButton = 'btn '
  if (size) classButton += 'btn-' + size
  classButton += ' ' + styleButton[type]
  if (isCircle) classButton += ' btn-circle'
  if (isOutline) classButton += ' btn-outline'
  if (isLarge) classButton += ' btn-block'
  classButton += ' m-1'

  return (
    <>
      {buttonType == 'link' && (
        <Link href={hfref} className={classButton} passHref>
          {children}
        </Link>
      )}
      {buttonType == 'button' && !onClick && (
        <button className={classButton}>{children}</button>
      )}
      {buttonType == 'button' && onClick && (
        <button onClick={onClick} className={classButton}>
          {children}
        </button>
      )}
    </>
  )
}

export default Button
