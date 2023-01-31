import { Container, Form } from "./styles";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { FiLock, FiMail } from "react-icons/fi";


export function SignIn(){
  return(
    <Container>
      <Form>
        <h1>RocketNotes</h1>
        <p>Aplicação para organizar e gerenciar seus links úteis</p>
        <h2>Faça seu login</h2>

        <Input placeholder="Digite seu e-mail" type="text" icon={FiMail}/>
        <Input placeholder="Digite sua senha" type="password" icon={FiLock}/>

        <Button title="Entrar"/>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          Criar conta
        </a>
      </Form>


    </Container>
    )
}