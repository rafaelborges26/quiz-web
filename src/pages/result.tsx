import Head from 'next/head'
import { Container, FormQuestion } from '../styles/pages/quiz'
import { Heading, Button, Textarea, Input, Checkbox } from '@chakra-ui/react'
import { useQuestions } from '../contexts/QuestionsContext'
import { useState } from 'react'

export default function Result() {

  const { questions } = useQuestions()


  return (
    <Container>
    <Heading as='h2' size='2xl'>Resultado:</Heading>
    <FormQuestion>
    <Heading as='h6' size='lg'>Voce foi foda!</Heading>
    
    
      
     
    </FormQuestion>
      
    </Container>
  )
}
