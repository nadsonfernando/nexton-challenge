import { useMemo, useState } from "react";
import { StatusEnum } from "@domain/main/racers/item/enums/status";

export function useStatus() {
  const [value, update] = useState(StatusEnum.NotYetRun);

  const label = useMemo(() => {
    const values = {
      [StatusEnum.NotYetRun]: "not yet run",
      [StatusEnum.InProgress]: "in progress",
      [StatusEnum.Calculated]: "calculated",
    };

    return values[value];
  }, [value]);

  return { value, label, update };
}
