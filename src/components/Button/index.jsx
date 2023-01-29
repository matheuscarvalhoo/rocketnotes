import { Container } from "./styles";

export function Button({title, ...rest}){
  return(
  <Container 
  type="button"
  isActive={isActive}
  {...rest}
  >
    Voltar
  </Container>
  )
}