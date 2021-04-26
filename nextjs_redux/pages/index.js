import Head from 'next/head';
import styled, {
    createGlobalStyle,
    ThemeProvider,
} from 'styled-components';

import {
    theme,
} from '../ui/theme';

import {
    Box,
} from '../ui';

const GlobalStyle = createGlobalStyle`
 h1 {
   font-size: 4rem;
 }
`;

const Container = styled.div`
  text-align: center;
`;

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>SSR styled-components with Next.js Starter</title>
      </Head>
      <Container>
        <GlobalStyle />
        <h1>Hello, world!</h1>

        <Box color="primary">
            Это текст
        </Box>
      </Container>
    </ThemeProvider>
  );
}
