import Head from 'next/head'
import { useState } from 'react'
import { Container, FormQuestion } from './styles'
import { QuestionProps, QuestionFieldsProps } from './interfaces'
import { Heading, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Input, Text, Button, Textarea } from '@chakra-ui/react'


export const Question = ( { quantitySelected } :QuestionProps) => {

  const [isSelectedQuantity, setIsSelectedQuantity] = useState(false)
  const [questions, setQuestions] = useState<QuestionFieldsProps[]>([])
  const [question,setQuestion] = useState('')
  const [firstOption,setFirstOption] = useState('')
  const [secondOption,setSecondOption] = useState('')
  const [thirdOption,setThirdOption] = useState('')
  const [fourthOptionn,setFourthOption] = useState('')
  
  
  const handleConfirm = () => {

   // adicionar no array const newQuestion = questions.push([...newQuestion, question])

       
  }

  return (

            <Container>
            <Heading as='h2' size='2xl'>{`1 de ${quantitySelected}`}</Heading>
            <FormQuestion>
              <Textarea
                focusBorderColor='#251F18'
                placeholder='Faça uma pergunta'
                onBlur={e => setQuestion(e.target.value)}

              />

            <Input
                focusBorderColor='#251F18'
                placeholder='Escolha uma opção'
                onBlur={e => setFirstOption(e.target.value)}

            />

            <Input
                focusBorderColor='#251F18'
                placeholder='Escolha uma opção'
                onBlur={e => setSecondOption(e.target.value)}
            />

            <Input
                focusBorderColor='#251F18'
                placeholder='Escolha uma opção'
                onBlur={e => setThirdOption(e.target.value)}

            />

            <Input
                focusBorderColor='#251F18'
                placeholder='Escolha uma opção'
                onBlur={e => setFourthOption(e.target.value)}
            />

            <Button colorScheme='teal' size={'md'} variant='outline' onClick={() => setIsSelectedQuantity(true)} >
                Confirmar
            </Button>

              
              </FormQuestion>
              
            </Container>
  )
}