const questionBank = [
  {
    category: "Healthy Choices",
    question: "Which person is trained to give advice about foods for a healthy lifestyle?",
    answers: ["Nutritionist", "Principal", "Shopkeeper"],
    correct: 0,
    hint: "This job title is connected to nutrition and balanced meals."
  },
  {
    category: "Healthy Choices",
    question: "Which activity helps someone maintain a healthy lifestyle?",
    answers: ["Eating balanced meals each day", "Watching television all night", "Skipping rest every day"],
    correct: 0,
    hint: "Look for the choice that supports the body every day."
  },
  {
    category: "Family",
    question: "Margaret lives with her grandparents, parents, and cousins. What family type is this?",
    answers: ["Nuclear", "Extended", "Single parent"],
    correct: 1,
    hint: "This family includes relatives beyond parents and children."
  },
  {
    category: "Family",
    question: "A family is most likely to remain united when members do what?",
    answers: ["Refuse responsibility", "Are disrespectful", "Complete tasks as given"],
    correct: 2,
    hint: "Unity grows when people help and take responsibility."
  },
  {
    category: "Rights",
    question: "Ramon does not want his school bag searched every day. Which right is he protecting?",
    answers: ["Privacy", "Weather", "Migration"],
    correct: 0,
    hint: "This right is about personal space and belongings."
  },
  {
    category: "Citizenship",
    question: "A community rule that sets time limits for loud music mainly helps to create what?",
    answers: ["Order", "Migration", "A new island"],
    correct: 0,
    hint: "Rules help people live together peacefully."
  },
  {
    category: "Culture",
    question: "The Caribbean is called multicultural because people from many backgrounds do what?",
    answers: ["Live in the region", "All eat the same food", "Only speak one language"],
    correct: 0,
    hint: "Think about different groups sharing one region."
  },
  {
    category: "Culture",
    question: "Diwali, the festival of lights, is associated with ancestors from where?",
    answers: ["East India", "Europe", "North America"],
    correct: 0,
    hint: "The files connect Diwali with East Indian heritage."
  },
  {
    category: "History",
    question: "Which group was already living in Caribbean islands when Europeans arrived?",
    answers: ["Africans", "Amerindians", "Asians"],
    correct: 1,
    hint: "They are also called Indigenous people of the Caribbean."
  },
  {
    category: "History",
    question: "One reason European ancestors came to the Caribbean was to do what?",
    answers: ["Seek wealth", "Avoid all trade", "Become younger"],
    correct: 0,
    hint: "Think about exploration, land, trade, and resources."
  },
  {
    category: "Resources",
    question: "Which resource is renewable?",
    answers: ["Crude oil", "Bauxite", "Forest"],
    correct: 2,
    hint: "A renewable resource can regrow or be replaced naturally if managed well."
  },
  {
    category: "Environment",
    question: "A student in an environmental club is most likely to do which activity?",
    answers: ["Create a compost heap", "Burn plastic containers", "Waste clean water"],
    correct: 0,
    hint: "Choose the action that helps the environment."
  },
  {
    category: "Geography",
    question: "Which body of water is strongly connected to the Caribbean region?",
    answers: ["The Caribbean Sea", "The Nile River", "The Arctic Ocean"],
    correct: 0,
    hint: "The answer is in the region's name."
  },
  {
    category: "Weather",
    question: "Which instrument is used to measure temperature?",
    answers: ["Thermometer", "Anemometer", "Barometer"],
    correct: 0,
    hint: "It often has degrees marked on it."
  },
  {
    category: "Government",
    question: "In a republic, citizens vote for a head of state called a what?",
    answers: ["President", "Governor General", "Chief Minister"],
    correct: 0,
    hint: "The files contrast a republic with a constitutional monarchy."
  },
  {
    category: "Community",
    question: "Mr. Francis repairs a neighbour's damaged chicken coop. What quality does he show?",
    answers: ["Neighbourliness", "Favouritism", "Carelessness"],
    correct: 0,
    hint: "He helps someone in his community."
  },
  {
    category: "Safety",
    question: "Which home rule helps keep young children safe?",
    answers: ["Never leave a child unattended", "Always play loud music", "Ignore chores"],
    correct: 0,
    hint: "The safe rule protects a child when adults are away."
  },
  {
    category: "Religion",
    year: "2022",
    question: "Question refers to the image. Miriam worships in this building. She is most likely a what?",
    image: "assets/question-images/2022/2022-image-01.png",
    imageAlt: "Exact house of worship image extracted from the CV question.",
    answers: ["Muslim", "Hindu", "Christian"],
    correct: 0,
    hint: "The crescent and dome are often connected with a mosque."
  },
  {
    category: "Family",
    year: "2022",
    question: "Question refers to the family tree. If Nina lives with Andy, Emma, Liz, and Laura, what family type is shown?",
    image: "assets/question-images/2022/2022-image-03.png",
    imageAlt: "Exact family tree image extracted from the CV question.",
    answers: ["Single", "Nuclear", "Extended"],
    correct: 2,
    hint: "Nina lives with relatives beyond only parents and children."
  },
  {
    category: "Geography",
    year: "2022",
    question: "Question refers to the map. Which body of water is labelled B?",
    image: "assets/question-images/2022/2022-image-02.png",
    imageAlt: "Exact Caribbean map image extracted from the CV question.",
    answers: ["Gulf of Mexico", "Caribbean Sea", "Atlantic Ocean"],
    correct: 1,
    hint: "The label points to the sea inside the Caribbean region."
  },
  {
    category: "Geography",
    year: "2025",
    question: "Question refers to the image. Which direction is opposite East?",
    image: "assets/question-images/2025/2025-image-07.png",
    imageAlt: "Exact compass image extracted from the CV question.",
    answers: ["West", "North", "South"],
    correct: 0,
    hint: "On a compass, East and West are on opposite sides."
  },
  {
    category: "Citizenship",
    year: "2021",
    question: "Question refers to the image. What characteristic is the citizens' creed promoting?",
    image: "assets/question-images/2021/2021-image-03.png",
    imageAlt: "Exact citizens' creed image extracted from the CV question.",
    answers: ["Neighbourliness", "Carelessness", "Favouritism"],
    correct: 0,
    hint: "The creed asks citizens to care for, help, and cooperate with each other."
  },
  {
    category: "Safety",
    year: "2024",
    question: "Question refers to the report. Which home rule could have prevented this action?",
    image: "assets/question-images/2024/2024-image-01.png",
    imageAlt: "Exact report image extracted from the CV question.",
    answers: ["Never leave a child unattended", "Always play loud music", "Ignore young children"],
    correct: 0,
    hint: "The safest rule is about making sure a child is supervised."
  },
  {
    category: "Environment",
    year: "2024",
    question: "Question refers to the image. What action does this symbol remind people to do?",
    image: "assets/question-images/2024/2024-image-07.png",
    imageAlt: "Exact recycling symbol image extracted from the CV question.",
    answers: ["Recycle materials", "Burn plastic", "Waste paper"],
    correct: 0,
    hint: "The three arrows are a common recycling symbol."
  },
  {
    category: "Resources",
    year: "2023",
    question: "Question refers to the chart. Which resource is being compared among the countries?",
    image: "assets/question-images/2023/2023-image-06.png",
    imageAlt: "Exact forest cover chart image extracted from the CV question.",
    answers: ["Forest cover", "Night noise", "Family size"],
    correct: 0,
    hint: "Read the chart title above the bars."
  },
  {
    category: "Groups",
    year: "2025",
    question: "Question refers to the diagram. What group skill is shown with empathy, teamwork, and problem-solving?",
    image: "assets/question-images/2025/2025-image-04.jpeg",
    imageAlt: "Exact teamwork diagram image extracted from the CV question.",
    answers: ["Life skills", "Weather tools", "Food groups"],
    correct: 0,
    hint: "The diagram names skills people use to work well with others."
  },
  {
    category: "Community",
    year: "2017",
    question: "Question refers to the image. What may happen if these workers do not do their job?",
    image: "assets/question-images/2017/2017-image-01.jpeg",
    imageAlt: "Exact community workers image extracted from the CV question.",
    answers: ["Outbreak of diseases", "More rainfall", "Less sunshine"],
    correct: 0,
    hint: "The workers help keep the community clean and healthy."
  },
  {
    category: "Groups",
    year: "2017",
    question: "Question refers to the chart. What type of group does this structure best represent?",
    image: "assets/question-images/2017/2017-image-02.png",
    imageAlt: "Exact group structure chart extracted from the CV question.",
    answers: ["Formal", "Peer", "Informal"],
    correct: 0,
    hint: "The chart shows official positions such as chairperson, secretary, and treasurer."
  },
  {
    category: "Environment",
    year: "2018",
    question: "Question refers to the image. Which environmental action does the symbol show?",
    image: "assets/question-images/2018/2018-image-03.png",
    imageAlt: "Exact recycling symbol extracted from the CV question.",
    answers: ["Recycling", "Deforestation", "Noise pollution"],
    correct: 0,
    hint: "The arrows move in a cycle, which is linked to reuse and recycling."
  },
  {
    category: "Family",
    year: "2025",
    question: "Question refers to the family tree. How many generations are shown?",
    image: "assets/question-images/2025/2025-image-02.png",
    imageAlt: "Exact family tree image extracted from the CV question.",
    answers: ["Two", "Three", "Four"],
    correct: 1,
    hint: "Count grandparents, their children, and the children at the bottom."
  },
  {
    category: "Culture",
    year: "2025",
    question: "Question refers to the table. Which ethnic group has the highest percentage?",
    image: "assets/question-images/2025/2025-image-03.png",
    imageAlt: "Exact ethnic group table image extracted from the CV question.",
    answers: ["African", "Chinese", "Other races"],
    correct: 0,
    hint: "Look for the largest number in the percentage column."
  },
  {
    category: "Map Skills",
    year: "2024",
    question: "Question refers to the map. Which letter marks the eastern side of the Caribbean area shown?",
    image: "assets/question-images/2024/2024-image-05.png",
    imageAlt: "Exact Caribbean map image extracted from the CV question.",
    answers: ["Z", "X", "Y"],
    correct: 0,
    hint: "East is to the right side of most maps."
  },
  {
    category: "Inclusion",
    year: "2024",
    question: "Question refers to the image. What does this symbol show?",
    image: "assets/question-images/2024/2024-image-04.png",
    imageAlt: "Exact accessibility symbol extracted from the CV question.",
    answers: ["Access for persons with disabilities", "A weather station", "A national flag"],
    correct: 0,
    hint: "The wheelchair symbol is used to show accessible spaces and services."
  },
  {
    category: "Map Skills",
    year: "2019",
    question: "Question refers to the map. Which region is shown?",
    image: "assets/question-images/2019/2019-image-07.png",
    imageAlt: "Exact Caribbean map image extracted from the CV question.",
    answers: ["The Caribbean", "The Arctic", "The Sahara"],
    correct: 0,
    hint: "The map shows islands and nearby mainland around the Caribbean Sea."
  },
  {
    category: "Work",
    year: "2019",
    question: "Question refers to the image. Which type of clothing is the person wearing?",
    image: "assets/question-images/2019/2019-image-04.png",
    imageAlt: "Exact worker image extracted from the CV question.",
    answers: ["Business clothing", "Beach clothing", "Sports uniform"],
    correct: 0,
    hint: "The person is wearing a suit and carrying a briefcase."
  },
  {
    category: "Map Skills",
    year: "2020",
    question: "Question refers to the map. Which region is being studied?",
    image: "assets/question-images/2020/2020-image-01.png",
    imageAlt: "Exact Caribbean map image extracted from the CV question.",
    answers: ["Caribbean region", "European region", "Pacific region"],
    correct: 0,
    hint: "The map shows Caribbean islands and surrounding water."
  }
];

let deck = [];
let currentIndex = 0;
let coins = 0;
let streak = 0;
let selectedYear = "";
let soundOn = true;
let answered = false;
let audioContext;
const earnedCategories = new Set();
let answerLog = [];

const screens = {
  start: document.querySelector("#startScreen"),
  game: document.querySelector("#gameScreen"),
  end: document.querySelector("#endScreen")
};

const els = {
  startBtn: document.querySelector("#startBtn"),
  yearChoices: document.querySelector("#yearChoices"),
  soundBtn: document.querySelector("#soundBtn"),
  calmBtn: document.querySelector("#calmBtn"),
  playAgainBtn: document.querySelector("#playAgainBtn"),
  chooseYearBtn: document.querySelector("#chooseYearBtn"),
  hintBtn: document.querySelector("#hintBtn"),
  nextBtn: document.querySelector("#nextBtn"),
  score: document.querySelector("#score"),
  streak: document.querySelector("#streak"),
  roundNow: document.querySelector("#roundNow"),
  roundTotal: document.querySelector("#roundTotal"),
  progressBar: document.querySelector("#progressBar"),
  category: document.querySelector("#category"),
  badge: document.querySelector("#badge"),
  questionText: document.querySelector("#questionText"),
  imageFrame: document.querySelector("#imageFrame"),
  questionImage: document.querySelector("#questionImage"),
  answers: document.querySelector("#answers"),
  feedback: document.querySelector("#feedback"),
  endTitle: document.querySelector("#endTitle"),
  endMessage: document.querySelector("#endMessage"),
  resultStats: document.querySelector("#resultStats"),
  badgeShelf: document.querySelector("#badgeShelf"),
  reviewList: document.querySelector("#reviewList")
};

function showScreen(name) {
  Object.values(screens).forEach((screen) => screen.classList.add("hidden"));
  screens[name].classList.remove("hidden");
}

function fullYearTests() {
  return typeof fullTestsByYear === "undefined" ? {} : fullTestsByYear;
}

function availableYears() {
  const tests = fullYearTests();
  const years = Object.keys(tests).filter((year) => tests[year].length > 0);
  if (years.length) return years.sort();
  return [...new Set(questionBank.filter((question) => question.image && question.year).map((question) => question.year))].sort();
}

function renderYearChoices() {
  els.yearChoices.innerHTML = "";
  availableYears().forEach((year) => {
    const tests = fullYearTests();
    const count = tests[year] ? tests[year].length : questionBank.filter((question) => question.year === year).length;
    const button = document.createElement("button");
    button.className = "year-choice";
    button.type = "button";
    button.textContent = `${year} (${count}/50)`;
    button.disabled = count < 50;
    if (count < 50) {
      button.title = "This source file did not expose all 50 questions during extraction.";
    }
    button.setAttribute("aria-pressed", year === selectedYear ? "true" : "false");
    button.addEventListener("click", () => chooseYear(year));
    els.yearChoices.append(button);
  });
}

function chooseYear(year) {
  const tests = fullYearTests();
  if (tests[year] && tests[year].length < 50) return;
  selectedYear = year;
  els.startBtn.disabled = false;
  els.startBtn.textContent = `Start ${year} Quest`;
  renderYearChoices();
  playTone("hint");
}

function getAudioContext() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioContext;
}

function playTone(type) {
  if (!soundOn) return;
  const ctx = getAudioContext();
  const notes = {
    correct: [523.25, 659.25, 783.99],
    wrong: [196, 164.81],
    hint: [392, 440],
    select: [440, 554.37],
    finish: [523.25, 659.25, 783.99, 1046.5]
  }[type];

  notes.forEach((frequency, index) => {
    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();
    oscillator.type = type === "wrong" ? "square" : "sine";
    oscillator.frequency.value = frequency;
    oscillator.connect(gain);
    gain.connect(ctx.destination);
    const start = ctx.currentTime + index * 0.09;
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(0.18, start + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.16);
    oscillator.start(start);
    oscillator.stop(start + 0.18);
  });
}

function startGame() {
  if (!selectedYear) return;
  const tests = fullYearTests();
  const yearQuestions = tests[selectedYear] && tests[selectedYear].length
    ? tests[selectedYear]
    : questionBank.filter((question) => question.year === selectedYear);
  deck = [...yearQuestions]
    .sort((a, b) => (a.number || 0) - (b.number || 0))
    .slice(0, 50);
  currentIndex = 0;
  coins = 0;
  streak = 0;
  answerLog = [];
  earnedCategories.clear();
  els.roundTotal.textContent = deck.length;
  showScreen("game");
  renderQuestion();
}

function renderQuestion() {
  const item = deck[currentIndex];
  answered = false;
  els.roundNow.textContent = item.number || currentIndex + 1;
  els.score.textContent = coins;
  els.streak.textContent = streak;
  els.progressBar.style.width = `${(currentIndex / deck.length) * 100}%`;
  els.category.textContent = item.category;
  els.badge.textContent = "Focus ready";
  els.questionText.textContent = item.question;
  if (item.image) {
    els.questionImage.src = item.image;
    els.questionImage.alt = item.imageAlt || "Question image";
    els.imageFrame.classList.remove("hidden");
  } else {
    els.questionImage.removeAttribute("src");
    els.questionImage.alt = "";
    els.imageFrame.classList.add("hidden");
  }
  els.feedback.textContent = "Choose the best answer.";
  els.nextBtn.classList.add("hidden");
  els.hintBtn.disabled = false;
  els.answers.innerHTML = "";

  item.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer";
    button.type = "button";
    button.textContent = `${String.fromCharCode(65 + index)}. ${answer}`;
    button.addEventListener("click", () => chooseAnswer(index, button));
    els.answers.append(button);
  });
}

function chooseAnswer(index, button) {
  if (answered) return;
  answered = true;
  const item = deck[currentIndex];
  const buttons = [...document.querySelectorAll(".answer")];
  buttons.forEach((answerButton) => {
    answerButton.disabled = true;
  });
  button.classList.add("selected");
  answerLog.push({
    questionNumber: item.number || currentIndex + 1,
    category: item.category,
    question: item.question,
    image: item.image,
    imageAlt: item.imageAlt,
    selectedAnswer: item.answers[index],
    correctAnswer: item.answers[item.correct],
    explanation: item.hint,
    isCorrect: index === item.correct
  });

  if (index === item.correct) {
    streak += 1;
    const earnedCoins = 10 + Math.min(streak * 2, 10);
    coins += earnedCoins;
    earnedCategories.add(item.category);
    button.classList.add("correct");
    els.feedback.textContent = `Correct. You earned ${earnedCoins} coins.`;
    playTone("correct");
  } else {
    streak = 0;
    coins = Math.max(0, coins - 5);
    button.classList.add("wrong");
    buttons[item.correct].classList.add("correct");
    els.feedback.textContent = `Incorrect. You lost 5 coins. The correct answer is ${item.answers[item.correct]}.`;
    document.querySelector(".question-panel").classList.add("shake");
    setTimeout(() => document.querySelector(".question-panel").classList.remove("shake"), 300);
    playTone("wrong");
  }

  els.score.textContent = coins;
  els.streak.textContent = streak;
  els.badge.textContent = "Answer locked";
  els.progressBar.style.width = `${((currentIndex + 1) / deck.length) * 100}%`;
  els.nextBtn.classList.remove("hidden");
}

function showHint() {
  if (answered) return;
  const item = deck[currentIndex];
  els.feedback.textContent = `Hint: ${item.hint}`;
  els.hintBtn.disabled = true;
  playTone("hint");
}

function nextQuestion() {
  if (!answered) return;
  currentIndex += 1;
  if (currentIndex >= deck.length) {
    finishGame();
  } else {
    renderQuestion();
  }
}

function finishGame() {
  showScreen("end");
  playTone("finish");
  const correctCount = answerLog.filter((answer) => answer.isCorrect).length;
  const missedAnswers = answerLog.filter((answer) => !answer.isCorrect);
  const percent = Math.round((correctCount / deck.length) * 100);
  const title = percent >= 80 ? "Island expert!" : percent >= 50 ? "Quest complete!" : "Practice round complete!";
  els.endTitle.textContent = title;
  els.endMessage.textContent = `${selectedYear} test: You answered ${correctCount} out of ${deck.length} correctly and finished with ${coins} coins.`;
  els.resultStats.innerHTML = "";
  [
    ["Correct", correctCount],
    ["Review", missedAnswers.length],
    ["Coins", coins]
  ].forEach(([label, value]) => {
    const stat = document.createElement("div");
    stat.className = "result-stat";
    stat.innerHTML = `<span>${label}</span><strong>${value}</strong>`;
    els.resultStats.append(stat);
  });
  els.badgeShelf.innerHTML = "";
  els.reviewList.innerHTML = "";

  const categories = earnedCategories.size ? [...earnedCategories] : ["Focus Builder"];
  categories.forEach((category) => {
    const badge = document.createElement("div");
    badge.className = "earned-badge";
    badge.textContent = `${category} Badge`;
    els.badgeShelf.append(badge);
  });

  if (missedAnswers.length === 0) {
    const perfect = document.createElement("div");
    perfect.className = "review-card";
    perfect.textContent = "No missed questions. Excellent work.";
    els.reviewList.append(perfect);
    return;
  }

  missedAnswers.forEach((answer, index) => {
    const card = document.createElement("article");
    card.className = "review-card";
    const imageMarkup = answer.image
      ? `<figure class="review-image-frame"><img src="${answer.image}" alt="${answer.imageAlt || "Reviewed question image"}"></figure>`
      : "";
    card.innerHTML = `
      <span class="review-count">Question ${answer.questionNumber}</span>
      <h4>${answer.question}</h4>
      ${imageMarkup}
      <p><strong>Your answer:</strong> ${answer.selectedAnswer}</p>
      <p><strong>Correct answer:</strong> ${answer.correctAnswer}</p>
      <p><strong>Review tip:</strong> ${answer.explanation}</p>
    `;
    els.reviewList.append(card);
  });
}

els.startBtn.addEventListener("click", startGame);
els.playAgainBtn.addEventListener("click", startGame);
els.chooseYearBtn.addEventListener("click", () => showScreen("start"));
els.hintBtn.addEventListener("click", showHint);
els.nextBtn.addEventListener("click", nextQuestion);

els.soundBtn.addEventListener("click", () => {
  soundOn = !soundOn;
  els.soundBtn.textContent = soundOn ? "Sound On" : "Sound Off";
  if (soundOn) playTone("hint");
});

els.calmBtn.addEventListener("click", () => {
  document.body.classList.toggle("calm");
  els.calmBtn.textContent = document.body.classList.contains("calm") ? "Motion Off" : "Calm";
});

document.addEventListener("keydown", (event) => {
  if (screens.game.classList.contains("hidden")) return;
  if (["1", "2", "3"].includes(event.key) && !answered) {
    const button = document.querySelectorAll(".answer")[Number(event.key) - 1];
    if (button) button.click();
  }
  if (event.key === "Enter" && answered) {
    nextQuestion();
  }
  if (event.key.toLowerCase() === "h") {
    showHint();
  }
});

renderYearChoices();
