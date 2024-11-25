export type Player = {
  name: string;
  max: number;
  min: number;
  cost: number;
  movement: number;
  strength: number;
  agility: number;
  passing: number;
  armor: number;
  skills: string[];
  primary: string;
  secondary: string;
};
export type Team = {
  id: number;
  name: string;
  hidden: boolean;
  players: Player[];
  tier: number;
};
