import React from 'react';

function IconSwitch({ icon, onSwitch }) {
  return (
    <div className="icon-wrapper">
      <span className="material-icons" onClick={onSwitch}>{icon}</span>
    </div>
  )
}

export default IconSwitch;