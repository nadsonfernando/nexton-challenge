import * as S from "./styles";

export type Props = {
  title: string;
  subtitle: string;
};

export function Header({ title, subtitle, ...props }: Props) {
  return (
    <S.Wrapper {...props}>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
    </S.Wrapper>
  );
}
