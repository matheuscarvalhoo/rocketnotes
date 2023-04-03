import { Container, Form, Background } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";


import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { FiLock, FiMail, FiUser } from "react-icons/fi";
import { api } from "../../services/api";

export function SignUp(){
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSingUp(){
    if(!name || !email || !password){
      return alert("Preencha todos os campos para fazer o cadastro!")
    }

    api.post("/users", {name, email, password})
    .then(()=>{
      alert("Usuário cadastrado com sucesso")
      navigate("/")
    })
    .catch(error => {
      if(error.response){
        alert(error.response.data.message)
      }else{
        alert("não foi possivel cadastrar")
      }}
    )
  }


  return(
    <Container>
      <Background />

      <Form>
        <h1>RocketNotes</h1>
        <p>Aplicação para organizar e gerenciar seus links úteis</p>
        <h2>Crie sua conta</h2>

        <Input 
        placeholder="Nome" 
        type="text" 
        icon={FiUser} 
        onChange={e=>setName(e.target.value)}
        />

        <Input 
        placeholder="Email" 
        type="email" icon={FiMail} 
        onChange={e=>setEmail(e.target.value)}
        />
  
        <Input 
        placeholder="Senha" 
        type="password" 
        icon={FiLock} 
        onChange={e=>setPassword(e.target.value)}
        />

        <Button title="Cadastrar" onClick={handleSingUp}/>
        <Link to="/">
          Voltar para o login
        </Link>
      </Form>


    </Container>
    )
}