declare interface QuestionConfigData {
    name : string,
    yesAttr: number,
    noAttr: number,
    content: string,
    isUsed: boolean
}

declare interface CountConfigData {
    currentNum: number,
    totalNum: number
}

declare interface ScoreConfigData {
    score: number,
}

declare interface ResultState {
    good: boolean,
    bad: boolean,
    normal: boolean
}