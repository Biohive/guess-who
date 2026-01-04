import { useState } from 'react'
import './App.css'

function App() {
  const [gameState, setGameState] = useState('welcome') // welcome, lobby, playing

  return (
    <div className="app-container">
      <header>
        <h1>🎭 Guess Who?</h1>
        <p>A multi-player guessing game</p>
      </header>
      
      <main>
        {gameState === 'welcome' && (
          <div className="welcome-section">
            <h2>Welcome to Guess Who!</h2>
            <p>Play the classic guessing game with friends online.</p>
            <div className="button-group">
              <button onClick={() => setGameState('lobby')}>
                Create Game
              </button>
              <button onClick={() => setGameState('lobby')}>
                Join Game
              </button>
            </div>
          </div>
        )}
        
        {gameState === 'lobby' && (
          <div className="lobby-section">
            <h2>Game Lobby</h2>
            <p>Waiting for players to join...</p>
            <button onClick={() => setGameState('welcome')}>
              Back to Home
            </button>
          </div>
        )}
      </main>
      
      <footer>
        <p>Built with React + Vite</p>
      </footer>
    </div>
  )
}

export default App
