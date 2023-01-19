import * as S from "./styles";

import { Racers } from "@domain/main/racers";

export function Main() {
  return (
    <S.Wrapper>
      <S.Content>
        <S.MainHeader title="Nexton Racer" subtitle="The racing challenge." />
        <Racers />
      </S.Content>
    </S.Wrapper>
  );
}
