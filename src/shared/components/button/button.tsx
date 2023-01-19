import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  ForwardRefRenderFunction,
} from "react";

import * as S from "./styles";

import { TButtonRef } from "@shared/components/button/types/TButtonRef";

export type Props = {
  label: string;
  disabled?: boolean;
  onPress: () => void;
};

const ButtonImpl: ForwardRefRenderFunction<TButtonRef, Props> = (
  { label, disabled, onPress, ...props },
  ref
) => {
  const [loading, setLoading] = useState(false);

  useImperativeHandle(ref, () => ({
    setLoading,
  }));

  return (
    <S.Wrapper disabled={!!disabled} {...props} onPress={onPress}>
      <S.Label>{label}</S.Label>
      {loading && <S.Loader />}
    </S.Wrapper>
  );
};

export const Button = forwardRef(ButtonImpl);
