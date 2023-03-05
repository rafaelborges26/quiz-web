import { createContext, useContext, ReactNode, useState, useEffect } from 'react'
import { QuestionFieldsProps } from '../components/Question/interfaces';

interface QuestionsContextDataProps {
    questions: QuestionFieldsProps[]
    setQuestions: (questions: QuestionFieldsProps[]) => void
    selectQuestion: (questionSelected: QuestionFieldsProps) => void
}

interface QuestionsProviderProps {
    children: ReactNode;
}

export const QuestionsContext = createContext({} as QuestionsContextDataProps)

export function ContextsProvider({children} :QuestionsProviderProps) {

    const [questions, setQuestions] = useState<QuestionFieldsProps[]>([])

    const selectQuestion = (questionSelected:QuestionFieldsProps) => {
        const newQuestions = questions
        const questionIndex = questions.findIndex(question => question.id === questionSelected.id)

        newQuestions[questionIndex] = questionSelected
        setQuestions(newQuestions)
    }


    useEffect(() => {
        console.log(questions, 'questions')
    },[questions])

    return (
        <QuestionsContext.Provider value={{
            questions,
            setQuestions,
            selectQuestion,
        }}>
            {children}
        </QuestionsContext.Provider>
    )
}

export function useQuestions() {
    return useContext(QuestionsContext);
}