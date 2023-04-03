import { Link } from "react-router-dom";
import { Background, Container, Form } from "./styles";
import { useState } from "react";


import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { useAuth } from "../../hooks/auth";

import { useContext } from "react";
import { FiLock, FiMail } from "react-icons/fi";


export function SignIn(){
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const {signIn} = useAuth()

  function handleSignin(req, res) {
    signIn({email, password})
  }
  return(
    <Container>
      <Form>
        <h1>RocketNotes</h1>
        <p>Aplicação para organizar e gerenciar seus links úteis</p>
        <h2>Faça seu login</h2>

        <Input placeholder="Digite seu e-mail" type="text" icon={FiMail} onChange={e => setEmail(e.target.value)}/>
        <Input placeholder="Digite sua senha" type="password" icon={FiLock} onChange={e => setPassword(e.target.value)}/>

        <Button title="Entrar" onClick={handleSignin}/>
        <Link to="/register">
          Criar conta
        </Link>
      </Form>

      <Background />

    </Container>
    )
}