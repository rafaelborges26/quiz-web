export interface QuestionProps {
    quantitySelected: string
}

export interface QuestionFieldsProps {
    id?: string
    question?: string
    firstOption?: string
    secondOption?: string
    thirdOption?: string
    fourthOption?: string
    questionCorrect?: '' | '1' | '2' | '3' | '4'
    questionSelected?: '' | '1' | '2' | '3' | '4'
    rigthQuestion?: boolean
}