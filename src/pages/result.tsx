import Head from 'next/head'
import { Container, Content } from '../styles/pages/result'
import congratsImage from '../assets/images/congrats.svg'
import failedImage from '../assets/images/failed.svg'

import { Heading, Progress, Stack, Text } from '@chakra-ui/react'
import { useQuestions } from '../contexts/QuestionsContext'
import { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import { messagesStatus } from '../utils/messagesStatus'

export default function Result() {

  const { questions, calculateRigthPercentage, percentage } = useQuestions()

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
      
    </Container>
  )
}
