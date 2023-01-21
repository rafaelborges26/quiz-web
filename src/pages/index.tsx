import Head from 'next/head'
import { useState } from 'react'
import { Question, Quantity } from '../components'
import { Container, Form } from '../styles/pages/initial'
import { Heading } from '@chakra-ui/react'

export default function Home() {

  const [isSelectedQuantity, setIsSelectedQuantity] = useState(false)
  const [quantitySelected, setQuantitySelected] = useState('')

  return (
        <Container>
          <Heading as='h2' size='2xl'>Crie abaixo as suas perguntas do Quiz!</Heading>
          <Form>
            { !isSelectedQuantity ? (
              <Quantity selectedQuantity={setIsSelectedQuantity} setQuantitySelected={setQuantitySelected} />
            ) :  
            <Question quantitySelected={quantitySelected}/> 
            }
          </Form>
        </Container>
  )
}
