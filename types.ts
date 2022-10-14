export interface HomepageProps {
  steamMembers: string;
  discordMembers: string;
  unturnedPlayers: string;
}

export interface RankType {
  title: string;
  description: string;
  icon: string;
  kit: string[];
  colour: string;
}