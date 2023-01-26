import { Container, Links, Content } from "./styles"

import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tags"




export function Details(){
  return(
    <Container>
      <Header/>
<main>
  <Content>

      <ButtonText title="Excluir nota"/>
    <h1>Introdução ao React</h1>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quaerat asperiores soluta debitis distinctio commodi, est veniam veritatis nostrum ipsa facere consequuntur delectus ea sed incidunt atque ipsam voluptate. Ad?
    Adipisci saepe blanditiis explicabo eaque numquam pariatur repudiandae commodi autem. Optio maiores illum architecto enim exercitationem. Aliquam dolorum incidunt quod asperiores pariatur sed nam veniam est tempore officia, quisquam inventore?
    Voluptatum modi ea numquam sunt aperiam. Quasi iure eos quos et? Molestiae iusto aperiam magnam, unde sint quia soluta laborum illum ut at doloribus assumenda quaerat ullam perferendis quos iure?</p>
       
      <Section title="Links Uteis">
        <Links>
          <li><a href="https://rocketseat.com.br">rocketseat.com.br</a></li>
          <li><a href="https://rocketseat.com.br">rocketseat.com.br</a></li>
        </Links>
      </Section>

      <Section title="Marcadores">
        <Tag title="Express"/>
        <Tag title="NodeJS"/>
      </Section>


      <Button title="Voltar"/>
  </Content>
</main>
    </Container>
  )
}
