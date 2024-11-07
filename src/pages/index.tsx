import Head from 'next/head'
import { useState } from 'react'
import { Question, Quantity } from '../components'
import { Container, Form } from '../styles/pages/initial'
import { Button, Heading } from '@chakra-ui/react'
import { useQuestions } from '../contexts/QuestionsContext'
import { useRouter } from 'next/router'

export default function Home() {

  //dps tirar

  const { push } = useRouter() 
  const { questions } = useQuestions()

  const [isSelectedQuantity, setIsSelectedQuantity] = useState(false)
  const [quantitySelected, setQuantitySelected] = useState('5')

  return (
        <Container>
          { questions.length > 0 ? (
            <>
                        <Heading as='h2' size='2xl'>Feliz aniversário mais um ao seu lado!🎉</Heading>
                        <Heading as='h2' size='2xl'>
                        Meu amor,

Hoje, eu queria te convidar para algo especial, cheio de diversão e surpresas, em comemoração ao seu dia. 🎉 Como sei que você adora um bom mistério e tem um espírito aventureiro, pensei em te dar um presente diferente: uma noite de charadas só para nós dois!

Preparei algumas charadas e desafios que vão te fazer rir, pensar e, quem sabe, até te fazer arriscar alguns palpites loucos! Cada resposta vai te levar a uma surpresa, e tudo foi feito para que cada momento seja uma lembrança inesquecível do quanto você significa para mim. ❤️
</Heading>

<Heading as='h2' size='2xl'>

Regras:
Você tem 30 segundos para responder corretamente à pergunta que vai te levar até o presente. Se acertar, a resposta vai indicar onde ele está escondido; mas, se errar... bem, o presente fica comigo! Boa sorte! 😜
Bora?

                        </Heading>
                        <Button onClick={() => {push('quiz')}}>START</Button>
                        </>

          ) : (<>
            <Heading as='h2' size='2xl'>Crie abaixo as suas perguntas do Quiz!</Heading>
          <Form>
            { !isSelectedQuantity ? (
              <Quantity setIsSelectedQuantity={setIsSelectedQuantity} setQuantitySelected={setQuantitySelected} quantitySelected={quantitySelected} />
            ) :  
            <Question quantitySelected={quantitySelected}/> 
            }
          </Form>
          </>
          )
        }
          
        </Container>
  )
}
