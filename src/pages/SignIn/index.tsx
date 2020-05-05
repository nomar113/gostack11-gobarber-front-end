import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import logo from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';
import Input from '../../component/Input';
import Button from '../../component/Button';

const SingIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logo} alt="GoBarber" />
      <form>
        <h1>Faça seu logon</h1>
        <Input name="email" icon={FiMail} placeholder="E-mail" />
        <Input
          name="password"
          icon={FiLock}
          placeholder="Senha"
          type="password"
        />
        <Button type="submit">Entrar</Button>
        <a href="forgot">Esqueci minha senha</a>
      </form>
      <a href="login">
        <FiLogIn />
        Criar conta
      </a>
    </Content>
    <Background />
  </Container>
);

export default SingIn;
