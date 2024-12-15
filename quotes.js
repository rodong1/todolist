const quotes = [
  {
    quote: "선배라면 입을닫고 지갑을 열어라",
    author: "-박명수-",
  },
  {
    quote: "일찍얼어나는 새가 피곤하다.",
    author: "-박명수-",
  },
  {
    quote: "살은 운동으로 빼는 것이다.",
    author: "-백종원-",
  },
  {
    quote: "위험은 자신이 무엇을 하고 있는지 모르는것에서 온다",
    author: "-워렌 버핏-",
  },
  {
    quote:
      "만약 당신이 변화를 두려워한다면, 계속 지금처럼 살면 된다. 하지만 변화에 대한 두려움은 언제나 후회로 바뀐다.",
    author: "-스티브잡스-",
  },
  {
    quote: "정말 중요한것이라면 승산이 없더라도 그일을 계속해야하는겁니다",
    author: "-일론머스크-",
  },
  {
    quote: "지옥처럼 일하라 하찮은 일은 없다.",
    author: "-일론 머스크-",
  },
  {
    quote: "본인이 재능이 있다고 생각하고 근거없는 자신감으로 무장하세요.",
    author: "-봉준호-",
  },
  {
    quote: "내가 숲속에 있는데 어떻게 나무를 안보고 숲을보나",
    author: "-유병재-",
  },
  {
    quote: "듣는 순간 기분나쁜말 기분 나빠하지말고 들어",
    author: "-유병재-",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todayquotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayquotes.quote;
author.innerText = todayquotes.author;
