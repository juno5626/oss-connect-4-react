import React from 'react';
import Board from "./components/Board";

function App() {
  return (
    <div className="App">
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20px',
        gap: '200px',
      }}>
        <div style={{ textAlign: 'center' }}>
          <img 
            src="/NTH.png" 
            alt="전산" 
            style={{ width: '200px', height: 'auto', borderRadius: '15px' }} 
          />
          <h4 style={{ marginTop: '10px', fontWeight: 'bold' , color:'blue'}}>전산</h4>
        </div>

        <div style={{ flexShrink: 0, minWidth: '720px' }}>
          <Board rows={6} columns={7} />
        </div>

        <div style={{ textAlign: 'center' }}>
          <img 
            src="/EBEN.png" 
            alt="아창" 
            style={{ width: '150px', height: 'auto', borderRadius: '15px' }} 
          />
          <h4 style={{ marginTop: '10px', fontWeight: 'bold', color:'red' }}>아창</h4>
        </div>
      </div>
    </div>
  );
}

export default App;