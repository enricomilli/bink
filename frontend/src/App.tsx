import type { Component } from 'solid-js';
import { AuthenticationCard } from './pages/login/AuthCard';
import { Container } from 'styled-system/jsx';

const App: Component = () => {
    return (
        <Container py={{ base: '12', md: '16' }} w="screen" h="screen">
            <Container w={"1/3"} h={'full'}>
                <AuthenticationCard />
            </Container>
        </Container>
    );
};

export default App;
