import { GetServerSidePropsContext } from "next"
import { SetType } from "../types"
import sets from '../sets.json';

const individualSetsProps = async ({ params }: GetServerSidePropsContext): Promise<{ props: { set: SetType } }> => {
  let chosenSet: SetType | undefined;

  sets.forEach((set) => {
    if (set.title.toLocaleLowerCase().replace(/\s/g, '-') === params?.set) {
      chosenSet = set;
    }
  })

  return {
    props: {
      set: chosenSet as SetType
    }
  }
}

export default individualSetsProps