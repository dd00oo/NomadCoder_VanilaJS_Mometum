const quote = document.querySelector("#quote");

const quotes = [
  {
    quotes:
      "장관의 목숨을 고치는 약은 없고, 돈이 있어도 자손의 현명함은 사기 어렵다.",
    author: "명심보감"
  },
  {
    quotes: "어떤 끈이라도 너무 세게 당기면 끊어진다.",
    author: "탈무드"
  },
  {
    quotes: "자세히 보아야 예쁘다. 오래 보아야 사랑스럽다. 너도 그렇다.",
    author: "나태주, 풀꽃"
  },
  {
    quotes:
      "눈에 보이는 것이나, 보이지 않는 것이나 멀리 살고 있는 것이나, 가까이 살고 있는 것이나 이미 태어난 것이나, \n앞으로 태어날 것이나 살아있는 것은 다 행복하라. 평안하라. 안락하라.",
    author: "자비경"
  },
  {
    quotes:
      "재물이 많으면 그만큼 걱정거리도 늘어나지만, 재물이 전혀없으면 걱정거리가 더 많다.",
    author: "탈무드"
  },
  {
    quotes: "항산(恒産)이 있어야 항심(恒心)이 있다.",
    author: "맹자"
  },
  {
    quotes:
      "우리는 다른 사람이 욕심을 낼 때 겁을 내려 하고, 다른 사람이 겁을 낼때만 욕심을 부리곤 한다.",
    author: "워런 버핏"
  },
  {
    quotes: "돈을 잃지 마라",
    author: "워런 버핏"
  },
  {
    quotes:
      "재물은 물처럼 공평하게 다루고, 사람 사이에서는 저울처럼 정직하라. (財上平如水, 人中直似衡)",
    author: "임상옥"
  },
  {
    quotes:
      "누군가 너에게 해악을 끼치거든 앙갚음하려 들지 말고 강가에 고요히 앉아 강물을 바라보아라. \n그럼 머지않아 그의 시체가 떠내려 올 것이다.",
    author: "노자"
  },
  {
    quotes: "외로움은 절망이 아니라 오히려 기회다.",
    author: "도가"
  },
  {
    quotes: "너희 중에 누구든지 죄 없는 사람이 먼저 저 여자를 돌로 쳐라.",
    author: "예수"
  },
  {
    quotes: "멈추어라. 너는 정말 아름답구나!",
    author: "파우스트"
  },
  {
    quotes:
      "들을 때는 들리는 것만 있게 하고, 볼 때는 보이는 것만 있게 하고, 생각할 때는 생각만 있게 하라.",
    author: "아함경"
  },
  {
    quotes:
      "한없이 즐거우면서 음(淫)하지 않고, 슬프기 그지없지만 상(傷)하지 않는다 (關雎 樂而不淫 哀而不傷)",
    author: "논어, 팔일편"
  },
  {
    quotes:
      "가장 외로운 사람이 가장 친절하고, 가장 슬픈 사람이 가장 밝게 웃는다.",
    author: "영화, <소원>"
  },
  {
    quotes: "우는 것도 일종의 쾌락이다.",
    author: "몽테뉴"
  },
  {
    quotes: "인간은 눈물을 흘림으로써 세상의 죄악을 씻어낸다. ",
    author: "도스토예프스키"
  },
  {
    quotes:
      "가장 발전한 문명사회에서도 책은 최고의 기쁨을 준다. 독서의 기쁨을 아는 자는 재난에 맞설 방편을 얻은 것이다. ",
    author: "랄프 왈도 에머슨"
  }
];

function shuffle() {
  const ranNum = Math.floor(Math.random() * quotes.length);
  const text = quotes[ranNum].quotes;
  const author = quotes[ranNum].author;
  quote.innerHTML = `${text} - ${author}`;
}

//hmtl 로드 후 호출
setTimeout(shuffle, 3000);
