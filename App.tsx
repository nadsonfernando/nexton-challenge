import { Main } from "@domain/main";
import { ThemeProvider } from "styled-components";

import * as theme from "@theme/index";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
}
