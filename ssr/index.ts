import axios, { AxiosResponse } from "axios"
import { HomepageProps } from "../types"

const homePageProps = async (): Promise<{ props: HomepageProps, revalidate: number }> => {
  const steamXml: AxiosResponse<any> = await axios.get(process.env.STEAM_API as string);
  const steamRegex: RegExp = /(?<=<memberCount>).+(?=<\/memberCount>)/;
  const steamResult: RegExpExecArray | null = steamRegex.exec(steamXml.data);
  const steamMembers: string = steamResult ? steamResult[0] : "0";

  const discordData: AxiosResponse<any> = await axios.get(process.env.DISCORD_API as string);
  const memberCount: number | null = discordData.data.approximate_member_count;
  const discordMembers = memberCount ? memberCount.toString() : "0";

  const unturnedData: AxiosResponse<any> = await axios.get(process.env.UNTURNED_API as string);
  const currentPlayers: number = unturnedData.data.players;
  const maxPlayers: number = unturnedData.data.maxplayers;
  const unturnedPlayers: string = `${currentPlayers}/${maxPlayers}`;

  return {
    props: {
      steamMembers,
      discordMembers,
      unturnedPlayers
    },
    revalidate: 180
  }
}

export default homePageProps