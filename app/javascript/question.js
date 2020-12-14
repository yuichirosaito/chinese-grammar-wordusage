
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
      text: "请给他两（???）纸。",
      choice: ["件", "把", "张", "个"],
      answer: "张",
      explain: "写真や紙、賞状などの枚数を数える量詞は「张」"
    },
    {
      text: "我家（???）大楼很近。",
      choice: ["从", "离", "和", "跟"],
      answer: "离",
      explain: "特定の場所との距離を示す場合は、前置詞「离」を用いる"
    },
    {
      text: "我是在研究所学（???）汉语。",
      choice: ["了","着","的","过",
      ],
      answer: "的",
      explain: "一定の期間を過ごした経験を表す場合は、助詞「过」を用いる"
    },
    {
      text: "明天我（???）他打电话。",
      choice: ["向","往","对","给",
      ],
      answer: "把",
      explain: "「往」は方向、「对」陳述の対象、“给”は受手をそれぞれ示す"
      
    },
    {
      text: "那里（???）抽烟吗？",
      choice: ["可能","想","可以","要",
      ],
      answer: "可以",
      explain: "許可を得る際は、助動詞「可以」"
    },
    {
      text: "快放寒假（???）。",
      choice: ["吗","呢","的","了",
      ],
      answer: "了",
      explain: "「快（要）〜了」で「もうすぐ〜だ」の意"
    },
    {
      text: "我（???）去过美国。",
      choice: ["不是","没有","不","别",
      ],
      answer: "没有",
      explain: "助詞「过」の否定をする時は「没（有）」を用いる"
    },
    {
      text: "墙上挂（???）一张画儿。",
      choice: ["在","着","得","的",
      ],
      answer: "着",
      explain: "動作が終わってその結果が持続している場合は、助詞「着」を用いる"
    },
    {
      text: "她（???）来了？",
      choice: ["再","才","就","又",
      ],
      answer: "又",
      explain: "「又」は既に行われた行為の、「再」はこれから行われる行為の繰り返しを表す際に用いる"
    },
    {
      text: "他（???）没来？",
      choice: ["怎么","什么","怎么样","什么样",
      ],
      answer: "怎么",
      explain: "文意から「なぜ」を意味する「怎么」が適当"
    },

//3級

    {
      text: "我一看见中国菜（???）想吃。",
      choice: ["再", "就", "在", "又"],
      answer: "就",
      explain: "「一〜就」で「〜するとすぐ」の意"
    },
    {
      text: "（???）下星期五开始，我去食堂吃晚饭。",
      choice: ["从", "在", "对", "离"],
      answer: "从",
      explain: "特定の時間との距離を示す場合は、前置詞「从」を用いる"
    },
    {
      text: "请大家（???）背包放在这边。",
      choice: ["被","把","要","叫",
      ],
      answer: "把",
      explain: "目的語に対して何らかの動作・行為を加える場合に用いる"
    },
    {
      text: "大家都是朋友，你（???）客气。",
      choice: ["应该","不会","不想","不用",
      ],
      answer: "不用",
      explain: "文意から「〜する必要はない」を意味する「不用」が適当"
    },

    {
      text: "刚刚上车的乘客，请（???）里走。",
      choice: ["在","给","往","从",
      ],
      answer: "往",
      explain: "「请往里走」で「奥まで移動してください」の意"
    },
    {
      text: "我每天晚上都吃两（???）面包，喝一杯咖啡。",
      choice: ["本","片","支","张",
      ],
      answer: "片",
      explain: "平たく薄い物を数える時は、量詞「片」を用いる"
    },
    {
      text: "老师（???）我们每天用中文写一篇日记。",
      choice: ["使","对","被","让",
      ],
      answer: "让",
      explain: "「让」は指示、命令、お願いをする際に、「使」は積極的に働きかけた結果ではなく、特定の出来事が原因で特定の結果をもたらす際に用いられる"
    },
    {
      text: "我奶奶（???）70 岁了，但是还在工作。",
      choice: ["虽然","应为","只要","不管",
      ],
      answer: "虽然",
      explain: "文意から「〜ではあるけれど」を意味する「虽然」が適当"
    },
  
    //2級
    {
      text: "你昨天怎么这么没（???），哪里不舒服吗？",
      choice: ["精明","精神","神气","元气",
      ],
      answer: "精神",
      explain: "「精明」は「賢い」、「神气」は「元気いっぱい」を意味する形容詞、「元气」も「元気」を意味するが一般的な北京語では「精神」が適当"
    },
    {
      text: "他跟公司（???）了，要到下周二才能来上班。",
      choice: ["请假","放假","休假","病假",
      ],
      answer: "请假",
      explain: "学校や勤め先が休みの場合は「放假」、有給休暇などで規定通りに休みを取る場合は「休假」、用事や病気などで自ら休暇を取得する場合は「请假」を用いる"
    },
    {
      text: "今天他请客，你别（???），想吃什么就点什么吧。",
      choice: ["大气","小气","争气","客气",
      ],
      answer: "客气",
      explain: "文意から「遠慮深い」を意味する「客气」が適当"
    },
    {
      text: "你们才认识几天，你真的（???）她的性格吗？",
      choice: ["明知","见解","了解","知情",
      ],
      answer: "了解",
      explain: "「知情」は「事情を知っている」という意の形容詞、「见解」は「見方、考え方」を意味する名詞であり、文意から「理解している」を意味する「了解」が適当"
    },
    {
      text: "后天路上可能会堵车，你们最好（???）出门。",
      choice: ["先前","提前","当前","从前",
      ],
      answer: "提前",
      explain: "「先前」、「从前」は「以前」、「当前」は「目下」を意味する名詞であり、文意から「（予定などを）繰り上げる」を意味する「提前」が適当"
    },
    {
      text: "这件事，她嘴上是（???）了，可一直没有实际行动。",
      choice: ["回答","答话","答应","报答",
      ],
      answer: "答应",
      explain: "「回答」「答话」「答应」はそれぞれ「答える」の意を持つが、「答应」には「約束や承諾」のニュアンスがあり、これが適当"
    },
    {
      text: "这家店的小吃，（???）生煎包、馄饨、烧卖什么的，我觉得味道都很好。",
      choice: ["比如","假如","如果","如此",
      ],
      answer: "比如",
      explain: "「假如」「如果」は過程を示す接続詞。文意から喩えをあげる時の接続詞である「比如」が適当"
    },
    {
      text: "自从奶奶用（???）了智能手机，每天都跟我视频聊天儿。",
      choice: ["来","到","下","上",
      ],
      answer: "上",
      explain: "「用上」で対象を使う目的を果たす意となり、文意からこれが適当"
    },
    {
      text: "他的爱好很（???），唱歌、跳舞、画画儿、摄影等他都喜欢。",
      choice: ["广大","广泛","宽大","宽广",
      ],
      answer: "广泛",
      explain: "「广大」「宽广」は空間的な広さを示し、「广泛」はより抽象的な事柄の範囲の広さを示す"
    },
    {
      text: "（???）你们都不告诉他，他（???）知道事情的前因后果。",
      choice: ["即使...也...","无论...都...","虽然...但是...","不是...而是...",
      ],
      answer: "即使...也...",
      explain: "文意から「たとえ〜であっても」を意味する「即使...也...」が適切"
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