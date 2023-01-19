import "styled-components";

import { TColor } from "@theme/color/types/TColor";

declare module "styled-components" {
  export interface DefaultTheme {
    color: TColor;
  }
}
