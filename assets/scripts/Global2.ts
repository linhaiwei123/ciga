/**
 * Created by Administrator on 2017/6/17 0017.
 */
export let storyConfigDataArray2: IStoryConfigDataArray2 = [
    {
        id: 0,
        yesToHp: 1,
        noToHp: 0,
        isUsed: 0,
        dialogId: 0,
    },
    {
        id: 1,
        yesToHp: 1,
        noToHp: 0,
        isUsed: 0,
        dialogId: 1,
    },
    {
        id: 2,
        yesToHp: 1,
        noToHp: 0,
        isUsed: 0,
        dialogId: 2,
    },
    {
        id: 3,
        yesToHp: 0,
        noToHp: 1,
        isUsed: 0,
        dialogId: 3,
    },
    {
        id: 4,
        yesToHp: 0,
        noToHp: 1,
        isUsed: 0,
        dialogId: 4,
    },
    {
        id: 5,
        yesToHp: 0,
        noToHp: 1,
        isUsed: 0,
        dialogId: 4,
    },
];

export let dialogConfigDataArray2 : IdialogConfigDataArray2 = [
    ['up:否','down:否','up:否','down:否','up:否'],
    ['down:否','up:否','down:否','up:否','down:否','up:否'],
    ['up:否','down:否','up:否','down:否','up:否','down:否','up:否'],
    ['down:是','up:是','down:是','up:是','down:是','up:是','down:是','up:是'],
    ['up:是','down:是','up:是','down:是','up:是','down:是','up:是','down:是','up:是'],
    ['down:是','up:是','down:是','up:是','down:是','up:是','down:是','up:是','down:是','up:是'],
];

export let hpConfigData2: IHpConfigData2 = {
    currentHp: 0,
    goodWinHp: 3,
    badWinHp: -3
};

export let storyNumConfigData2: IStoryNumConfigData2 = {
    currentStoryNum: 0,
    totalStoryNum: 5,
};

export let resultState: ResultState = {
    good: false,
    bad: false,
    middle: false,
    none: false,
};

