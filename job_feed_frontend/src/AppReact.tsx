import React, { useState } from 'react';

// Define a type for the component's state if needed
interface UserData {
  name: string;
  role: string;
}

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [user] = useState<UserData>({
    name: 'Jubz',
    role: 'Developer'
  });

  return (
    <div style={styles.container}>
      <header>
        <h1>React + Vite + OXC</h1>
        <p>Welcome, {user.name} ({user.role})</p>
      </header>

      <main>
        <div style={styles.card}>
          <p>The current count is: <strong>{count}</strong></p>
          <button 
            onClick={() => setCount((prev) => prev + 1)}
            style={styles.button}
          >
            Increment
          </button>
        </div>
      </main>
    </div>
  );
};

// Simple object-based styles for the example
const styles = {
  container: {
    fontFamily: 'system-ui, sans-serif',
    textAlign: 'center' as const,
    padding: '2rem',
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '1rem',
    display: 'inline-block',
    marginTop: '1rem'
  },
  button: {
    padding: '8px 16px',
    cursor: 'pointer',
    backgroundColor: '#61dafb',
    border: 'none',
    borderRadius: '4px',
    fontWeight: 'bold'
  }
};

export default App;

