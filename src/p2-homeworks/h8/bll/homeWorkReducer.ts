import { InitialPeopleT } from "../HW8";

type SortAT = {
  type: string;
  payload: string;
};
type CheckAT = {
  type: string;
  payload: number;
};

type ActionT = SortAT | CheckAT;

export const homeWorkReducer = (
  state: InitialPeopleT,
  action: ActionT
): InitialPeopleT => {
  switch (action.type) {
    case "sort": {
      const direction = action.payload === "up" ? 1 : -1;
      return [...state].sort((a, b) => {
        return a.name.localeCompare(b.name, "ru") * direction;
      });
    }
    case "check": {
      return state.filter((item) => item.age >= 18);
    }
    default:
      throw new Error("Bad command value");
  }
};
