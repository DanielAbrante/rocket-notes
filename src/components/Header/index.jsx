import { Container, Profile, Logout } from "./styles";
import { RiShutDownLine } from 'react-icons/ri';

export function Header() {
  return (
    <Container >
      <Profile to="/profile">
        <img src="https://source.unsplash.com/random" alt="Foto do usuário" />

        <div>
          <span>Bem-vindo</span>
          <strong>Daniel</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}