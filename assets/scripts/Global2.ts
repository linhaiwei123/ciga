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
        yesToHp: 0,
        noToHp: 1,
        isUsed: 0,
        dialogId: 1,
    },
    {
        id: 2,
        yesToHp: 0,
        noToHp: 1,
        isUsed: 0,
        dialogId: 2,
    },
    {
        id: 3,
        yesToHp: 1,
        noToHp: 0,
        isUsed: 0,
        dialogId: 3,
    },
    {
        id: 4,
        yesToHp: 0,
        noToHp: 1,
        isUsed: 0,
        dialogId: 4,
    }
];

export let dialogConfigDataArray2 : IdialogConfigDataArray2 = [
    ['up:5','down:4','up:3','down:2','up:1'],
    ['down:6','up:5','down:4','up:3','down:2','up:1'],
    ['up:7','down:6','up:5','down:4','up:3','down:2','up:1'],
    ['down:8','up:7','down:6','up:5','down:4','up:3','down:2','up:1'],
    ['up:9','down:8','up:7','down:6','up:5','down:4','up:3','down:2','up:1'],
];

export let hpConfigData2: IHpConfigData2 = {
    currentHp: 0,
    goodWinHp: 10,
    badWinHp: -10
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

