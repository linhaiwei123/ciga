
declare interface ITimeConfigData {
    ZhiYa: number,
    YouYa: number,
    LvYe: number,
    KuYe: number,
    KuMaoYe: number
}

declare interface IStory {
    id: number,
    storyName: string,
    title: string,
    content: string,
    yesToHp: number,
    noToHp: number,
    isUsed: number,// tips: number (0,1) => boolean
}

declare type ILeafToNodeConfigData =  Array<number>;

declare type IStoryArrayConfigData = Array<IStory>;

declare type IHpToMaoYeConfigData = Array<number>;

declare interface IHpConfigData {
    hpToGood: number;
    hpToBad: number;
    hpToGoodWin: number;
    hpToBadWin: number;
}