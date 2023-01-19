import styled from "styled-components/native";

import { Card } from "@shared/components/card";
import { Button } from "@shared/components/button";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export const Wrapper = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  height: 320px;
  justify-content: center;
`;

export const Carrousel = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  padding: 10px;
`;

export const EmptyIcon = styled(MaterialCommunityIcons).attrs(({ theme }) => ({
  size: 120,
  name: "go-kart-track",
  color: theme.color.black,
}))``;

export const ActionButton = styled(Button)`
  width: 100%;
  margin-top: 100px;
`;
