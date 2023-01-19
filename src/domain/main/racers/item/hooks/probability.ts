import { useCallback, useState } from "react";

import { Racer } from "@models/racer";

import { ProbabilityUtil } from "@shared/util/probability";
import { StatusEnum } from "@domain/main/racers/item/enums/status";
import { useStatus } from "@domain/main/racers/item/hooks/status";

import { TCalculateResponse } from "@domain/main/racers/item/types/TCalculateResponse";

export function useProbability() {
  const status = useStatus();

  const [value, setValue] = useState(0);

  const calculate = useCallback(
    async (item: Racer): Promise<TCalculateResponse> => {
      status.update(StatusEnum.InProgress);

      const probability = await ProbabilityUtil.getRacerWin();

      status.update(StatusEnum.Calculated);
      setValue(ProbabilityUtil.formatPercentage(probability));

      return {
        name: item.name,
        probability,
      };
    },
    []
  );

  return { status, value, calculate };
}
