import Head from 'next/head'
import { useState } from 'react'
import { Question } from '../components/Question'
import { Container, Form, QuantityContainer, Quantity } from '../styles/pages/initial'
import { Heading, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Input, Text, Button } from '@chakra-ui/react'


export default function Home() {

  const [isSelectedQuantity, setIsSelectedQuantity] = useState(false)

  return (
        <Container>
          <Heading as='h2' size='2xl'>Crie abaixo as suas perguntas do Quiz!</Heading>
          <Form>
            { !isSelectedQuantity ? (
              <QuantityContainer>
              <Text fontSize='3xl'>Quantas perguntas você pretende fazer?</Text>
              <Quantity>
              <NumberInput width='20' size="md" defaultValue={5} min={1} max={10} >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
              </NumberInput>
              
              <Button colorScheme='teal' size={'md'} variant='outline' onClick={() => setIsSelectedQuantity(true)} >
                Confirmar
              </Button>
              </Quantity>
              </QuantityContainer>
            ) :
            <>              
            <Question />
            </> 
            }
          


          </Form>
        </Container>
  )
}
