import { Racer } from "@models/racer";
import { Api } from "@services/api";
import { TResourceResponse } from "@services/types/TResourceResponse";

export async function findRacers(): Promise<
  TResourceResponse<{ racers: Racer[] }>
> {
  try {
    const response = await Api.get("/racers");

    return {
      isSuccess: true,
      data: response.data,
    };
  } catch (error) {
    return {
      isSuccess: false,
      error,
    };
  }
}
