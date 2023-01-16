import Head from 'next/head'
import { useState } from 'react'
import { Container, FormQuestion } from './styles'
import { Heading, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Input, Text, Button, Textarea } from '@chakra-ui/react'


export const Question = () => {

  const [isSelectedQuantity, setIsSelectedQuantity] = useState(false)

  return (
            <Container>
            <Heading as='h2' size='2xl'>1 de 5</Heading>
            <FormQuestion>
              <Textarea
                focusBorderColor='#251F18'
                placeholder='Escolha uma opção'
              />

            <Input
                focusBorderColor='#251F18'
                placeholder='Escolha uma opção'
            />

            <Input
                focusBorderColor='#251F18'
                placeholder='Escolha uma opção'
            />

            <Input
                focusBorderColor='#251F18'
                placeholder='Escolha uma opção'
            />

            <Input
                focusBorderColor='#251F18'
                placeholder='Escolha uma opção'
            />

            <Button colorScheme='teal' size={'md'} variant='outline' onClick={() => setIsSelectedQuantity(true)} >
                Confirmar
              </Button>

              
              </FormQuestion>
              
            </Container>
  )
}