import Head from 'next/head'
import { useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import { QuestionProps, QuestionFieldsProps } from './interfaces'
import { initialValuesQuestion } from './initialValues'
import { Heading, Input, Button, Textarea, Checkbox } from '@chakra-ui/react'
import { Container, FormQuestion, ContainerInput } from './styles'


export const Question = ( { quantitySelected } :QuestionProps) => {

  const { push } = useRouter()

  const [questions, setQuestions] = useState<QuestionFieldsProps[]>([])
  const [question, setQuestion] = useState<QuestionFieldsProps>(initialValuesQuestion)
  const [quantityQuestionCurrent, setQuantityQuestionCurrent] = useState(1)

  const handleConfirm = () => {
   setQuestions([...questions, question]) 

   if(quantityQuestionCurrent < Number(quantitySelected)){
    setQuantityQuestionCurrent(quantityQuestionCurrent + 1)
    refreshQuestion()
    
    console.log(questions, 'questions')
   } else {
     push('/quiz')
   }
  }

  const refreshQuestion = () => {
    setQuestion(initialValuesQuestion)
  }

  const handleCheckOption = (option: '1' | '2' | '3' | '4') => {
    if(question.questionCorrect === option) {
      setQuestion({ ...question, questionCorrect: '' })
    } else {
      setQuestion({ ...question, questionCorrect: option })
    }
  }

  console.log(question, 'questionn')

  return (
            <Container>
            <Heading as='h2' size='2xl'>{`${quantityQuestionCurrent} de ${quantitySelected}`}</Heading>
            <FormQuestion>
              <Textarea
                focusBorderColor='#251F18'
                placeholder='Faça uma pergunta'
                onChange={e => setQuestion({ ...question, question: e.target.value })}
                value={question.question}
              />

            <ContainerInput>
            <Input
                focusBorderColor='#251F18'
                placeholder='Escolha uma opção'
                onChange={e => setQuestion({ ...question, firstOption: e.target.value })}
                value={question.firstOption}
            />
             <Checkbox colorScheme='orange' size={'lg'} onChange={() => handleCheckOption('1')} isChecked={question.questionCorrect === '1'} />
            </ContainerInput>

            <ContainerInput>
            <Input
                focusBorderColor='#251F18'
                placeholder='Escolha uma opção'
                onChange={e => setQuestion({ ...question, secondOption: e.target.value })}
                value={question.secondOption}

            />
            <Checkbox colorScheme='orange' size={'lg'} onChange={() => handleCheckOption('2')} isChecked={question.questionCorrect === '2'}/>
            </ContainerInput>

            <ContainerInput>
            <Input
                focusBorderColor='#251F18'
                placeholder='Escolha uma opção'
                onChange={e => setQuestion({ ...question, thirdOption: e.target.value })}
                value={question.thirdOption}
            />
            
             <Checkbox colorScheme='orange' size={'lg'} onChange={() => handleCheckOption('3')} isChecked={question.questionCorrect === '3'}/>
            </ContainerInput>

            <ContainerInput>
            <Input
                focusBorderColor='#251F18'
                placeholder='Escolha uma opção'
                onChange={e => setQuestion({ ...question, fourthOption: e.target.value })}
                value={question.fourthOption}
            />
            <Checkbox colorScheme='orange' size={'lg'} onChange={() => handleCheckOption('4')} isChecked={question.questionCorrect === '4'}/>
            </ContainerInput>

            <Button colorScheme='teal' size={'md'} variant='outline' onClick={handleConfirm}>
                Confirmar
            </Button>
            </FormQuestion>
              
            </Container>
  )
}