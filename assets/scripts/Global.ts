export let questionConfigDataArray: Array<QuestionConfigData> = [
    {
        name: '谎言',
        yesAttr: 1,
        noAttr: -1,
        content: `咳…咳，相信你一眼就看出我是个将死之人，是树下的那个家伙把我抛到树上等死的，那真是个罪大恶极的家伙，咳…咳，陌生人，你愿意怜悯我，听听我的遗言吗？`,
        isUsed: false
    },
    {
        name: '贪婪',
        yesAttr: -1,
        noAttr: 1,
        content: `谢天谢地，我是一名猎人，我到这里狩猎，只为养妻活儿，殊不知树下那家伙企图抢夺我的收获，陌生人，如果你替我报仇，那我就把我的收获赠送给你，你能帮我吗？`,
        isUsed: false
    },
    {
        name: '谨慎',
        yesAttr: -1,
        noAttr: 1,
        content: `感谢你，凡人，你很明智，不轻易相信片面之言。我是XXX，树上的人是XXX，我躲避他逃到此地，然后搏斗中被这棵怪树纠缠住了，你愿意替我了解一下他的情况吗？`,
        isUsed: false
    },
    {
        name: '堕落',
        yesAttr: -1,
        noAttr: 1,
        content: `贪婪者，现在你已经双手沾满了鲜血，成为了我XXX的帮凶，只需要彻底除掉他，我就可以解脱，作为犒赏，我可以帮你实现任何想要的愿望。赶紧给他致命一击！`,
        isUsed: false
    },
    {
        name: '知足',
        yesAttr: -1,
        noAttr: 1,
        content: `是不是我给你的收获不够丰富？我家里还有一个女儿，你可以带着我的口信回去给我妻子，让她把女儿嫁给你，噢，对了，你还可以继承我的财产，只需要你能替我干掉树下那一个家伙！`,
        isUsed: false
    },
    {
        name: '怜悯',
        yesAttr: -1,
        noAttr: 1,
        content: `咳…咳，你刚才不是连我这个可怜虫的遗言都不想听的吗？怎么现在又假惺惺的来看…咳…咳，不用你管，你和他是一伙的，现在是想看我在穿刺的痛苦中慢慢死去，对吧？`,
        isUsed: false
    },
    {
        name: '牺牲',
        yesAttr: 1,
        noAttr: -1,
        content: `虽然他伤害了我，但他其实是我的亲兄弟，我不能见死不救。如果我们两只能活一个，我愿意牺牲自己来救他。现在，请你用我的鲜血，去让他重获自由吧。`,
        isUsed: false
    },
];

export let countConfigData: CountConfigData = {
    currentNum: 0,
    totalNum: 7
};

export let scoreConfigData: ScoreConfigData = {
    score: 0
};

export let resultState: ResultState = {
    good: false,
    bad: false,
    normal: false
};