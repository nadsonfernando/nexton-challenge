import { PropsWithChildren } from "react";

import * as S from "./styles";

export type Props = PropsWithChildren<{}>;

export function Text({ children, ...props }: Props) {
  return <S.Text {...props}>{children}</S.Text>;
}
