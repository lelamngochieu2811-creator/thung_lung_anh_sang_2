export enum GamePhase {
  INTRO = 'INTRO',
  PHASE_1_MINING = 'PHASE_1_MINING',
  PHASE_2_REFINERY = 'PHASE_2_REFINERY',
  PHASE_3_TOWN = 'PHASE_3_TOWN',
  VICTORY = 'VICTORY'
}

export enum ResourceType {
  CRUDE_OIL = 'Crude Oil',
  NATURAL_GAS = 'Natural Gas',
  LPG = 'LPG',
  GASOLINE = 'Gasoline', // Xăng
  KEROSENE = 'Kerosene', // Dầu hỏa
  DIESEL = 'Diesel',
  ASPHALT = 'Asphalt', // Nhựa đường
  GOLD = 'Gold'
}

export interface GameState {
  phase: GamePhase;
  gold: number;
  happiness: number;
  environment: number;
  inventory: Record<string, number>;
  playerName: string;
}

export enum ToolType {
  FAN = 'FAN', // Quạt gió
  HAMMER = 'HAMMER', // Búa đập than
  VALVE = 'VALVE', // Van an toàn
  WARNING = 'WARNING' // Cảnh báo
}

export interface TownProblem {
  id: number;
  title: string;
  description: string;
  correctTool: ToolType;
  isSolved: boolean;
  dialogueSuccess: string;
  dialogueFail: string;
}