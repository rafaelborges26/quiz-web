import Head from 'next/head'
import { Container, ContainerButton, FormQuestion, InputContent } from '../styles/pages/quiz'
import { Heading, Button, Textarea, Input, Checkbox, Icon } from '@chakra-ui/react'
import { ArrowForwardIcon, CheckIcon, CloseIcon } from '@chakra-ui/icons'
import { useQuestions } from '../contexts/QuestionsContext'
import { useState } from 'react'

export default function Quiz() {

  const { questions, selectQuestion } = useQuestions()

  const [isChooseQuestion, setIsChooseQuestion] = useState<'' | '1' | '2' | '3' | '4'>('')
  const [questionIndex, setQuestionIndex] = useState(0)
  const [isButtonNextPageActive, setIsButtonNextPageActive] = useState(false)
  const [isRigthQuestion, setIsRigthQuestion] = useState(false)
  
  const handleChooseQuestion = (question: '1' | '2' | '3' | '4') => {
    if(isChooseQuestion == question)
      setIsChooseQuestion('')
    else setIsChooseQuestion(question)
  }

  const handleConfirmQuestion = () => {
    setIsButtonNextPageActive(true)
    const questionFields = questions[Number(questionIndex)]
    questionFields.questionSelected = isChooseQuestion
    questionFields.rigthQuestion = questionFields.questionCorrect === questionFields.questionSelected
    setIsRigthQuestion(questionFields.questionCorrect === questionFields.questionSelected)

    selectQuestion(questionFields)
  }

  const handleNextQuestion = () => {
    if(questionIndex < questions.length){
      setQuestionIndex(questionIndex+1)
      setIsChooseQuestion('')
    }
    setIsButtonNextPageActive(false)
  }

  
  return (
    <Container>
    <Heading as='h2' size='2xl'>Responda o Quiz corretamente.</Heading>
    <FormQuestion>
    <Heading as='h6' size='lg'>{`Respostas ${questionIndex} de ${questions.length}:`}</Heading>

    { questionIndex < questions.length &&
    (
      <>
      <Textarea
        focusBorderColor='#251F18'
        placeholder='Faça uma pergunta'
        disabled
        value={questions[questionIndex].question}
      />

    <Input
        onClick={() => handleChooseQuestion('1')}
        focusBorderColor='#251F18'
        placeholder='Escolha uma opção'
        value={questions[questionIndex].firstOption}
        bgColor={'#FF6C3E'}
        onChange={() => {}}
        backgroundColor={ isChooseQuestion === '1' ? '#FF6C3E80' : '#5E503F'}
    />
     
    <Input
        backgroundColor={ isChooseQuestion === '2' ? '#FF6C3E80' : '#5E503F'}
        onClick={() => handleChooseQuestion('2')}
        focusBorderColor='#251F18'
        placeholder='Escolha uma opção'
        onChange={() => {}}
        value={questions[questionIndex].secondOption}
    />
    
    <Input
        backgroundColor={ isChooseQuestion === '3' ? '#FF6C3E80' : '#5E503F'}
        onClick={() => handleChooseQuestion('3')}
        focusBorderColor='#251F18'
        placeholder='Escolha uma opção'
        onChange={() => {}}
        value={questions[questionIndex].thirdOption}
    />
    
    <Input
        backgroundColor={ isChooseQuestion === '4' ? '#FF6C3E80' : '#5E503F'}
        onClick={() => handleChooseQuestion('4')}
        focusBorderColor='#251F18'
        placeholder='Escolha uma opção'
        onChange={() => {}}
        value={questions[questionIndex].fourthOption}
    />

    <ContainerButton>
    <Button colorScheme='teal' size={'md'} borderColor="#FF6C3E" variant='outline' onClick={handleConfirmQuestion} disabled={!isChooseQuestion} visibility={ !isButtonNextPageActive ? 'visible' : 'hidden'}>
        Confirmar
    </Button>

    <Button colorScheme='teal' size={'md'} borderColor="#FF6C3E" variant='link' onClick={handleNextQuestion} visibility={ isButtonNextPageActive ? 'visible' : 'hidden'} >
        Próxima pergunta
        <Icon as={ArrowForwardIcon} color="red.500" />
    </Button>
    </ContainerButton>

      </>
    ) }

      
     
    </FormQuestion>
      
    </Container>
  )
}
