import styled from "styled-components/native";

import { Text } from "@shared/components/text";

export const Wrapper = styled.View.attrs(({ theme }) => ({
  shadowColor: theme.color.darkGray,
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 5,
}))`
  width: 220px;
  height: 300px;
  padding: 20px;
  background-color: ${({ theme }) => theme.color.white};
`;

export const Name = styled(Text)`
  font-weight: 500;
  font-size: 18px;
`;

export const Content = styled.View`
  flex: 1;
  padding-top: 8px;
`;

export const Box = styled.View`
  margin-top: 16px;
`;

export const Label = styled(Text)`
  font-size: 10px;
  margin-top: 2px;
  text-transform: uppercase;
`;

export const Value = styled(Text)<{ color: string }>`
  font-weight: 500;
  font-size: 26px;
  color: ${({ color }) => color.toLowerCase()};
`;

export const StatusContent = styled.View`
  padding: 5px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.color.gray};
`;

export const Status = styled(Text)`
  font-size: 10px;
  font-weight: bold;
  text-transform: uppercase;
`;
