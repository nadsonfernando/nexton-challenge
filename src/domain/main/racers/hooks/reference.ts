import { useCallback, useRef } from "react";

import { TRacerItemreRef } from "@domain/main/racers/item/types/TRacerItemreRef";
import { TButtonRef } from "@shared/components/button/types/TButtonRef";

export function useReference() {
  const submit = useRef<TButtonRef>(null);
  const items = useRef<TRacerItemreRef[]>([]);

  const refer = useCallback(
    (element: any, index: number) => (items.current[index] = element),
    [items]
  );

  return { refer, submit, items };
}
