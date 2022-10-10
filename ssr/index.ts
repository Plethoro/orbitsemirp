import axios, { AxiosResponse } from "axios"
import { HomepageProps } from "../types"

const homePageProps = async (): Promise<{ props: HomepageProps }> => {
  const steamXml: AxiosResponse<any> = await axios.get(process.env.STEAM_API as string);
  const steamRegex: RegExp = /(?<=<memberCount>).+(?=<\/memberCount>)/;
  const steamResult: RegExpExecArray | null = steamRegex.exec(steamXml.data);
  const steamMembers: string = steamResult ? steamResult[0] : "0";

  const discordData: AxiosResponse<any> = await axios.get(process.env.DISCORD_API as string);
  const memberCount: number | null = discordData.data.approximate_member_count;
  const discordMembers = memberCount ? memberCount.toString() : "0";

  return {
    props: {
      steamMembers,
      discordMembers
    }
  }
}

export default homePageProps