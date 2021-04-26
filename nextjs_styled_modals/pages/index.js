import { useState } from 'react'
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
} from '../ui/atoms';

import {
  Modal,
} from '../ui/molecules';

const GlobalStyle = createGlobalStyle`
 h1 {
   font-size: 4rem;
 }
`;

const Container = styled.div`
  text-align: center;
`;

export default function Home() {
  const [showModal, setShowModal] = useState(false);

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

        <div>
            <button onClick={() => setShowModal(true)}>Open Modal</button>
            <Modal
              onClose={() => setShowModal(false)}
              show={showModal}
            >
              Hello from the modal!
            </Modal>
        </div>
        <div id="modal-root"></div>
      </Container>
    </ThemeProvider>
  );
}
