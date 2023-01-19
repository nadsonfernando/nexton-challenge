import React, {
  forwardRef,
  useImperativeHandle,
  ForwardRefRenderFunction,
} from "react";

import * as S from "./styles";

import { Racer } from "@models/racer";

import { useProbability } from "@domain/main/racers/item/hooks/probability";
import { TRacerItemreRef } from "@domain/main/racers/item/types/TRacerItemreRef";

type Props = {
  item: Racer;
};

const ItemImpl: ForwardRefRenderFunction<TRacerItemreRef, Props> = (
  { item },
  ref
) => {
  const probability = useProbability();

  useImperativeHandle(ref, () => ({
    calculate() {
      return probability.calculate(item);
    },
  }));

  return (
    <S.Wrapper
      name={item.name}
      weight={item.weight}
      length={item.length}
      color={item.color}
      probability={probability.value}
      status={probability.status.label}
    />
  );
};

export const Item = forwardRef(ItemImpl);
