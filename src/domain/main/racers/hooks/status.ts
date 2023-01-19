import { useMemo, useState } from "react";
import { StatusEnum } from "@domain/main/racers/enums/status";

export function useStatus() {
  const [value, update] = useState(StatusEnum.Search);

  const label = useMemo(() => {
    const values = {
      [StatusEnum.Search]: "Search racers",
      [StatusEnum.Start]: "Start race",
      [StatusEnum.InProcessing]: "In Progressing",
      [StatusEnum.AllCalculated]: "All Calculated",
    };

    return values[value];
  }, [value]);

  return { value, label, update };
}
