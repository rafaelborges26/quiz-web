import Head from 'next/head'
import { useState } from 'react'
import { Container, QuantityContainer } from './styles'
import { QuantityProps } from './interfaces'
import { Heading, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Input, Text, Button, Textarea } from '@chakra-ui/react'

export const Quantity = (  { selectedQuantity, setQuantitySelected } :QuantityProps ) => {

    return (
            <Container>
              <Text fontSize='3xl'>Quantas perguntas você pretende fazer?</Text>
              <QuantityContainer>                            
              <NumberInput width='20' size="md" defaultValue={5} min={1} max={10} onBlur={e => setQuantitySelected(e.target.value)}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
              </NumberInput>
              <Button colorScheme='teal' size={'md'} variant='outline' onClick={() => selectedQuantity(true)} >
                Confirmar
              </Button>
              </QuantityContainer>
              </Container>
    )
}