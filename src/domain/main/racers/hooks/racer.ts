import { useCallback, useState } from "react";

import isEqual from "lodash/isEqual";
import sortBy from "lodash/sortBy";

import { Racer } from "@models/racer";
import { findRacers } from "@services/resources/racers";

import { TCalculateResponse } from "@domain/main/racers/item/types/TCalculateResponse";

import { useStatus } from "@domain/main/racers/hooks/status";
import { useReference } from "@domain/main/racers/hooks/reference";
import { StatusEnum } from "@domain/main/racers/enums/status";

export function useRacer() {
  const status = useStatus();
  const reference = useReference();

  const [items, setItems] = useState<Racer[]>([]);

  const find = useCallback(async () => {
    reference.submit.current?.setLoading(true);

    const { isSuccess, data } = await findRacers();

    if (isSuccess && data?.racers) {
      setItems(data?.racers);
    }

    status.update(StatusEnum.Start);
    reference.submit.current?.setLoading(false);
  }, []);

  const sortItems = useCallback(
    ({ name, probability }: TCalculateResponse) => {
      let data = [...items];

      data.map((item) => {
        if (isEqual(item.name, name)) {
          item.probability = probability;
        }
      });

      data = sortBy(data, "probability", "desc");

      setItems(data);
    },
    [items]
  );

  const start = useCallback(async () => {
    reference.submit.current?.setLoading(true);
    status.update(StatusEnum.InProcessing);

    const promises = reference.items.current?.map(async (item) => {
      const value = await item.calculate();
      sortItems(value);

      return value;
    });

    await Promise.all(promises);

    status.update(StatusEnum.AllCalculated);
    reference.submit.current?.setLoading(false);
  }, [sortItems]);

  const press = useCallback(() => {
    switch (status.value) {
      case StatusEnum.Search:
        return find();

      case StatusEnum.Start:
        return start();

      default:
    }
  }, [status.value, find, start]);

  return { items, press, status, reference };
}
