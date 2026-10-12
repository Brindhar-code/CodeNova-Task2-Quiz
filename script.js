const categories = {
  tech: {
    name: "Tech & Coding",
    icon: "💻",
    questions: [
      { q: "Which language is mainly used to structure web pages?", options: ["Python", "HTML", "SQL", "C"], answer: 1, hint: "It uses tags such as <h1> and <p>.", explanation: "HTML defines the structure and content of web pages.", difficulty: "Easy" },
      { q: "Which keyword declares a block-scoped variable in JavaScript?", options: ["define", "dim", "let", "print"], answer: 2, hint: "It has three letters and starts with l.", explanation: "The let keyword declares a block-scoped variable.", difficulty: "Easy" },
      { q: "Which data structure follows FIFO?", options: ["Stack", "Queue", "Tree", "Graph"], answer: 1, hint: "The first item added leaves first.", explanation: "A queue follows First In, First Out.", difficulty: "Easy" },
      { q: "What is the average lookup time in a well-distributed hash table?", options: ["O(n)", "O(log n)", "O(1)", "O(n²)"], answer: 2, hint: "It is constant time on average.", explanation: "Hash tables provide average-case O(1) lookup.", difficulty: "Medium" },
      { q: "Which protocol securely encrypts web traffic?", options: ["HTTP", "FTP", "HTTPS", "SMTP"], answer: 2, hint: "Look for the secure version of HTTP.", explanation: "HTTPS uses TLS to protect data in transit.", difficulty: "Easy" },
      { q: "Which SQL command retrieves data?", options: ["SELECT", "INSERT", "DELETE", "UPDATE"], answer: 0, hint: "It asks a database to return records.", explanation: "SELECT retrieves rows from database tables.", difficulty: "Easy" },
      { q: "What does API stand for?", options: ["Applied Program Internet", "Application Programming Interface", "Advanced Processing Input", "Automated Program Integration"], answer: 1, hint: "It lets software systems communicate.", explanation: "An API defines how software components interact.", difficulty: "Medium" },
      { q: "Which Git command creates a new branch?", options: ["git push", "git status", "git branch branch-name", "git clone"], answer: 2, hint: "Use the command whose name matches the concept.", explanation: "git branch followed by a name creates a branch.", difficulty: "Medium" },
      { q: "Which Python collection is immutable?", options: ["List", "Dictionary", "Set", "Tuple"], answer: 3, hint: "It is often written with parentheses.", explanation: "A tuple cannot have its elements reassigned after creation.", difficulty: "Medium" },
      { q: "What is the worst-case time complexity of binary search?", options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"], answer: 1, hint: "The search space is halved each step.", explanation: "Binary search takes logarithmic time on sorted data.", difficulty: "Hard" }
    ]
  },
  gk: {
    name: "General Knowledge",
    icon: "🌍",
    questions: [
      { q: "What is the capital of Japan?", options: ["Seoul", "Tokyo", "Beijing", "Bangkok"], answer: 1, hint: "It hosted the 2020 Summer Olympics.", explanation: "Tokyo is the capital of Japan.", difficulty: "Easy" },
      { q: "Which is the largest ocean on Earth?", options: ["Atlantic", "Indian", "Pacific", "Arctic"], answer: 2, hint: "It lies between Asia and the Americas.", explanation: "The Pacific Ocean is the largest ocean.", difficulty: "Easy" },
      { q: "How many days are there in a leap year?", options: ["364", "365", "366", "367"], answer: 2, hint: "February has one extra day.", explanation: "A leap year has 366 days.", difficulty: "Easy" },
      { q: "Which Indian city is known as the Pink City?", options: ["Mumbai", "Jaipur", "Chennai", "Kochi"], answer: 1, hint: "It is the capital of Rajasthan.", explanation: "Jaipur is popularly known as the Pink City.", difficulty: "Easy" },
      { q: "Which is the largest planet in our solar system?", options: ["Earth", "Saturn", "Jupiter", "Neptune"], answer: 2, hint: "It is a gas giant with a Great Red Spot.", explanation: "Jupiter is the largest planet in the solar system.", difficulty: "Easy" },
      { q: "What is the currency of Japan?", options: ["Won", "Yuan", "Yen", "Ringgit"], answer: 2, hint: "Its name begins with Y.", explanation: "Japan uses the yen.", difficulty: "Easy" },
      { q: "Which organisation publishes the Human Development Report?", options: ["UNDP", "WHO", "UNESCO", "WTO"], answer: 0, hint: "It is the UN Development Programme.", explanation: "The United Nations Development Programme publishes the report.", difficulty: "Medium" },
      { q: "Which is the smallest continent by land area?", options: ["Europe", "Australia", "South America", "Antarctica"], answer: 1, hint: "It is also a country.", explanation: "Australia is commonly identified as the smallest continent.", difficulty: "Medium" },
      { q: "Who wrote the Indian national anthem?", options: ["Subramania Bharati", "Rabindranath Tagore", "Sarojini Naidu", "Bankim Chandra Chatterjee"], answer: 1, hint: "He was a Nobel Prize-winning poet.", explanation: "Rabindranath Tagore wrote Jana Gana Mana.", difficulty: "Medium" },
      { q: "Which body elects the President of India?", options: ["Only the Lok Sabha", "Only the Rajya Sabha", "An electoral college", "The Supreme Court"], answer: 2, hint: "It includes elected MPs and elected MLAs.", explanation: "An electoral college elects the President of India.", difficulty: "Hard" }
    ]
  },
  science: {
    name: "Science",
    icon: "🔬",
    questions: [
      { q: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Mercury", "Jupiter"], answer: 1, hint: "Its surface contains iron-rich dust.", explanation: "Iron oxides give Mars its reddish appearance.", difficulty: "Easy" },
      { q: "What is the chemical formula for water?", options: ["CO₂", "O₂", "H₂O", "NaCl"], answer: 2, hint: "It contains hydrogen and oxygen.", explanation: "Each water molecule has two hydrogen atoms and one oxygen atom.", difficulty: "Easy" },
      { q: "What force pulls objects toward Earth?", options: ["Friction", "Gravity", "Magnetism", "Tension"], answer: 1, hint: "It keeps us on the ground.", explanation: "Gravity attracts objects with mass toward one another.", difficulty: "Easy" },
      { q: "Which organ pumps blood through the human body?", options: ["Lungs", "Brain", "Heart", "Kidneys"], answer: 2, hint: "It beats continuously.", explanation: "The heart pumps blood through the circulatory system.", difficulty: "Easy" },
      { q: "What is the approximate speed of light in a vacuum?", options: ["300,000 km/s", "30 km/s", "3,000 km/s", "30 million km/s"], answer: 0, hint: "It is about three hundred thousand kilometres per second.", explanation: "Light travels at approximately 300,000 km/s in a vacuum.", difficulty: "Medium" },
      { q: "Which gas do plants absorb during photosynthesis?", options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"], answer: 2, hint: "It is a greenhouse gas with formula CO₂.", explanation: "Plants use carbon dioxide, water and light to make sugars.", difficulty: "Easy" },
      { q: "What is the SI unit of electric current?", options: ["Volt", "Watt", "Ohm", "Ampere"], answer: 3, hint: "It is named after André-Marie Ampère.", explanation: "The ampere is the SI unit of electric current.", difficulty: "Medium" },
      { q: "Which part of a cell contains most of its genetic material?", options: ["Nucleus", "Cell membrane", "Cytoplasm", "Ribosome"], answer: 0, hint: "It is often called the cell's control centre.", explanation: "In eukaryotic cells, most DNA is found in the nucleus.", difficulty: "Easy" },
      { q: "What is the pH of a neutral solution at about 25°C?", options: ["0", "5", "7", "14"], answer: 2, hint: "It is halfway between the ends of the usual pH scale.", explanation: "A neutral aqueous solution has a pH of approximately 7 at 25°C.", difficulty: "Medium" },
      { q: "Which principle explains why a ship floats?", options: ["Ohm's law", "Archimedes' principle", "Newton's third law only", "Boyle's law"], answer: 1, hint: "It involves the buoyant force from displaced fluid.", explanation: "Archimedes' principle relates buoyancy to the displaced fluid's weight.", difficulty: "Hard" }
    ]
  },
  cyber: {
    name: "Cybersecurity",
    icon: "🛡️",
    questions: [
      { q: "What is phishing?", options: ["A programming language", "A trick to steal sensitive information", "A type of monitor", "A backup method"], answer: 1, hint: "It often arrives as a fake email or message.", explanation: "Phishing uses deceptive messages or websites to steal information.", difficulty: "Easy" },
      { q: "Which password is generally the strongest?", options: ["12345678", "password", "Brindha123", "A long unique passphrase"], answer: 3, hint: "Length and uniqueness are important.", explanation: "A long, unique password or passphrase is harder to guess.", difficulty: "Easy" },
      { q: "What does MFA stand for?", options: ["Multi-Factor Authentication", "Main File Access", "Multiple Firewall Application", "Managed File Algorithm"], answer: 0, hint: "It adds another verification step to login.", explanation: "MFA uses two or more different types of verification.", difficulty: "Easy" },
      { q: "What is the main purpose of a firewall?", options: ["Increase screen brightness", "Filter network traffic", "Edit images", "Write code"], answer: 1, hint: "It controls incoming and outgoing network connections.", explanation: "A firewall filters network traffic according to security rules.", difficulty: "Easy" },
      { q: "Why should software updates be installed?", options: ["Only to change icons", "To fix bugs and security vulnerabilities", "To remove all passwords", "To disable backups"], answer: 1, hint: "Updates often patch known weaknesses.", explanation: "Updates can fix vulnerabilities and improve reliability.", difficulty: "Easy" },
      { q: "What does HTTPS help protect?", options: ["Data in transit", "A laptop from physical theft", "Every file from deletion", "All websites from scams"], answer: 0, hint: "It encrypts communication between browser and server.", explanation: "HTTPS helps protect data exchanged between a browser and server.", difficulty: "Medium" },
      { q: "What is ransomware?", options: ["A spreadsheet", "Malware that demands payment", "A browser extension for accessibility", "A network cable"], answer: 1, hint: "It may lock or encrypt files.", explanation: "Ransomware typically blocks access to data and demands a ransom.", difficulty: "Medium" },
      { q: "What is the principle of least privilege?", options: ["Give everyone administrator access", "Give only the access needed for a task", "Never use passwords", "Share accounts with teammates"], answer: 1, hint: "Users should receive only necessary permissions.", explanation: "Least privilege limits access to what is required for a role.", difficulty: "Medium" },
      { q: "What is a hash commonly used for in security?", options: ["Recovering the original password directly", "Creating a fixed-length digest", "Increasing internet speed", "Encrypting all network traffic"], answer: 1, hint: "It is a one-way transformation used for integrity checks.", explanation: "Cryptographic hashes produce digests useful for integrity verification and password storage schemes.", difficulty: "Medium" },
      { q: "What should you do with a suspicious attachment from an unknown sender?", options: ["Open it immediately", "Forward it to everyone", "Avoid opening it and report it", "Disable your security software"], answer: 2, hint: "Do not interact with unexpected files.", explanation: "Avoid opening suspicious attachments and report them through an appropriate channel.", difficulty: "Easy" }
    ]
  }
};

const $ = (selector) => document.querySelector(selector);

const screens = {
  home: $("#homeScreen"),
  quiz: $("#quizScreen"),
  result: $("#resultScreen")
};

let selectedCategory = "tech";
let questions = [];
let questionIndex = 0;
let score = 0;
let timeLeft = 0;
let timerId = null;
let questionAnswered = false;
let hintsUsed = 0;
let correctCount = 0;
let soundEnabled = true;
let quizFinished = false;

function showScreen(screenName) {
  Object.values(screens).forEach((screen) => screen.classList.add("hidden"));
  screens[screenName].classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function selectCategory(category) {
  if (!categories[category]) return;
  selectedCategory = category;

  document.querySelectorAll(".category-card").forEach((card) => {
    const selected = card.dataset.category === category;
    card.classList.toggle("selected", selected);
    card.setAttribute("aria-pressed", String(selected));
  });

  const best = getBestScore(category);
  $("#bestScore").textContent = `${best}%`;
}

function getBestScore(category) {
  try {
    return Number(localStorage.getItem(`quiznova-best-${category}`)) || 0;
  } catch {
    return 0;
  }
}

function saveBestScore(category, percentage) {
  try {
    const previous = getBestScore(category);
    if (percentage > previous) {
      localStorage.setItem(`quiznova-best-${category}`, String(percentage));
    }
  } catch {
    // The quiz can still work if browser storage is unavailable.
  }
}

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function startQuiz() {
  clearInterval(timerId);
  quizFinished = false;

  const category = categories[selectedCategory];
  const difficulty = $("#difficulty").value;
  const requestedCount = Number($("#questionCount").value);

  let pool = category.questions;
  if (difficulty !== "All") {
    const filtered = pool.filter((question) => question.difficulty === difficulty);
    // If there are too few questions at this level, use all questions in the category.
    pool = filtered.length ? filtered : pool;
  }

  questions = shuffle(pool).slice(0, Math.min(requestedCount, pool.length));
  if (!questions.length) return;

  questionIndex = 0;
  score = 0;
  correctCount = 0;
  hintsUsed = 0;
  timeLeft = Number($("#timeLimit").value);
  questionAnswered = false;

  $("#quizCategory").textContent = `${category.icon} ${category.name}`;
  $("#quizScore").textContent = "0";
  $("#hintText").textContent = "";
  $("#feedback").textContent = "";
  $("#nextBtn").textContent = "Next question →";

  showScreen("quiz");
  renderQuestion();
  updateTimer();
  timerId = setInterval(tick, 1000);
}

function renderQuestion() {
  if (questionIndex >= questions.length) {
    finishQuiz();
    return;
  }

  questionAnswered = false;
  const question = questions[questionIndex];

  $("#questionNumber").textContent = `Question ${questionIndex + 1} of ${questions.length}`;
  $("#difficultyBadge").textContent = question.difficulty;
  $("#questionText").textContent = question.q;
  $("#progressBar").style.width = `${(questionIndex / questions.length) * 100}%`;
  $("#hintText").textContent = "";
  $("#feedback").textContent = "";
  $("#feedback").className = "feedback";
  $("#nextBtn").disabled = true;
  $("#nextBtn").textContent = questionIndex === questions.length - 1
    ? "See results →"
    : "Next question →";

  const optionsContainer = $("#options");
  optionsContainer.replaceChildren();

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "option-btn";
    button.type = "button";
    button.innerHTML = `<span class="option-letter">${String.fromCharCode(65 + index)}</span><span></span>`;
    button.lastElementChild.textContent = option;
    button.addEventListener("click", () => chooseAnswer(index));
    optionsContainer.appendChild(button);
  });
}

function chooseAnswer(selectedIndex) {
  if (questionAnswered || quizFinished) return;
  questionAnswered = true;

  const question = questions[questionIndex];
  const buttons = [...$("#options").querySelectorAll(".option-btn")];
  const isCorrect = selectedIndex === question.answer;

  buttons.forEach((button, index) => {
    button.disabled = true;
    if (index === question.answer) button.classList.add("correct");
    if (index === selectedIndex && !isCorrect) button.classList.add("incorrect");
  });

  if (isCorrect) {
    correctCount++;
    score += Math.max(10, 10 + timeLeft);
    $("#feedback").textContent = `Correct! 🎉 ${question.explanation}`;
    $("#feedback").className = "feedback success";
    playTone(740);
  } else {
    $("#feedback").textContent = `Not quite! The correct answer is ${question.options[question.answer]}. ${question.explanation}`;
    $("#feedback").className = "feedback error";
    playTone(240);
  }

  $("#quizScore").textContent = String(score);
  $("#nextBtn").disabled = false;
}

function showHint() {
  if (questionAnswered) {
    $("#hintText").textContent = "Answer this question first to use hints on the next one.";
    return;
  }

  const question = questions[questionIndex];
  hintsUsed++;
  $("#hintText").textContent = `💡 Hint: ${question.hint}`;
  playTone(440);
}

function tick() {
  if (questionAnswered || quizFinished) return;

  timeLeft--;
  updateTimer();

  if (timeLeft <= 0) {
    const question = questions[questionIndex];
    const buttons = [...$("#options").querySelectorAll(".option-btn")];

    questionAnswered = true;
    buttons.forEach((button) => {
      button.disabled = true;
    });
    buttons[question.answer]?.classList.add("correct");

    $("#feedback").textContent = `Time's up! ⏰ ${question.explanation}`;
    $("#feedback").className = "feedback error";
    $("#nextBtn").disabled = false;
    playTone(240);
  }
}

function updateTimer() {
  $("#timer").textContent = `⏱️ ${timeLeft}s`;
  $("#timer").classList.toggle("warning", timeLeft <= 10);
}

function nextQuestion() {
  if (!questionAnswered) return;

  // Stop the previous question's timer
  clearInterval(timerId);

  questionIndex++;

  if (questionIndex >= questions.length) {
    finishQuiz();
  } else {
    // Reset the timer for the next question
    timeLeft = Number($("#timeLimit").value);
    renderQuestion();
    updateTimer();

    // Start a fresh timer
    timerId = setInterval(tick, 1000);
  }
}

function finishQuiz() {
  clearInterval(timerId);
  quizFinished = true;

  const percentage = Math.round((correctCount / questions.length) * 100);
  const category = categories[selectedCategory];
  saveBestScore(selectedCategory, percentage);

  let title = "Keep learning!";
  let icon = "📚";
  let message = "Every attempt helps you improve. Try again and beat your best score!";

  if (percentage === 100) {
    title = "Perfect score!";
    icon = "🏆";
    message = "Amazing work! You answered every question correctly!";
  } else if (percentage >= 70) {
    title = "Excellent work!";
    icon = "🎉";
    message = "You have a strong understanding of this topic. Keep it up!";
  } else if (percentage >= 40) {
    title = "Good effort!";
    icon = "🚀";
    message = "You're making progress. Review the explanations and try again!";
  }

  $("#resultIcon").textContent = icon;
  $("#resultTitle").textContent = title;
  $("#resultMessage").textContent = `${category.name}: ${message}`;
  $("#finalPercentage").textContent = `${percentage}%`;
  $("#correctStat").textContent = `${correctCount}/${questions.length}`;
  $("#pointsStat").textContent = String(score);
  $("#hintsStat").textContent = String(hintsUsed);
  $("#resultBest").textContent = `${getBestScore(selectedCategory)}%`;

  $("#reviewList").replaceChildren();
  questions.forEach((question, index) => {
    const item = document.createElement("div");
    item.className = "feedback";
    item.textContent = `${index + 1}. ${question.q} Correct answer: ${question.options[question.answer]}`;
    $("#reviewList").appendChild(item);
  });

  $("#progressBar").style.width = "100%";
  showScreen("result");
  playTone(600);
}

function playTone(frequency) {
  if (!soundEnabled) return;

  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;

    const context = new AudioContextClass();
    const oscillator = context.createOscillator();
    const gain = context.createGain();

    oscillator.frequency.value = frequency;
    gain.gain.value = 0.035;
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start();
    oscillator.stop(context.currentTime + 0.09);
    oscillator.onended = () => context.close();
  } catch {
    // Sound is optional; the quiz works without it.
  }
}

function toggleSound() {
  soundEnabled = !soundEnabled;
  $("#soundBtn").textContent = soundEnabled ? "🔊 Sound on" : "🔇 Sound off";
}

function restartQuiz() {
  startQuiz();
}

function goHome() {
  clearInterval(timerId);
  showScreen("home");
  $("#bestScore").textContent = `${getBestScore(selectedCategory)}%`;
}

function shareResult() {
  const percentage =
    document.getElementById("finalPercentage").textContent;

  const correctAnswers =
    document.getElementById("correctStat").textContent;

  const totalPoints =
    document.getElementById("pointsStat").textContent;

  const category = document
    .getElementById("quizCategory")
    .textContent
    .replace(/[^\x00-\x7F]/g, "")
    .trim();

  const quizLink =
    "https://brindhar-code.github.io/CodeNova-Task2-Quiz/";

  const message =
    "MY QUIZNOVA RESULTS!\n\n" +
    "Category: " + category + "\n" +
    "Accuracy: " + percentage + "\n" +
    "Correct Answers: " + correctAnswers + "\n" +
    "Total Points: " + totalPoints + "\n\n" +
    "Think Smart. Play QuizNova!\n" +
    "Can you beat my score?\n\n" +
    "Play QuizNova here:\n" + quizLink;

  const whatsappURL =
    "https://wa.me/?text=" + encodeURIComponent(message);

  window.open(whatsappURL, "_blank");
}

// Set up the category cards and buttons.
document.querySelectorAll(".category-card").forEach((card) => {
  card.addEventListener("click", () => selectCategory(card.dataset.category));
});

$("#startBtn").addEventListener("click", startQuiz);
$("#hintBtn").addEventListener("click", showHint);
$("#nextBtn").addEventListener("click", nextQuestion);
$("#restartBtn").addEventListener("click", restartQuiz);
$("#homeBtn").addEventListener("click", goHome);
$("#shareBtn").addEventListener("click", shareResult);
$("#soundBtn").addEventListener("click", toggleSound);
$("#playAgainBtn").addEventListener("click", restartQuiz);
$("#changeCategoryBtn").addEventListener("click", goHome);

// Default selection.
selectCategory("tech");