import type { Component } from 'solid-js';
import { AuthenticationCard } from './pages/login/AuthCard';
import { Container } from 'styled-system/jsx';

const App: Component = () => {
    return (
        <Container py={{ base: '12', md: '16' }} w="screen" h="screen" grid="" placeItems="center" justifyItems={"center"}>
            <AuthenticationCard />
        </Container>
    );
};

export default App;
