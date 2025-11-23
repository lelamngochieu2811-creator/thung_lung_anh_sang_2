import React, { useState } from 'react';
import { GamePhase, GameState, ResourceType } from './types';
import { INITIAL_GOLD, MAX_HAPPINESS, MAX_ENVIRONMENT } from './constants';
import { IntroScreen } from './components/IntroScreen';
import { HUD } from './components/HUD';
import { Phase1Mining } from './components/Phase1Mining';
import { Phase2Refinery } from './components/Phase2Refinery';
import { Phase3Town } from './components/Phase3Town';
import { VictoryScreen } from './components/VictoryScreen';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>({
    phase: GamePhase.INTRO,
    gold: INITIAL_GOLD,
    happiness: 80,
    environment: 80,
    inventory: {},
    playerName: '',
  });

  const startGame = (name: string) => {
    setGameState(prev => ({
      ...prev,
      playerName: name,
      phase: GamePhase.PHASE_1_MINING
    }));
  };

  const updateStats = (goldChange: number, happinessChange: number, envChange: number) => {
      setGameState(prev => ({
          ...prev,
          gold: prev.gold + goldChange,
          happiness: Math.min(MAX_HAPPINESS, Math.max(0, prev.happiness + happinessChange)),
          environment: Math.min(MAX_ENVIRONMENT, Math.max(0, prev.environment + envChange))
      }));
  };

  const nextPhase = () => {
    setGameState(prev => {
      let next = prev.phase;
      if (prev.phase === GamePhase.PHASE_1_MINING) next = GamePhase.PHASE_2_REFINERY;
      else if (prev.phase === GamePhase.PHASE_2_REFINERY) next = GamePhase.PHASE_3_TOWN;
      else if (prev.phase === GamePhase.PHASE_3_TOWN) next = GamePhase.VICTORY;
      else if (prev.phase === GamePhase.VICTORY) next = GamePhase.INTRO;
      
      return { ...prev, phase: next };
    });
  };

  return (
    <div className="min-h-screen bg-game-bg font-body text-gray-900">
      {gameState.phase !== GamePhase.INTRO && gameState.phase !== GamePhase.VICTORY && (
        <HUD state={gameState} />
      )}

      <main className="relative z-0">
        {gameState.phase === GamePhase.INTRO && (
          <IntroScreen onStart={startGame} />
        )}

        {gameState.phase === GamePhase.PHASE_1_MINING && (
          <Phase1Mining onComplete={() => {
             updateStats(50, 10, 0);
             nextPhase();
          }} />
        )}

        {gameState.phase === GamePhase.PHASE_2_REFINERY && (
          <Phase2Refinery onComplete={() => {
             updateStats(100, 10, -5); // Making products creates value but slight pollution risk
             nextPhase();
          }} />
        )}

        {gameState.phase === GamePhase.PHASE_3_TOWN && (
          <Phase3Town onComplete={() => {
             updateStats(50, 20, 25); // Fixing town improves env greatly
             nextPhase();
          }} />
        )}

        {gameState.phase === GamePhase.VICTORY && (
          <VictoryScreen onRestart={() => {
              setGameState({
                  phase: GamePhase.INTRO,
                  gold: INITIAL_GOLD,
                  happiness: 80,
                  environment: 80,
                  inventory: {},
                  playerName: '',
              });
          }} />
        )}
      </main>
    </div>
  );
};

export default App;