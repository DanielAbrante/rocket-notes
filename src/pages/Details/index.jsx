import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Tag } from "../../components/Tag";

import { Container, Links, Content } from "./styles";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>Introdução ao React</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
            porro tempore autem natus obcaecati voluptatem odio minus optio
            quia. Numquam, cumque laborum consequatur magni minima hic ab dicta
            quo quibusdam? Illum necessitatibus ipsum officia. Illo hic itaque
            porro dolore! Modi quam debitis laudantium assumenda optio aperiam
            amet ut obcaecati. Quas, voluptatem repudiandae.
          </p>

          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">https://roadmap.sh/frontend</a>
              </li>
              <li>
                <a href="#">https://roadmap.sh/backend</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="nodejs" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}
