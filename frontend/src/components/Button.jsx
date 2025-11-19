import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Button component
 * props:
 * - variant: 'primary' | 'secondary' | 'ghost'
 * - as: 'button' | 'link'
 * - to: string (for link)
 */
export default function Button({ variant = 'primary', as = 'button', to, children, className = '', ariaLabel, ...rest }){
  const base = variant === 'primary' ? 'btn' : variant === 'secondary' ? 'btn secondary' : 'btn2';

  const cls = `${base} ${className}`.trim();

  if(as === 'link'){
    return <Link to={to} className={cls} aria-label={ariaLabel} {...rest}>{children}</Link>;
  }

  return <button className={cls} aria-label={ariaLabel} {...rest}>{children}</button>;
}
