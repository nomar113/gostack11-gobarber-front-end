import React from 'react';
import { FiPower, FiClock } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  NextAppointment,
  Section,
  Appointment,
  Calendar,
} from './styles';

const Dashboard: React.FC = () => {
  const { user, signOut } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <img src={user.avatar} alt={user.name} />
            <div>
              <span>Bem vindo,</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>
          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <Schedule>
          <h1>Horários agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 6</span>
            <span>Segunda-feira</span>
          </p>

          <NextAppointment>
            <strong>Atendimento a seguir</strong>
            <div>
              <img
                src="https://avatars2.githubusercontent.com/u/34141267?s=460&u=3d13ddaaf7d1aff4711edde9c860a80fc67c284f&v=4"
                alt="Ramon Mesquita"
              />

              <strong>Ramon Mesquita</strong>
              <span>
                <FiClock />
                08:00
              </span>
            </div>
          </NextAppointment>

          <Section>
            <strong>Manhã</strong>
            <Appointment>
              <span>
                <FiClock /> 08:00
              </span>

              <div>
                <img
                  src="https://avatars2.githubusercontent.com/u/34141267?s=460&u=3d13ddaaf7d1aff4711edde9c860a80fc67c284f&v=4"
                  alt="Ramon Mesquita"
                />
                <strong>Ramon Mesquita</strong>
              </div>
            </Appointment>
          </Section>
          <Section>
            <strong>Tarde</strong>
            <Appointment>
              <span>
                <FiClock /> 08:00
              </span>
              <div>
                <img
                  src="https://avatars2.githubusercontent.com/u/34141267?s=460&u=3d13ddaaf7d1aff4711edde9c860a80fc67c284f&v=4"
                  alt="Ramon Mesquita"
                />
                <strong>Ramon Mesquita</strong>
              </div>
            </Appointment>
          </Section>
        </Schedule>
        <Calendar />
      </Content>
    </Container>
  );
};

export default Dashboard;
