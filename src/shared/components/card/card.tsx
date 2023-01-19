import * as S from "./styles";

export type Props = {
  status: string;
  name: string;
  length: number;
  weight: number;
  color: string;
  probability: number;
};

export function Card({
  status,
  name,
  length,
  weight,
  color,
  probability,
  ...props
}: Props) {
  return (
    <S.Wrapper {...props}>
      <S.Name>{name}</S.Name>

      <S.Content>
        <S.Box>
          <S.Value color={color}>{weight}</S.Value>
          <S.Label>weight</S.Label>
        </S.Box>

        <S.Box>
          <S.Value color={color}>{length}</S.Value>
          <S.Label>lenght</S.Label>
        </S.Box>

        <S.Box>
          <S.Value color={color}>{probability}%</S.Value>
          <S.Label>probability of winning</S.Label>
        </S.Box>

        <S.StatusContent>
          <S.Status>{status}</S.Status>
        </S.StatusContent>
      </S.Content>
    </S.Wrapper>
  );
}
