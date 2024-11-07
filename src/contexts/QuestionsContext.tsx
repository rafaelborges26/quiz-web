import { createContext, useContext, ReactNode, useState, useEffect } from 'react'
import { QuestionFieldsProps } from '../components/Question/interfaces';

interface QuestionsContextDataProps {
    questions: QuestionFieldsProps[]
    setQuestions: (questions: QuestionFieldsProps[]) => void
    selectQuestion: (questionSelected: QuestionFieldsProps) => void
    calculateRigthPercentage: () => void
    percentage: number
    clearQuestions: () => void
}

interface QuestionsProviderProps {
    children: ReactNode;
}

export const QuestionsContext = createContext({} as QuestionsContextDataProps)

export function ContextsProvider({children} :QuestionsProviderProps) {

    
    //remover
    const questionInitial = [
        {
            id: "1",
            question:"Eu sou escuro e misterioso, e, às vezes, sem fim pareço ser. Muitos me atravessam, mas poucos conseguem ver o que escondo ao redor. Por dentro de montanhas ou embaixo do chão, levo você de um lado para o outro sem precisar voltar. Quem sou eu?",
            firstOption: "Ponte",
            secondOption: "Túnel",
            thirdOption: "Poço",
            fourthOption: "Caverna",
            questionCorrect: "2",
            rigthQuestion: undefined,
        },
        {
            id: "2",
            question:"Eu sou o lugar onde se esconde o que não se quer que seja visto, Onde o pó faz morada, mas poucos me visitam. À noite, posso ser o esconderijo de segredos e até de brinquedos esquecidos. Qual é o meu lugar?",
            firstOption: "No guarda-roupa",
            secondOption: "Na estante da sala",
            thirdOption: "No armário da cozinha",
            fourthOption: "Embaixo da cama",
            questionCorrect: "4",
            rigthQuestion: undefined,
        },
        {
            id: "3",
            question:"Eu sou pequeno, mas poderoso, e quando acionado faço alguém sorrir. Posso ser guardado em segredo ou até levado na bolsa para qualquer lugar ir. Funciono à base de energia e, quando estou ligado, ninguém consegue me ignorar. Quem sou eu?",
            firstOption: "Secador de cabelo",
            secondOption: "Barbeador elétrico",
            thirdOption: "Vibrador",
            fourthOption: "Escova de dentes elétrica",
            questionCorrect: "3",
            rigthQuestion: undefined,
        },
        {
            id: "4",
            question:"Sou encontrado em quase toda cozinha, sempre pronto para aquecer, Comigo, preparo comidas quentes e ajudo pratos a esquentar. Mas cuidado para não me deixar ligado por muito tempo, Senão o cheiro de queimado você vai notar! Quem sou eu?",
            firstOption: "Fogão",
            secondOption: "Forno de micro-ondas",
            thirdOption: "Torradeira",
            fourthOption: "Chaleira elétrica",
            questionCorrect: "2",
            rigthQuestion: undefined,
        },
        {
            id: "5",
            question:"Eu sou gelado, mas guardo coisas que te deixam feliz, Entre bebidas e frutas, mantenho tudo fresco aqui. Poucos pensariam em procurar por um presente dentro de mim, Mas se você adivinhar, verá uma surpresa sem fim. Quem sou eu?",
            firstOption: "Janela",
            secondOption: "Filtro",
            thirdOption: "Freezer",
            fourthOption: "Geladeira",
            questionCorrect: "4",
            rigthQuestion: undefined,
        },
    ]

    const [questions, setQuestions] = useState<QuestionFieldsProps[]>([])

    const [percentage, setPercentage] = useState(0)

    //remover
    useEffect(() => {
        setQuestions([...questionInitial] as QuestionFieldsProps[])
    },[])
    
    const selectQuestion = (questionSelected:QuestionFieldsProps) => {
        const newQuestions = questions
        const questionIndex = questions.findIndex(question => question.id === questionSelected.id)

        newQuestions[questionIndex] = questionSelected
        setQuestions(newQuestions)
    }

    const calculateRigthPercentage = () => {
        const questionsRigth = questions.filter(question => question.questionCorrect === question.questionSelected)
        const questionsTotal = questions.length

        if(questionsRigth){
            const resultPercentage = questionsRigth.length * 100 / questionsTotal 
            
            setPercentage(resultPercentage)
        }
    }

    const clearQuestions = () => {
        setQuestions([])
    }

    return (
        <QuestionsContext.Provider value={{
            questions,
            setQuestions,
            selectQuestion,
            calculateRigthPercentage,
            percentage,
            clearQuestions,
        }}>
            {children}
        </QuestionsContext.Provider>
    )
}

export function useQuestions() {
    return useContext(QuestionsContext);
}