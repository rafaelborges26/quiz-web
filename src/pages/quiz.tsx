import Head from 'next/head'
import { Container, ContainerButton, FormQuestion, InputContent, TextCorrect, TextError } from '../styles/pages/quiz'
import { Heading, Button, Textarea, Input, Checkbox, Icon } from '@chakra-ui/react'
import { ArrowForwardIcon, CheckIcon, CloseIcon } from '@chakra-ui/icons'
import { useQuestions } from '../contexts/QuestionsContext'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Quiz() {

  const { push } = useRouter()
  const { questions, selectQuestion } = useQuestions()

  const [isChooseQuestion, setIsChooseQuestion] = useState<'' | '1' | '2' | '3' | '4'>('')
  const [questionIndex, setQuestionIndex] = useState(0)
  const [isConfirmedQuestion, setIsConfirmedQuestion] = useState(false)
  const [isRigthQuestion, setIsRigthQuestion] = useState<boolean | null>(null)
  
  const handleChooseQuestion = (question: '1' | '2' | '3' | '4') => {
    if(isChooseQuestion == question)
      setIsChooseQuestion('')
    else setIsChooseQuestion(question)
  }

  const handleConfirmQuestion = () => {
    setIsConfirmedQuestion(true)
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
    setIsRigthQuestion(null)
    setIsConfirmedQuestion(false)
  }

  const handleNavigateToResults = () => {
    push('result')
  }

  console.log(questionIndex, questions.length, 'vezes')
  return (
    <Container>
    <Heading as='h2' size='2xl'>Responda o Quiz corretamente.</Heading>
    <FormQuestion>
    <Heading as='h6' size='lg'>{`Respostas ${questionIndex+1} de ${questions.length}:`}</Heading>

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
        borderColor={isRigthQuestion && isChooseQuestion === '1' ? '#008000' : '#000'}
        onChange={() => {}}
        backgroundColor={ 
          isRigthQuestion && isChooseQuestion === '1' ? '#008000' :
          (isRigthQuestion === false && isChooseQuestion === '1') ? '#931016' :
          isChooseQuestion === '1' ? '#927E67' : '#5E503F'
        }
    />
     
    <Input
        backgroundColor={ 
          (isRigthQuestion && isChooseQuestion === '2') ? '#008000' :
          (isRigthQuestion === false && isChooseQuestion === '2') ? '#931016' :
          isChooseQuestion === '2' ? '#927E67' : '#5E503F'
        }
        onClick={() => handleChooseQuestion('2')}
        focusBorderColor='#251F18'
        borderColor={isRigthQuestion && isChooseQuestion === '2' ? '#008000' : '#000'}
        placeholder='Escolha uma opção'
        onChange={() => {}}
        value={questions[questionIndex].secondOption}
    />
    
    <Input
        backgroundColor={ 
          (isRigthQuestion && isChooseQuestion === '3') ? '#008000' :
          (isRigthQuestion === false && isChooseQuestion === '3') ? '#931016' :
          isChooseQuestion === '3' ? '#927E67' : '#5E503F'
        }
        onClick={() => handleChooseQuestion('3')}
        borderColor={isRigthQuestion && isChooseQuestion === '3' ? '#008000' : '#000'}
        focusBorderColor='#251F18'
        placeholder='Escolha uma opção'
        onChange={() => {}}
        value={questions[questionIndex].thirdOption}
    />
    
    <Input
        backgroundColor={ 
          (isRigthQuestion && isChooseQuestion === '4') ? '#008000' :
          (isRigthQuestion === false && isChooseQuestion === '4') ? '#931016' :
          isChooseQuestion === '4' ? '#927E67' : '#5E503F'
        }
        onClick={() => handleChooseQuestion('4')}
        borderColor={isRigthQuestion && isChooseQuestion === '4' ? '#008000' : '#000'}
        focusBorderColor='#251F18'
        placeholder='Escolha uma opção'
        onChange={() => {}}
        value={questions[questionIndex].fourthOption}
    />

    { !!isRigthQuestion && (
      <TextCorrect>ACERTOU!!</TextCorrect>
    )}

    { !isRigthQuestion && isRigthQuestion !== null && (
      <TextError>ERROU...</TextError>
    )}
      
    

    <ContainerButton>
    <Button colorScheme='teal' size={'md'} borderColor="#FF6C3E" variant='outline' onClick={handleConfirmQuestion} disabled={!isChooseQuestion} visibility={ !isConfirmedQuestion ? 'visible' : 'hidden'}>
        Confirmar
    </Button>

    { questionIndex+1 < questions.length && (
      <Button colorScheme='teal' size={'md'} borderColor="#FF6C3E" variant='link' onClick={handleNextQuestion} visibility={ isConfirmedQuestion ? 'visible' : 'hidden'} >
      Próxima pergunta
      <Icon as={ArrowForwardIcon} color="red.500" />
      </Button>
    ) }

    { questionIndex+1 === questions.length && isConfirmedQuestion &&  (
      <Button colorScheme='teal' size={'md'} borderColor="#FF6C3E" variant='link' onClick={handleNavigateToResults} >
        Visualizar resultados
      <Icon as={ArrowForwardIcon} color="red.500" />
      </Button>
    ) }


    
    </ContainerButton>

      </>
    ) }

      
     
    </FormQuestion>
      
    </Container>
  )
}
