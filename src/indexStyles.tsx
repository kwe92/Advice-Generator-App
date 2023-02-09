import { createGlobalStyle } from "styled-components";

export const AppGlobalTheme = createGlobalStyle`

    * {

        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }

    body {
    
        font-family: Manrope;
        background: ${({ theme }: { theme: ThemeInterface }) =>
          theme.darkBlueColor};

    }

    li {

        list-style: none;

    }

`;
