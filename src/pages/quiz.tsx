import Head from 'next/head'
import { Container, FormQuestion } from '../styles/pages/quiz'
import { Heading, Button, Textarea, Input, Checkbox } from '@chakra-ui/react'
import { useQuestions } from '../contexts/QuestionsContext'
import { useState } from 'react'

export default function Quiz() {

  const { questions } = useQuestions()

  const [isChooseQuestion, setIsChooseQuestion] = useState(0)

  
  const handleChooseQuestion = (question: number) => {
    if(isChooseQuestion === question)
      setIsChooseQuestion(0)
    else setIsChooseQuestion(question)
  }

  console.log(isChooseQuestion, 'questionsss')
  return (
    <Container>
    <Heading as='h2' size='2xl'>Responda o Quiz corretamente.</Heading>
    <FormQuestion>
    <Heading as='h6' size='lg'>Respostas 1 de 3:</Heading>
      <Textarea
        focusBorderColor='#251F18'
        placeholder='Faça uma pergunta'
        disabled
        value={questions[0].question}
      />

    <Input
        onClick={() => handleChooseQuestion(1)}
        focusBorderColor='#251F18'
        placeholder='Escolha uma opção'
        value={questions[0].firstOption}
        bgColor={'#FF6C3E'}
        backgroundColor={ isChooseQuestion === 1 ? '#FF6C3E80' : '#5E503F'}
    />
     
    <Input
        backgroundColor={ isChooseQuestion === 2 ? '#FF6C3E80' : '#5E503F'}
        onClick={() => handleChooseQuestion(2)}
        focusBorderColor='#251F18'
        placeholder='Escolha uma opção'
        value={questions[0].secondOption}

    />
    
    <Input
        backgroundColor={ isChooseQuestion === 3 ? '#FF6C3E80' : '#5E503F'}
        onClick={() => handleChooseQuestion(3)}
        focusBorderColor='#251F18'
        placeholder='Escolha uma opção'
        value={questions[0].thirdOption}
    />
    
    <Input
        backgroundColor={ isChooseQuestion === 4 ? '#FF6C3E80' : '#5E503F'}
        onClick={() => handleChooseQuestion(4)}
        focusBorderColor='#251F18'
        placeholder='Escolha uma opção'
        value={questions[0].fourthOption}
    />

    <Button colorScheme='teal' size={'md'} borderColor="#FF6C3E" variant='outline' onClick={() => console.log(isChooseQuestion)}>
        Confirmar
    </Button>
     
    </FormQuestion>
      
    </Container>
  )
}
