import { createContext, useContext, ReactNode, useState } from 'react'
import { QuestionFieldsProps } from '../components/Question/interfaces';

interface QuestionsContextDataProps {
    questions: QuestionFieldsProps[]
    setQuestions: (questions: QuestionFieldsProps[]) => void
}

interface QuestionsProviderProps {
    children: ReactNode;
}

export const QuestionsContext = createContext({} as QuestionsContextDataProps)

export function ContextsProvider({children} :QuestionsProviderProps) {

    const [questions, setQuestions] = useState<QuestionFieldsProps[]>([])

    return (
        <QuestionsContext.Provider value={{
            questions,
            setQuestions,
        }}>
            {children}
        </QuestionsContext.Provider>
    )
}

export function useQuestions() {
    return useContext(QuestionsContext);
}