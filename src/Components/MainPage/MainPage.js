import React from 'react'
import { MainContainer, Form, Input } from './styles'
import { useState } from 'react'

function MainPage() {

  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState(0)
  const [email, setEmail] = useState("")

  const letInputName = (event) => {
    setNome(event.target.value)
    console.log(nome)
  }
  const letInputIdade = (event) => {
    setIdade(event.target.value)
    console.log(idade)
  }
  const letInputEmail = (event) => {
    setEmail(event.target.value)
    console.log(email)
  }

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form>
        <label>
          Nome:
          <Input onChange={letInputName} value={nome}/>
        </label>
        <label>
          Idade:
          <Input onChange={letInputIdade} value={idade}/>
        </label>
        <label>
          E-mail:
          <Input onChange={letInputEmail} value={email}/>
        </label>
        <button>Enviar dados</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage