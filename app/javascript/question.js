
window.addEventListener('load', function(){

  const sceneTop = document.getElementById("sceneTop");
  const sceneGame = document.getElementById("sceneGame");
  const sceneResult = document.getElementById("sceneResult");
  const textQuestion = document.getElementById("textQuestion");
  const listAnswer = document.getElementById("listAnswer");
  const showScore = document.getElementById("showScore");
  const btnStart = document.getElementById("btnStart");
  const btnReset = document.getElementById("btnReset");
  
  const question = [

    //4級
    {
      text: "请给我两（   ）纸。",
      choice: ["件", "把", "张", "个"],
      answer: "张"
    },
    {
      text: "我家（   ）学校很近。",
      choice: ["从", "离", "和", "跟"],
      answer: "离"
    },
    {
      text: "我是在大学学（   ）汉语。",
      choice: ["了","着","的","过",
      ],
      answer: "的"
    },
    {
      text: "明天我（   ）你打电话。",
      choice: ["向","往","对","给",
      ],
      answer: "把"
    },
    {
      text: "这里（   ）抽烟吗？",
      choice: ["可能","想","可以","要",
      ],
      answer: "可以"
    },
    {
      text: "快放暑假（   ）。",
      choice: ["吗","呢","的","了",
      ],
      answer: "了"
    },
    {
      text: "我（   ）去过法国。",
      choice: ["不是","没有","不","别",
      ],
      answer: "没有"
    },
    {
      text: "墙上挂（   ）一张照片。",
      choice: ["在","着","得","的",
      ],
      answer: "着"
    },
    {
      text: "你（   ）来了？",
      choice: ["再","才","就","又",
      ],
      answer: "又"
    },
    {
      text: "她（   ）没来？",
      choice: ["怎么","什么","怎么样","什么样",
      ],
      answer: "怎么"
    },

//3級

    {
      text: "我一看见日本菜（   ）想吃。",
      choice: ["再", "就", "在", "又"],
      answer: "就"
    },
    {
      text: "（   ）下星期三开始，我去食堂吃晚饭。？",
      choice: ["从", "在", "对", "离"],
      answer: "从"
    },
    {
      text: "外面正下（   ）雨呢。",
      choice: ["了","过","着","得",
      ],
      answer: "着"
    },
    {
      text: "请大家（   ）行李放在这边。",
      choice: ["被","把","要","叫",
      ],
      answer: "把"
    },
    {
      text: "大家都是老朋友，你（   ）客气。",
      choice: ["应该","不会","不想","不用",
      ],
      answer: "不用"
    },
    {
      text: "刚上车的乘客，请（   ）里走。",
      choice: ["在","给","往","从",
      ],
      answer: "往"
    },
    {
      text: "我每天早上都吃两（   ）面包，喝一杯咖啡。",
      choice: ["本","片","支","张",
      ],
      answer: "片"
    },
    {
      text: "老师（   ）同学们每天用中文写一篇日记。",
      choice: ["使","对","被","让",
      ],
      answer: "让"
    },
    {
      text: "我爷爷（   ）70 岁了，但是还在工作。",
      choice: ["虽然","应为","只要","不管",
      ],
      answer: "虽然"
    },
    {
      text: "我快要去中国留学（   ）。",
      choice: ["着","到","了","过",
      ],
      answer: "了"
    },
    //2級
    {
      text: "你今天怎么这么没（   ），哪里不舒服吗？",
      choice: ["精明","精神","神气","元气",
      ],
      answer: "精神"
    },
    {
      text: "他跟公司（   ）了，要到下周三才能来上班。",
      choice: ["请假","放假","休假","病假",
      ],
      answer: "请假"
    },
    {
      text: "今天我请客，你别（   ），想吃什么就点什么吧。",
      choice: ["大气","小气","争气","客气",
      ],
      answer: "客气"
    },
    {
      text: "你们才认识几天，你真的（   ）她的为人吗？",
      choice: ["明知","见解","了解","知情",
      ],
      answer: "了解"
    },
    {
      text: "明天路上可能会堵车，你们最好（   ）出门。",
      choice: ["先前","提前","当前","从前",
      ],
      answer: "提前"
    },
    {
      text: "这件事，她嘴上是（   ）了，但一直没有实际行动。",
      choice: ["回答","答话","答应","报答",
      ],
      answer: "答应"
    },
    {
      text: "这家店的小吃，（   ）生煎包、馄饨、烧卖什么的，我觉得味道都不错。",
      choice: ["比如","假如","如果","如此",
      ],
      answer: "比如"
    },
    {
      text: "自从爷爷用（   ）了智能手机，每天都跟我视频聊天儿。",
      choice: ["来","到","下","上",
      ],
      answer: "上"
    },
    {
      text: "他的爱好很（   ），唱歌、跳舞、画画儿、摄影等他样样都喜欢。",
      choice: ["广大","广泛","宽大","宽广",
      ],
      answer: "广泛"
    },
    {
      text: "（   ）你们都不告诉我，我（   ）知道事情的前因后果。",
      choice: ["即使...也...","无论...都...","虽然...但是...","不是...而是...",
      ],
      answer: "即使...也..."
    },
  ];

  newQuestion = [];

while (question.length > 0) {
  n = question.length;
  k = Math.floor(Math.random() * n);

  newQuestion.push(question[k]);
  question.splice(k, 1);
}

  // ゲームで使用する共通の変数です
  // answer...プレイヤーの答えと比較する、正解のテキストです
  // gameCount...プレイヤーが答えた数です
  // success...プレイヤーが答えて、正解した数です
  let state = {
    answer: "",
    gameCount: 0,
    success: 0
  };

  // ゲームをリセットする関数を書いてみましょう
  function init() {
    state.gameCount = 0;
    state.success = 0;
    changeScene(sceneResult, sceneTop);

    btnStart.addEventListener("click", gameStart, false);
  }

  // 1.トップ画面 2.ゲーム画面 3.リザルト画面
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
        false
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
  }

  // スタートボタンが押された時
  function gameStart() {
    changeScene(sceneTop, sceneGame);
    showQuestion();
    choiceQuestion();
  }

  // ゲームが終了した時
  function gameEnd() {
    changeScene(sceneGame, sceneResult);
    showScore.innerHTML = state.success;
    document.getElementById("score").setAttribute("value",state.success);
    btnReset.addEventListener("click", init, false);
  }

  // スタートボタンが押されたら、ゲームスタートの関数を
  // リセットボタンが押されたら、ゲーム終了後にゲームをリセットする関数を実行するイベントです
  init();
})();