import { TCalculateResponse } from "@domain/main/racers/item/types/TCalculateResponse";

export type TRacerItemreRef = {
  calculate: () => Promise<TCalculateResponse>;
};
