import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import './styles.css';
import doc1 from './images/doc1.jpg'; // Importação correta de doc1

function App() {
  const containerStyles = () => {
    return {
      widt: 1280,
      margin: 'auto',
      border: '1px solid black',
      backgroundColor: "#EEE",
      borderRadius: 8,
      padding: 12,
      textAlign: 'center',
    };
  };

  const docNames = { doc1: 'José da Silva', doc2: 'Maria da Silva', doc3: 'Jaqueline Mendes' };

  return (
    <div style={containerStyles()}>
      <h2>Profissionais de saúde</h2>

      <div
        style={{
          margin: 8,
          border: '1px solid #DDD',
          borderRadius: 8,
          paddinf: 8,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
      >
        <div className="profissional">
          <img src={doc1} alt={docNames.doc1} />
          <p>{docNames.doc1}</p>
        </div>

        <div className="profissional">
          <img src={'${process.env.PUBLIC_URL}/doc2.jpg'} />
          <p>{docNames.doc2}</p>
        </div>

        <div className="profissional">
          <img src='https://images.unsplash.com/photo-1591604021695-0c69b7c05981?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb1.2.1&auto=format&fit=crop&w=1050&q=80'/>
          <p>{docNames.doc3}</p>
        </div>
      </div>
    </div>
  );
}

export default App;