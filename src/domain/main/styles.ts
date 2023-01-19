import styled from "styled-components/native";

import { Header } from "@shared/components/header";

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.color.gray};
`;

export const Content = styled.View`
  flex: 1;
  justify-content: space-around;
  margin: 50px 40px 40px 40px;
`;

export const MainHeader = styled(Header)``;
