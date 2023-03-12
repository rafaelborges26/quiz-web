import Head from 'next/head'
import { Container, Content } from '../styles/pages/result'
import congratsImage from '../assets/images/congrats.svg'
import failedImage from '../assets/images/failed.svg'

import { Heading, Button, Textarea, Input, Checkbox, Progress, Stack, Text } from '@chakra-ui/react'
import { useQuestions } from '../contexts/QuestionsContext'
import { useState } from 'react'
import Image from 'next/image'

export default function Result() {

  const { questions } = useQuestions()

  const successok = questions.filter(question => question.rigthQuestion === true )

  console.log(successok.length, 'teste')

  const success = false

  //setar se é mais q 50% sucesso se nao falso

  //setar tambem a porcentagem da barra de progress

  return (
    <Container>
      
    <Heading as='h4' size='2xl'>
      { success ? 'Você foi muito bem!' : 'Você foi muito mal!' }
      
    </Heading>
    <Stack spacing={5} width="inherit">
      <Progress colorScheme={ success ? 'green' : 'red'} size='lg' value={50} />
    </Stack>
    <Content>

    <Text fontSize='3xl' size='lg'>{`acertou ${successok.length} de ${questions.length}`}</Text>

    { success ? (
      <Image src={congratsImage} width={300} alt="parabéns!" />
    ) : (
      <Image src={failedImage} width={400} alt="triste" />
    ) }

    
    
      
     
    </Content>
      
    </Container>
  )
}
