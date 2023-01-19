import * as S from "./styles";

import isEmpty from "lodash/isEmpty";
import isEqual from "lodash/isEqual";

import { Item } from "@domain/main/racers/item";
import { useRacer } from "@domain/main/racers/hooks/racer";

import { StatusEnum } from "@domain/main/racers/enums/status";

export function Racers() {
  const racer = useRacer();

  return (
    <S.Wrapper>
      <S.Content>
        {isEmpty(racer.items) && <S.EmptyIcon />}

        {!isEmpty(racer.items) && (
          <S.Carrousel>
            {racer.items.map((item, index) => (
              <Item
                key={item.name}
                item={item}
                ref={(element) => racer.reference.refer(element, index)}
              />
            ))}
          </S.Carrousel>
        )}
      </S.Content>

      <S.ActionButton
        ref={racer.reference.submit}
        label={racer.status.label}
        onPress={racer.press}
        disabled={
          isEqual(racer.status.value, StatusEnum.InProcessing) ||
          isEqual(racer.status.value, StatusEnum.AllCalculated)
        }
      />
    </S.Wrapper>
  );
}
