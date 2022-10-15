export interface HomepageProps {
  steamMembers: string;
  discordMembers: string;
  unturnedPlayers: string;
}

export interface RankType {
  title: string;
  description: string;
  icon: string;
  details: string[];
  colour: string;
  price: string;
}

export interface SteamLoginData {
  provider: string,
  _json: {
      "steamid": string,
      "communityvisibilitystate": number,
      "profilestate": number,
      "personaname": string,
      "profileurl": string,
      "avatar": string,
      "avatarmedium": string,
      "avatarfull": string,
      "avatarhash": string,
      "lastlogoff": number,
      "personastate": number,
      "primaryclanid": string,
      "timecreated": number,
      "personastateflags": number
  },
  id: string,
  displayName: string,
  photos: [
      {
          value: string
      },
      {
          value: string
      },
      {
          value: string
      }
  ],
  identifier: string
}