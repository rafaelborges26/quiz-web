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

    const [questions, setQuestions] = useState<QuestionFieldsProps[]>([])

    const [percentage, setPercentage] = useState(0)

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