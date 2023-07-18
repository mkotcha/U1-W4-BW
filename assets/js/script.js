const question = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "According to the International System of Units, how many bytes are in a kilobyte of RAM?",
    correct_answer: "1000",
    incorrect_answers: ["512", "1024", "500"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "What was the name of the security vulnerability found in Bash in 2014?",
    correct_answer: "Shellshock",
    incorrect_answers: ["Heartbleed", "Bashbug", "Stagefright"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "medium",
    question:
      "The very first recorded computer &quot;bug&quot; was a moth found inside a Harvard Mark II computer.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which computer hardware device provides an interface for all other connected devices to communicate?",
    correct_answer: "Motherboard",
    incorrect_answers: [
      "Central Processing Unit",
      "Hard Disk Drive",
      "Random Access Memory",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "On which computer hardware device is the BIOS chip located?",
    correct_answer: "Motherboard",
    incorrect_answers: [
      "Hard Disk Drive",
      "Central Processing Unit",
      "Graphics Processing Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "If you were to code software in this language you&#039;d only be able to type 0&#039;s and 1&#039;s.",
    correct_answer: "Binary",
    incorrect_answers: ["JavaScript", "C++", "Python"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does the Prt Sc button do?",
    correct_answer:
      "Captures what&#039;s on the screen and copies it to your clipboard",
    incorrect_answers: [
      "Nothing",
      "Saves a .png file of what&#039;s on the screen in your screenshots folder in photos",
      "Closes all windows",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "What did the name of the Tor Anonymity Network orignially stand for?",
    correct_answer: "The Onion Router",
    incorrect_answers: [
      "The Only Router",
      "The Orange Router",
      "The Ominous Router",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "What was the name given to Android 4.3?",
    correct_answer: "Jelly Bean",
    incorrect_answers: ["Lollipop", "Nutella", "Froyo"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "medium",
    question: "&quot;Windows NT&quot; is a monolithic kernel.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "medium",
    question:
      "To bypass US Munitions Export Laws, the creator of the PGP published all the source code in book form. ",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "On which day did the World Wide Web go online?",
    correct_answer: "December 20, 1990",
    incorrect_answers: [
      "December 17, 1996",
      "November 12, 1990",
      "November 24, 1995",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "RAM stands for Random Access Memory.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "The internet domain .fm is the country-code top-level domain for which Pacific Ocean island nation?",
    correct_answer: "Micronesia",
    incorrect_answers: ["Fiji", "Tuvalu", "Marshall Islands"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "How many kilobytes in one gigabyte (in decimal)?",
    correct_answer: "1000000",
    incorrect_answers: ["1024", "1000", "1048576"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "Generally, which component of a computer draws the most power?",
    correct_answer: "Video Card",
    incorrect_answers: ["Hard Drive", "Processor", "Power Supply"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "How many cores does the Intel i7-6950X have?",
    correct_answer: "10",
    incorrect_answers: ["12", "8", "4"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the name of the default theme that is installed with Windows XP?",
    correct_answer: "Luna",
    incorrect_answers: ["Neptune", "Whistler", "Bliss"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "In most programming languages, the operator ++ is equivalent to the statement &quot;+= 1&quot;.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "In programming, the ternary operator is mostly defined with what symbol(s)?",
    correct_answer: "?:",
    incorrect_answers: ["??", "if then", "?"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which computer language would you associate Django framework with?",
    correct_answer: "Python",
    incorrect_answers: ["C#", "C++", "Java"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The Windows 7 operating system has six main editions.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The Windows ME operating system was released in the year 2000.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: ".at is the top-level domain for what country?",
    correct_answer: "Austria",
    incorrect_answers: ["Argentina", "Australia", "Angola"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "medium",
    question:
      "The last Windows operating system to be based on the Windows 9x kernel was Windows 98.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "The numbering system with a radix of 16 is more commonly referred to as ",
    correct_answer: "Hexidecimal",
    incorrect_answers: ["Binary", "Duodecimal", "Octal"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "America Online (AOL) started out as which of these online service providers?",
    correct_answer: "Quantum Link",
    incorrect_answers: ["CompuServe", "Prodigy", "GEnie"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "medium",
    question: "Android versions are named in alphabetical order.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "What was the first Android version specifically optimized for tablets?",
    correct_answer: "Honeycomb",
    incorrect_answers: ["Eclair", "Froyo", "Marshmellow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "When did the online streaming service &quot;Mixer&quot; launch?",
    correct_answer: "2016",
    incorrect_answers: ["2013", "2009", "2011"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "What does the term MIME stand for, in regards to computing?",
    correct_answer: "Multipurpose Internet Mail Extensions",
    incorrect_answers: [
      "Mail Internet Mail Exchange",
      "Multipurpose Interleave Mail Exchange",
      "Mail Interleave Method Exchange",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "Who invented the &quot;Spanning Tree Protocol&quot;?",
    correct_answer: "Radia Perlman",
    incorrect_answers: ["Paul Vixie", "Vint Cerf", "Michael Roberts"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "Approximately how many Apple I personal computers were created?",
    correct_answer: "200",
    incorrect_answers: ["100", "500", "1000"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "What does RAID stand for?",
    correct_answer: "Redundant Array of Independent Disks",
    incorrect_answers: [
      "Rapid Access for Indexed Devices",
      "Range of Applications with Identical Designs",
      "Randomized Abstract Identification Description",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "How long is an IPv6 address?",
    correct_answer: "128 bits",
    incorrect_answers: ["32 bits", "64 bits", "128 bytes"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In computing, what does LAN stand for?",
    correct_answer: "Local Area Network",
    incorrect_answers: [
      "Long Antenna Node",
      "Light Access Node",
      "Land Address Navigation",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "According to DeMorgan&#039;s Theorem, the Boolean expression (AB)&#039; is equivalent to:",
    correct_answer: "A&#039; + B&#039;",
    incorrect_answers: [
      "A&#039;B + B&#039;A",
      "A&#039;B&#039;",
      "AB&#039; + AB",
    ],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "medium",
    question:
      "A Boolean value of &quot;0&quot; represents which of these words?",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which of these is not a layer in the OSI model for data communications?",
    correct_answer: "Connection Layer",
    incorrect_answers: [
      "Application Layer",
      "Transport Layer",
      "Physical Layer",
    ],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "The Python programming language gets its name from the British comedy group &quot;Monty Python.&quot;",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "What does the &#039;S&#039; in the RSA encryption algorithm stand for?",
    correct_answer: "Shamir",
    incorrect_answers: ["Secure", "Schottky", "Stable"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which of the following computer components can be built using only NAND gates?",
    correct_answer: "ALU",
    incorrect_answers: ["CPU", "RAM", "Register"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "Lenovo acquired IBM&#039;s personal computer division, including the ThinkPad line of laptops and tablets, in what year?",
    correct_answer: "2005",
    incorrect_answers: ["1999", "2002", "2008"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "Which kind of algorithm is Ron Rivest not famous for creating?",
    correct_answer: "Secret sharing scheme",
    incorrect_answers: [
      "Hashing algorithm",
      "Asymmetric encryption",
      "Stream cipher",
    ],
  },
];

let correct = 0;
let incorrect = 0;

const btnAvanti = document.querySelector("#avanti");
<<<<<<< HEAD
const numberQuestion = 5;
=======
const numberQuestion = 7;

>>>>>>> 02c83487b20c842f1ed87943d902cc077faf06d1
const difficult = "easy";
let currentAnswer = "";

const getQuestion = (arr, difficult) => {
  let notFound = true;
  let index = 0;
  while (notFound) {
    index = Math.floor(Math.random() * arr.length);
    if (arr[index].difficulty === difficult && arr[index].used !== true) {
      arr[index].used = true;
      notFound = false;
    }
  }
  console.log(arr[index]);
  return arr[index];
};

const setClicked = function (event) {
<<<<<<< HEAD
  event.preventDefault();
  document
    .querySelectorAll(".container-buttons button")
    .forEach((elem) => elem.classList.remove("button-clicked"));
  event.target.classList.add("button-clicked");
  btnAvanti.disabled = false;
  btnAvanti.classList.add("selected-avanti");
  currentAnswer = event.target.innerHTML;
  console.log(currentAnswer);
  console.log(btnAvanti);
=======
	event.preventDefault();
	document.querySelectorAll(".container-buttons button").forEach((elem) => elem.classList.remove("button-clicked"));
	event.target.classList.add("button-clicked");
	btnAvanti.disabled = false;
	btnAvanti.classList.add("selected-avanti");
	currentAnswer = event.target.innerHTML;
	console.log(currentAnswer);
	console.log(btnAvanti);
>>>>>>> 02c83487b20c842f1ed87943d902cc077faf06d1
};

let test = {};

const setQuestion = () => {
<<<<<<< HEAD
  document
    .querySelectorAll(".container-buttons button")
    .forEach((elem) => elem.classList.remove("button-clicked"));
  test = getQuestion(question, difficult);
  btnAvanti.disabled = true;
  btnAvanti.classList.remove("selected-avanti");
  let h2 = document.querySelector("h2");
  h2.innerHTML = test.question;
  const arrQuestion = [test.correct_answer, ...test.incorrect_answers];
  const randQuestion = [];
  // console.log(arrQuestion);
  const btn = document.querySelectorAll(".container-buttons button");
=======
	document.querySelectorAll(".container-buttons button").forEach((elem) => elem.classList.remove("button-clicked"));
	test = getQuestion(question, difficult);
	btnAvanti.disabled = true;
	btnAvanti.classList.remove("selected-avanti");
	let h2 = document.querySelector("h2");
	h2.innerHTML = test.question;
	const arrQuestion = [test.correct_answer, ...test.incorrect_answers];
	const randQuestion = [];
	// console.log(arrQuestion);
	const btn = document.querySelectorAll(".container-buttons button");
>>>>>>> 02c83487b20c842f1ed87943d902cc077faf06d1

  while (arrQuestion.length > 0) {
    index = Math.floor(Math.random() * arrQuestion.length);
    randQuestion.push(arrQuestion[index]);
    arrQuestion.splice(index, 1);
  }

  if (test.type === "boolean") {
    btn[2].style.display = "none";
    btn[3].style.display = "none";
  } else {
    btn[2].style.display = "inline-block";
    btn[3].style.display = "inline-block";
  }

  for (let i = 0; i < randQuestion.length; i++) {
    btn[i].innerHTML = randQuestion[i];
    btn[i].onclick = setClicked;
  }

  document.querySelector(".form-footer p").innerHTML = `QUESTION ${
    correct + incorrect + 1
  } <span>/ ${numberQuestion}</span>`;
};

setQuestion();
<<<<<<< HEAD

const getResult = () => {
  const round10 = (value, exp) => decimalAdjust("round", value, exp);
  const correctPercent = round10((100 / numberQuestion) * correct, -1);
  const incorrectPercent = round10((100 / numberQuestion) * incorrect, -1);

  const correctCont = document.querySelector(".corrects-result");
  correctCont.innerHTML = `<h2>Correct ${correctPercent}%</h2><h4>${correct}/${numberQuestion} questions</h4>`;
  const incorrectCont = document.querySelector(".wrongs-result");
  incorrectCont.innerHTML = `<h2>Wrong ${incorrectPercent}%</h2><h4>${incorrect}/${numberQuestion} questions</h4>`;

  document.querySelector("#exam").style.display = "none";
=======

function decimalAdjust(type, value, exp) {
	type = String(type);
	if (!["round", "floor", "ceil"].includes(type)) {
		throw new TypeError("The type of decimal adjustment must be one of 'round', 'floor', or 'ceil'.");
	}
	exp = Number(exp);
	value = Number(value);
	if (exp % 1 !== 0 || Number.isNaN(value)) {
		return NaN;
	} else if (exp === 0) {
		return Math[type](value);
	}
	const [magnitude, exponent = 0] = value.toString().split("e");
	const adjustedValue = Math[type](`${magnitude}e${exponent - exp}`);
	// Shift back
	const [newMagnitude, newExponent = 0] = adjustedValue.toString().split("e");
	return Number(`${newMagnitude}e${+newExponent + exp}`);
}

const getResult = () => {
	const round10 = (value, exp) => decimalAdjust("round", value, exp);
	const correctPercent = round10((100 / numberQuestion) * correct, -1);
	const incorrectPercent = round10((100 / numberQuestion) * incorrect, -1);

	const correctCont = document.querySelector(".corrects-result");
	correctCont.innerHTML = `<h2>Correct ${correctPercent}%</h2><h4>${correct}/${numberQuestion} questions</h4>`;
	const incorrectCont = document.querySelector(".wrongs-result");
	incorrectCont.innerHTML = `<h2>Wrong ${incorrectPercent}%</h2><h4>${incorrect}/${numberQuestion} questions</h4>`;
	document.querySelector("#exam").style.display = "none";
	document.querySelector("#results").style.display = "inline-block";
>>>>>>> 02c83487b20c842f1ed87943d902cc077faf06d1
};

const getFeedback = () => {
	window.location.href = "feedback.html";
};

const nextQuestion = (event) => {
  event.preventDefault();
  // console.log("Va");
  if (test.correct_answer === currentAnswer) {
    correct++;
  } else {
    incorrect++;
  }
  setQuestion();
  console.log(correct, incorrect);
  if (correct + incorrect === numberQuestion) {
    getResult();
  }
};

btnAvanti.onclick = nextQuestion;
<<<<<<< HEAD
=======

document.querySelector("#rate-us").onclick = getFeedback;

function getFeedback() {
	window.location.href = "feedback.html";
}

document.querySelector("#rate-us").onclick = getFeedback;
>>>>>>> 02c83487b20c842f1ed87943d902cc077faf06d1

// console.log(test);
