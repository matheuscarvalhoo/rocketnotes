import { Container , Brand, Menu , Search, Content, NewNote } from './styles'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'


export function Home(){
  return(
  <Container>
    <Brand>
      <h1>RocketNotes</h1>
    </Brand>
    
    <Header />

    <Menu>
      <ButtonTextColor title="Todos"/>
      <ButtonTextColor title="React"/>
      <ButtonTextColor title="Nodejs"/>
    </Menu> 

    <Search>

    </Search>
    
    <Content>
        
    </Content>
    
    <NewNote>

    </NewNote>
  </Container>
  )
}