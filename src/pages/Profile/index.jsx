import { Container, Form, Avatar } from "./styles";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import {FiArrowLeft, FiUser, FiMail, FiLock, FiCamera} from "react-icons/fi"
import { Link } from "react-router-dom";


export function Profile() {
  return(
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
        </Link>
      </header>
      <Form>
        <Avatar>
          <img src="https://github.com/TheRealMarrk.png" alt="Foto do usuário" />
          <label htmlFor="avatar">
            <FiCamera/>
            <input id="avatar" type="file" />
          </label>
        </Avatar>
        <Input  placeholder="Nome" type="text" icon={FiUser}/>
        <Input  placeholder="Email" type="email" icon={FiMail}/>
        <Input  placeholder="Senha atual" type="password" icon={FiLock}/>
        <Input  placeholder="Nova senha" type="password" icon={FiLock}/>

        <Button title="Salvar"/>

      </Form>
    </Container>
  )
}
