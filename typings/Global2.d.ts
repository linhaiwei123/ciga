/**
 * Created by Administrator on 2017/6/17 0017.
 */
declare interface IStoryConfigData2 {
    id: number,
    yesToHp: number,
    noToHp: number,
    isUsed: number,
    dialogId: number,
}

declare type IdialogConfigData2 = Array<string>;

declare type IdialogConfigDataArray2 = Array<IdialogConfigData2>;

declare type IStoryConfigDataArray2 = Array<IStoryConfigData2>;

declare interface IHpConfigData2 {
    currentHp: number,
    goodWinHp: number,
    badWinHp: number,
}
declare interface IStoryNumConfigData2 {
    currentStoryNum: number,
    totalStoryNum: number,
}

declare interface ResultState {
    good: boolean,
    bad: boolean,
    middle: boolean,
    none: boolean,
}