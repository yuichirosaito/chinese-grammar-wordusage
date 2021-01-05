
window.addEventListener('load', function(){

  const sceneTop = document.getElementById("sceneTop");
  const sceneGame = document.getElementById("sceneGame");
  const sceneResult = document.getElementById("sceneResult");
  const textQuestion = document.getElementById("textQuestion");
  const listAnswer = document.getElementById("listAnswer");
  const showScore = document.getElementById("showScore");
  const btnStart = document.getElementById("btnStart");
  const btnReset = document.getElementById("btnReset");
  const sceneCommentary = document.getElementById("sceneCommentary");
  const btnCommentary = document.getElementById("btnCommentary");
  const explainedQuestion = document.getElementById("explainedQuestion");
  const textQuestion2 = document.getElementById("textQuestion2");

  
  const question = [

    //4級
    {
      text: "请给他两（？）纸。",
      choice: ["件", "把", "张", "个"],
      answer: "张",
      explain: "写真や紙、賞状などの枚数を数える量詞は「张」"
    },
    {
      text: "我家（？）大楼很近。",
      choice: ["从", "离", "和", "跟"],
      answer: "离",
      explain: "特定の場所との距離を示す場合は、前置詞「离」を用いる"
    },
    {
      text: "我是在研究所学（？）汉语。",
      choice: ["了","着","的","过",
      ],
      answer: "的",
      explain: "一定の期間を過ごした経験を表す場合は、助詞「过」を用いる"
    },
    {
      text: "明天我（？）他打电话。",
      choice: ["向","往","对","给",
      ],
      answer: "把",
      explain: "「往」は方向、「对」陳述の対象、“给”は受手をそれぞれ示す"
      
    },
    {
      text: "那里（？）抽烟吗？",
      choice: ["可能","想","可以","要",
      ],
      answer: "可以",
      explain: "許可を得る際は、助動詞「可以」"
    },
    {
      text: "快放寒假（？）。",
      choice: ["吗","呢","的","了",
      ],
      answer: "了",
      explain: "「快（要）〜了」で「もうすぐ〜だ」の意"
    },
    {
      text: "我（？）去过美国。",
      choice: ["不是","没有","不","别",
      ],
      answer: "没有",
      explain: "助詞「过」の否定をする時は「没（有）」を用いる"
    },
    {
      text: "墙上挂（？）一张画儿。",
      choice: ["在","着","得","的",
      ],
      answer: "着",
      explain: "動作が終わってその結果が持続している場合は、助詞「着」を用いる"
    },
    {
      text: "她（？）来了？",
      choice: ["再","才","就","又",
      ],
      answer: "又",
      explain: "「又」は既に行われた行為の、「再」はこれから行われる行為の繰り返しを表す際に用いる"
    },
    {
      text: "他（？）没来？",
      choice: ["怎么","什么","怎么样","什么样",
      ],
      answer: "怎么",
      explain: "文意から「なぜ」を意味する「怎么」が適当"
    },

//3級

    {
      text: "我一看见中国菜（？）想吃。",
      choice: ["再", "就", "在", "又"],
      answer: "就",
      explain: "「一〜就」で「〜するとすぐ」の意"
    },
    {
      text: "（？）下星期五开始，我去食堂吃晚饭。",
      choice: ["从", "在", "对", "离"],
      answer: "从",
      explain: "特定の時間との距離を示す場合は、前置詞「从」を用いる"
    },
    {
      text: "请大家（？）背包放在这边。",
      choice: ["被","把","要","叫",
      ],
      answer: "把",
      explain: "目的語に対して何らかの動作・行為を加える場合に用いる"
    },
    {
      text: "大家都是朋友，你（？）客气。",
      choice: ["应该","不会","不想","不用",
      ],
      answer: "不用",
      explain: "文意から「〜する必要はない」を意味する「不用」が適当"
    },

    {
      text: "刚刚上车的乘客，请（？）里走。",
      choice: ["在","给","往","从",
      ],
      answer: "往",
      explain: "「请往里走」で「奥まで移動してください」の意"
    },
    {
      text: "我每天晚上都吃两（？）面包，喝一杯咖啡。",
      choice: ["本","片","支","张",
      ],
      answer: "片",
      explain: "平たく薄い物を数える時は、量詞「片」を用いる"
    },
    {
      text: "老师（？）我们每天用中文写一篇日记。",
      choice: ["使","对","被","让",
      ],
      answer: "让",
      explain: "「让」は指示、命令、お願いをする際に、「使」は積極的に働きかけた結果ではなく、特定の出来事が原因で特定の結果をもたらす際に用いられる"
    },
    {
      text: "我奶奶（？）70 岁了，但是还在工作。",
      choice: ["虽然","应为","只要","不管",
      ],
      answer: "虽然",
      explain: "文意から「〜ではあるけれど」を意味する「虽然」が適当"
    },
  
    //2級
    {
      text: "你昨天怎么这么没（？），哪里不舒服吗？",
      choice: ["精明","精神","神气","元气",
      ],
      answer: "精神",
      explain: "「精明」は「賢い」、「神气」は「元気いっぱい」を意味する形容詞、「元气」も「元気」を意味するが一般的な北京語では「精神」が適当"
    },
    {
      text: "他跟公司（？）了，要到下周二才能来上班。",
      choice: ["请假","放假","休假","病假",
      ],
      answer: "请假",
      explain: "学校や勤め先が休みの場合は「放假」、有給休暇などで規定通りに休みを取る場合は「休假」、用事や病気などで自ら休暇を取得する場合は「请假」を用いる"
    },
    {
      text: "今天他请客，你别（？），想吃什么就点什么吧。",
      choice: ["大气","小气","争气","客气",
      ],
      answer: "客气",
      explain: "文意から「遠慮深い」を意味する「客气」が適当"
    },
    {
      text: "你们才认识几天，你真的（？）她的性格吗？",
      choice: ["明知","见解","了解","知情",
      ],
      answer: "了解",
      explain: "「知情」は「事情を知っている」という意の形容詞、「见解」は「見方、考え方」を意味する名詞であり、文意から「理解している」を意味する「了解」が適当"
    },
    {
      text: "后天路上可能会堵车，你们最好（？）出门。",
      choice: ["先前","提前","当前","从前",
      ],
      answer: "提前",
      explain: "「先前」、「从前」は「以前」、「当前」は「目下」を意味する名詞であり、文意から「（予定などを）繰り上げる」を意味する「提前」が適当"
    },
    {
      text: "这件事，她嘴上是（？）了，可一直没有实际行动。",
      choice: ["回答","答话","答应","报答",
      ],
      answer: "答应",
      explain: "「回答」「答话」「答应」はそれぞれ「答える」の意を持つが、「答应」には「約束や承諾」のニュアンスがあり、これが適当"
    },
    {
      text: "这家店的小吃，（？）生煎包、馄饨、烧卖什么的，我觉得味道都很好。",
      choice: ["比如","假如","如果","如此",
      ],
      answer: "比如",
      explain: "「假如」「如果」は過程を示す接続詞。文意から喩えをあげる時の接続詞である「比如」が適当"
    },
    {
      text: "自从奶奶用（？）了智能手机，每天都跟我视频聊天儿。",
      choice: ["来","到","下","上",
      ],
      answer: "上",
      explain: "「用上」で対象を使う目的を果たす意となり、文意からこれが適当"
    },
    {
      text: "他的爱好很（？），唱歌、跳舞、画画儿、摄影等他都喜欢。",
      choice: ["广大","广泛","宽大","宽广",
      ],
      answer: "广泛",
      explain: "「广大」「宽广」は空間的な広さを示し、「广泛」はより抽象的な事柄の範囲の広さを示す"
    },
//4級
    {
      text: "这（？）裤子是新购买的。",
      choice: ["本","只","条","件",
      ],
      answer: "条",
      explain: "ハンカチやネクタイなど細長い衣類を数える量詞は「条」"
    },
    {
      text: "我的房间（？）他的房间那么干净。",
      choice: ["比","没有","不","不是",
      ],
      answer: "没有",
      explain: "「那么＋形容詞」の形で「〜ほど〜ではない」の意"
    },
    {
      text: "你（？）日本茶感兴趣吗？",
      choice: ["对","到","在","了",
      ],
      answer: "对",
      explain: "陳述の向けられる対象は前置詞の「对」を用いる"
    },
    {
      text: "（？）买了，家里有很多呢。",
      choice: ["慢","快","别","没",
      ],
      answer: "别",
      explain: "文意から禁止を意味する「别」が適当"
    },
    {
      text: "今年的樱花开得早，四月中旬（？）开了。",
      choice: ["再","还是","刚才","就",
      ],
      answer: "就",
      explain: "文意から「早くも」を意味する「就」が適当"
    },
    {
      text: "佛教传入中国（？）了？",
      choice: ["多长时间","什么时候","几个小时","多少公里",
      ],
      answer: "多长时间",
      explain: "文意から「どれくらいの時間」を意味する代詞「多长时间」が適当"
    },
    {
      text: "刘老师今天不在，你后天（？）来吧。",
      choice: ["又","再","没","才",
      ],
      answer: "再",
      explain: "まだ実現していない未来の繰り返しは「再」を用いる"
    },
  //3級
    {
      text: "这首歌非常好听，他已经听了好几（？）",
      choice: ["道","躺","顿","遍",
      ],
      answer: "遍",
      explain: "初めから終わりまでを数える量詞は「遍」"
    },
    {
      text: "为了预防感染，（？）常洗手。",
      choice: ["应该","会","能","可能",
      ],
      answer: "应该",
      explain: "文意から「すべき」を意味する助動詞「应该」が適当"
    },
    {
      text: "外面很冷，我（？）帽子去。",
      choice: ["穿","戴","配","用",
      ],
      answer: "戴",
      explain: "目的語が「帽子」のため「かぶる」を意味する動詞「戴」が適当"
    },
    {
      text: "公司要求他们，（？）要学汉语，（？）要学法语。",
      choice: ["除了…以外…","因为…所以…","虽然…但…","不光…还…",
      ],
      answer: "不光…还…",
      explain: "「不光〜还」の形で「〜だけではなく〜も」の意"
    },
    {
      text: "这里的情景可真美丽，好久没看（？）这么漂亮的风景了。",
      choice: ["好","完","到","惯",
      ],
      answer: "到",
      explain: "行為が行われた結果として目的が果たされたことを示すには、方向補語「到」を用いる"
    },
    {
      text: "出去的时候记得把门关（？）。",
      choice: ["上","起","下","来",
      ],
      answer: "上",
      explain: "動作が完成し離れているものがくっつく様子を表す時は、方向補語「上」を用いる"
    },
    {
      text: "我平时总是（？）吃饭，（？）看滑手机。",
      choice: ["越…越… ","一边…一边…","有时…有时…","又…又…",
      ],
      answer: "一边…一边…",
      explain: "「一边…一边…」の形で「〜しながら〜する」の意"
    },
    {
      text: "这几天太忙，没时间收拾屋子，房间里很（？）。",
      choice: ["乱","杂","空","多",
      ],
      answer: "乱",
      explain: "文意より「乱れている、散らかっている」を意味する形容詞「乱」が適当"
    },
//2級
    {
      text: "别（？），只要坚持不懈，就会成功的。",
      choice: ["动心","多心","费心","灰心",
      ],
      answer: "灰心",
      explain: "文意より「気落ちする」を意味する動詞「灰心」が適当。「动心」は「心を動かす」、「多心」「费心」は「気を遣う」の意"
    },
    {
      text: "我给她打了好几次电话，（？）还是没打通。",
      choice: ["终止","结局","终了","结果",
      ],
      answer: "结果",
      explain: "文意より「その結果」を意味する副詞「结果」が適当。「结局」は「結末、結果」を意味する名詞のため文の構造に合わない。"
    },
    {
      text: "做了进出口贸易工作以后，我才知道学好一（？）汉语有多么重要。",
      choice: ["节","门","份","项",
      ],
      answer: "门",
      explain: "科目や学問的な種類には量詞「门」を用いる"
    },

    {
      text: "便利商店一下子来了这么多客人，他一个人实在是忙不（?）。",
      choice: ["起来","出来","过来","上来",
      ],
      answer: "过来",
      explain: "「忙不过来」で「忙しくて手が回らない」を意味するので「过来」が適当"
    },
    {
      text: "（？）买一本纸质词典，（？）买一个电子词典。",
      choice: ["与其…不如…","无论…还是…","假如…就…	","尽管…也…",
      ],
      answer: "与其…不如…",
      explain: "「与其…不如…」の形で「〜よりむしろ〜する方が良い」の意"
    },
    {
      text: "公司为获得诺贝尔奖的教授举行了（？）的祝贺大会。",
      choice: ["重大","厚重","隆重","雄厚",
      ],
      answer: "隆重",
      explain: "文意より「大規模で華やか」を意味する形容詞「隆重」が適当"
    },
    {
      text: "这部小说是（？）1912 年 4 月发生的一起沉船事故改编的。",
      choice: ["根据","沿着","据说","按着",
      ],
      answer: "根据",
      explain: "「〜に基づく」を意味する前置詞「根据」が適当。前置詞「沿着」は「〜（方針などに）沿って」を意味しており文意と合わない。「据说」は「聞くところによると」を意味する動詞であり、文意及び文の構造と合わない。"
    },
    {
      text: "那个川的形状（？）一匹马，所以叫白马川。",
      choice: ["似乎","比如","好像","相似",
      ],
      answer: "好像",
      explain: "「似乎」と「好像」は共に「〜のようである」という類似の意味を持つが、「好像」は動詞及び副詞の用法を持つのに対し、「似乎」は副詞の用法のみのため今回は文の構造に合わない。"
    },
    {
      text: "第一次去欧洲旅行的时候，周围的一切都使我感到（？）",
      choice: ["异同","新奇","风趣","逼真",
      ],
      answer: "新奇",
      explain: "文意より「目新しい」を意味する形容詞「新奇」が適当。「逼真」は「真に迫る、はっきりしている」、「风趣」は「ユニーク」の意"
    },

    {
      text: "有名作家的小说也（未必→？）都有意思。",
      choice: ["不得不","不一定","不由得","不得已",
      ],
      answer: "不一定",
      explain: "「未必」はであるとは限らないを意味し「不一定」と同義"
    },
    {
      text: "她跟丈夫的姐姐（合不来→？），一见面就吵架。",
      choice: ["很少接触","很少商量","不能相处","不好说服",
      ],
      answer: "不能相处",
      explain: "「合不来」で馬が合わないを意味するので「不能相处」が適当。「合得来」は「馬が合う」の意。"
    },
    {
      text: "商店让客人用信用卡付款的方便之处是不用（找钱→？）。",
      choice: ["把超过应收金额的钱退还给顾客","把整钱换成零钱","把零钱换成整钱。","用现金付款",
      ],
      answer: "把超过应收金额的钱退还给顾客",
      explain: "「找钱」を「お釣りを支払う」を意味しており「把超过应收金额的钱退还给顾客」が適当。"
    },
    {
      text: "你总这么（大手大脚→？）的，什么时候才买上房子啊？",
      choice: ["做事马马虎虎","生活没有规律","工作拖拖拉拉","花钱没有节制",
      ],
      answer: "花钱没有节制",
      explain: "「大手大脚」が「派手に浪費する」を意味しており「花钱没有节制」が適当"
    },
    {
      text: "她没有其他缺点，就是有点喜欢（吹牛→？）。",
      choice: ["说大话","爱说谎","开玩笑","乱花钱",
      ],
      answer: "说大话",
      explain: "「吹牛」が「大風呂敷を広げる」を意味しており「说大话」が適当"
    },
    {
      text: "小白（点子→？）最多，你去找他吧。",
      choice: ["部下","存款	","主意	","房产",
      ],
      answer: "主意",
      explain: "「点子」が「考え、アイデア」を意味しており「主意」が適当"
    },
    {
      text: "说起唱歌来她唱得可真是（呱呱叫→？）。",
      choice: ["嗓门大","非常好","很有名","很难听",
      ],
      answer: "非常好",
      explain: "「呱呱叫」が「すばらしい」を意味しており「非常好」が適当"
    },
    {
      text: "别跟那些（不三不四→？）的人来往。",
      choice: ["不正派","不认真	","没礼貌	","没水平",
      ],
      answer: "花钱没有节制",
      explain: "「不三不四」が「まともでない」を意味しており「不正派」が適当"
    },
  ];

     newQuestion = [];
     wrongQuestion = [];

     while (question.length > 0) {
  n = question.length;
  k = Math.floor(Math.random() * n);

  newQuestion.push(question[k]);
  question.splice(k, 1);
     }

  let state = {
    answer: "",
    gameCount: 0,
    success: 0
  };

  // スタートボタンが押された時
  function gameStart() {
    changeScene(sceneTop, sceneGame);
    showQuestion();
    choiceQuestion();
  }

  // 1.トップ画面 2.ゲーム画面 3.リザルト画面 4.解説画面 
  function changeScene(hiddenScene, visibleScene) {
    hiddenScene.classList.add("is-hidden");
    hiddenScene.classList.remove("is-visible");
    visibleScene.classList.add("is-visible");
  }

  // 問題と選択肢をViewに表示し、正解を共通の変数へ代入
  function showQuestion() {
    var str = "";
    newQuestion[state.gameCount].choice.forEach(function(value) {
      str += '<li class="questionChoice">' + value + "</li>";
    });
    textQuestion.innerHTML = newQuestion[state.gameCount].text;
    listAnswer.innerHTML = str;
  }

  function choiceQuestion() {
    let questionChoice = document.querySelectorAll(".questionChoice");
    questionChoice.forEach(function(choice) {
      choice.addEventListener(
        "click",
        function() {
          state.answer = this.textContent;
          checkAnswer(newQuestion[state.gameCount].answer);
        },
      );
    });
  }

  // 解答が正解か不正解かをチェック
  
  function checkAnswer(answer) {
    if (answer === state.answer) {
      correctAnswer();
    } else {
      incorrectAnswer();
    }

    state.gameCount++;
    if (state.gameCount < 10) {
      showQuestion();
      choiceQuestion();
    } else {
      gameEnd();
    }
  }

  // 上でチェックし、正解だった場合
  function correctAnswer() {
    state.success+= 10;
  }

  // 上でチェックし、不正解だった場合
  function incorrectAnswer() {
    wrongQuestion.push(newQuestion[state.gameCount]);
  }

  // ゲームが終了した時
  function gameEnd() {
    changeScene(sceneGame, sceneResult);
    showScore.innerHTML = state.success;
    btnCommentary.addEventListener("click", CommentaryBegin);
  }

  // 解説ボタンが押された時
  function CommentaryBegin() {
    var str = "";
    var text = "";
   for (let i = 0; i < wrongQuestion.length; i++) {
    str += '<li class="explained-message">' +  '(' + (i+1) + ')' + wrongQuestion[i].explain; + "</li>";
    text += '<li class="explained-question">' +  '(' + (i+1) + ')' + wrongQuestion[i].text; + "</li>";
    explainedQuestion.innerHTML = str;
    textQuestion2.innerHTML = text;
    }
    
    changeScene(sceneResult, sceneCommentary);
    document.getElementById("score").setAttribute("value",state.success);
    btnReset.addEventListener("click", init);
  }


  // ゲームをリセットする関数
  function init() {
    state.gameCount = 0;
    state.success = 0;
    changeScene(sceneCommentary, sceneTop);
    btnStart.addEventListener("click", gameStart, false);
  }

  // スタートボタンが押されたら、ゲームスタートの関数を
  // リセットボタンが押されたら、ゲーム終了後にゲームをリセットする関数を実行するイベント
  init();
})();