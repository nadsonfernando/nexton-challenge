import styled from "styled-components/native";

import { Text } from "@shared/components/text";

export const Wrapper = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  padding: 14px 14px;
  border-radius: 26px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: ${({ theme }) => theme.color.black};
`;

export const Label = styled(Text)`
  font-weight: 500;
  font-size: 14px;
  color: ${({ theme }) => theme.color.white};
`;

export const Loader = styled.ActivityIndicator`
  position: absolute;
  right: 20px;
`;
