export interface QuestionProps {
    quantitySelected: string
}

export interface QuestionFieldsProps {
    question?: string
    firstOption?: string
    secondOption?: string
    thirdOption?: string
    fourthOption?: string
    questionCorrect?: '' | '1' | '2' | '3' | '4'
}