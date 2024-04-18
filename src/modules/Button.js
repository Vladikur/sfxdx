import * as React from 'react';


export default function Button({onPress, children}) {

  return (
    <button onClick={onPress} className="button">
      {children}
    </button>
  );
}
