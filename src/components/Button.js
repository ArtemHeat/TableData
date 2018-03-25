import React from 'react';

export default function Button(props) {
  const className = props.className;
  const onClick = props.onClick;
  const children = props.children;
  const id = props.id;
  const disabled = props.disabled;
  return <button id={id} className={className} onClick={onClick} disabled={disabled} >{children}</button>;
}
