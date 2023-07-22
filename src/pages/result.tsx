import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'

import { Heading, Progress, Stack, Text, Button } from '@chakra-ui/react'
import congratsImage from '../assets/images/congrats.svg'
import failedImage from '../assets/images/failed.svg'

import { useQuestions } from '../contexts/QuestionsContext'
import { messagesStatus } from '../utils/messagesStatus'
import { Container, Content } from '../styles/pages/result'

export default function Result() {

  const { push } = useRouter()

  const { questions, calculateRigthPercentage, percentage, clearQuestions } = useQuestions()

  const rigthQuestions = questions.filter(question => question.rigthQuestion === true )
  
  const success = (percentage > 50) ? true : false 

  const statusMessage = useMemo(() => {
    if(percentage <= 30) {
      return messagesStatus.verryBad
    } else if(percentage > 30 && percentage < 50) {
      return messagesStatus.bad
    } else if(percentage >= 50 && percentage <= 70 ) {
      return messagesStatus.regular
    } else if (percentage > 70) {
      return messagesStatus.verryGood
    }
  },[percentage])

  const handleBackToInitial = () => {
    push('/')
    clearQuestions()
  }

  useEffect(() => {
    calculateRigthPercentage()
  },[calculateRigthPercentage])

  return (
    <Container>
      
    <Heading as='h4' size='2xl'>
      {statusMessage}
    </Heading>
    <Stack spacing={5} width="inherit">
      <Progress colorScheme={ success ? 'green' : 'red'} size='lg' value={percentage} />
    </Stack>
    <Content>

    <Text fontSize='3xl' size='lg'>{`acertou ${rigthQuestions.length} de ${questions.length}`}</Text>

    { success ? (
      <Image src={congratsImage} width={300} alt="parabéns!" />
    ) : (
      <Image src={failedImage} width={400} alt="triste" />
    ) }
    </Content>
    
    <Button variant="unstyled" onClick={handleBackToInitial} >Voltar para o início</Button>
    </Container>
  )
}
