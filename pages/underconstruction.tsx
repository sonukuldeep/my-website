import React from 'react';

function UnderConstruction() {

    const style = {
        'color': 'gray',
        'padding': '200px',
        'text-align': 'center',
        'min-height': 'calc(100vh - 196px)'
    }
  return (
    <div style={style}>
      <h1>Page Under Construction</h1>
      <p>We're sorry, but this page is currently under construction.</p>
    </div>
  );
}

export default UnderConstruction;