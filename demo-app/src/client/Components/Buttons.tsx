import React from 'react';
import Increment from './Increment';

function Buttons() {
  const buttons = [];
  for (let i = 0; i < 4; i++) {
    buttons.push(<Increment key={i} />);
  }

  return (
    <div className='buttons'>
      <h1>Stateful Buttons</h1>
      <h4>
        These buttons are functional components that each manage their own state with the useState
        hook.
      </h4>
      {buttons}
    </div>
  );
}

export default Buttons;
