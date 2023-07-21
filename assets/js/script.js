const question = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: ["Central Process Unit", "Computer Personal Unit", "Central Processor Unit"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "According to the International System of Units, how many bytes are in a kilobyte of RAM?",
    correct_answer: "1000",
    incorrect_answers: ["512", "1024", "500"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "What was the name of the security vulnerability found in Bash in 2014?",
    correct_answer: "Shellshock",
    incorrect_answers: ["Heartbleed", "Bashbug", "Stagefright"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "medium",
    question: "The very first recorded computer &quot;bug&quot; was a moth found inside a Harvard Mark II computer.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "Which computer hardware device provides an interface for all other connected devices to communicate?",
    correct_answer: "Motherboard",
    incorrect_answers: ["Central Processing Unit", "Hard Disk Drive", "Random Access Memory"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "On which computer hardware device is the BIOS chip located?",
    correct_answer: "Motherboard",
    incorrect_answers: ["Hard Disk Drive", "Central Processing Unit", "Graphics Processing Unit"],
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
    question: "If you were to code software in this language you&#039;d only be able to type 0&#039;s and 1&#039;s.",
    correct_answer: "Binary",
    incorrect_answers: ["JavaScript", "C++", "Python"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does the Prt Sc button do?",
    correct_answer: "Captures what&#039;s on the screen and copies it to your clipboard",
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
    question: "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "What did the name of the Tor Anonymity Network orignially stand for?",
    correct_answer: "The Onion Router",
    incorrect_answers: ["The Only Router", "The Orange Router", "The Ominous Router"],
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
    question: "To bypass US Munitions Export Laws, the creator of the PGP published all the source code in book form. ",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "On which day did the World Wide Web go online?",
    correct_answer: "December 20, 1990",
    incorrect_answers: ["December 17, 1996", "November 12, 1990", "November 24, 1995"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the code name for the mobile operating system Android 7.0?",
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
    question: "The internet domain .fm is the country-code top-level domain for which Pacific Ocean island nation?",
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
    question: "What is the name of the default theme that is installed with Windows XP?",
    correct_answer: "Luna",
    incorrect_answers: ["Neptune", "Whistler", "Bliss"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "In most programming languages, the operator ++ is equivalent to the statement &quot;+= 1&quot;.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "In programming, the ternary operator is mostly defined with what symbol(s)?",
    correct_answer: "?:",
    incorrect_answers: ["??", "if then", "?"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "Which computer language would you associate Django framework with?",
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
    question: "The last Windows operating system to be based on the Windows 9x kernel was Windows 98.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "The numbering system with a radix of 16 is more commonly referred to as ",
    correct_answer: "Hexidecimal",
    incorrect_answers: ["Binary", "Duodecimal", "Octal"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "America Online (AOL) started out as which of these online service providers?",
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
    question: "What was the first Android version specifically optimized for tablets?",
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
    question: "Which programming language shares its name with an island in Indonesia?",
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
    incorrect_answers: ["Long Antenna Node", "Light Access Node", "Land Address Navigation"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "According to DeMorgan&#039;s Theorem, the Boolean expression (AB)&#039; is equivalent to:",
    correct_answer: "A&#039; + B&#039;",
    incorrect_answers: ["A&#039;B + B&#039;A", "A&#039;B&#039;", "AB&#039; + AB"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "medium",
    question: "A Boolean value of &quot;0&quot; represents which of these words?",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "Which of these is not a layer in the OSI model for data communications?",
    correct_answer: "Connection Layer",
    incorrect_answers: ["Application Layer", "Transport Layer", "Physical Layer"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The Python programming language gets its name from the British comedy group &quot;Monty Python.&quot;",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "What does the &#039;S&#039; in the RSA encryption algorithm stand for?",
    correct_answer: "Shamir",
    incorrect_answers: ["Secure", "Schottky", "Stable"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "Which of the following computer components can be built using only NAND gates?",
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
    incorrect_answers: ["Hashing algorithm", "Asymmetric encryption", "Stream cipher"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "The Harvard architecture for micro-controllers added which additional bus?",
    correct_answer: "Instruction",
    incorrect_answers: ["Address", "Data", "Control"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "What was the name of the security vulnerability found in Bash in 2014?",
    correct_answer: "Shellshock",
    incorrect_answers: ["Heartbleed", "Bashbug", "Stagefright"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "How many Hz does the video standard PAL support?",
    correct_answer: "50",
    incorrect_answers: ["59", "60", "25"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "The internet domain .fm is the country-code top-level domain for which Pacific Ocean island nation?",
    correct_answer: "Micronesia",
    incorrect_answers: ["Fiji", "Tuvalu", "Marshall Islands"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "What port does HTTP run on?",
    correct_answer: "80",
    incorrect_answers: ["53", "443", "23"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "hard",
    question: "DHCP stands for Dynamic Host Configuration Port.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which of these was the name of a bug found in April 2014 in the publicly available OpenSSL cryptography library?",
    correct_answer: "Heartbleed",
    incorrect_answers: ["Shellshock", "Corrupted Blood", "Shellscript"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "hard",
    question: "The IBM PC used an Intel 8008 microprocessor clocked at 4.77 MHz and 8 kilobytes of memory.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "Which data structure does FILO apply to?",
    correct_answer: "Stack",
    incorrect_answers: ["Queue", "Heap", "Tree"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "Which of the following is the oldest of these computers by release date?",
    correct_answer: "TRS-80",
    incorrect_answers: ["Commodore 64", "ZX Spectrum", "Apple 3"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "What is the name of the process that sends one qubit of information using two bits of classical information?",
    correct_answer: "Quantum Teleportation",
    incorrect_answers: ["Super Dense Coding", "Quantum Entanglement", "Quantum Programming"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "America Online (AOL) started out as which of these online service providers?",
    correct_answer: "Quantum Link",
    incorrect_answers: ["CompuServe", "Prodigy", "GEnie"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "What internet protocol was documented in RFC 1459?",
    correct_answer: "IRC",
    incorrect_answers: ["HTTP", "HTTPS", "FTP"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "Which of these is not a key value of Agile software development?",
    correct_answer: "Comprehensive documentation",
    incorrect_answers: ["Individuals and interactions", "Customer collaboration", "Responding to change"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "What does the International System of Quantities refer 1024 bytes as?",
    correct_answer: "Kibibyte",
    incorrect_answers: ["Kylobyte", "Kilobyte", "Kelobyte"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "Which RAID array type is associated with data mirroring?",
    correct_answer: "RAID 1",
    incorrect_answers: ["RAID 0", "RAID 10", "RAID 5"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "What was the first company to use the term &quot;Golden Master&quot;?",
    correct_answer: "Apple",
    incorrect_answers: ["IBM", "Microsoft", "Google"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "Released in 2001, the first edition of Apple&#039;s Mac OS X operating system (version 10.0) was given what animal code name?",
    correct_answer: "Cheetah",
    incorrect_answers: ["Puma", "Tiger", "Leopard"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "Dutch computer scientist Mark Overmars is known for creating which game development engine?",
    correct_answer: "Game Maker",
    incorrect_answers: ["Stencyl", "Construct", "Torque 2D"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "What vulnerability ranked #1 on the OWASP Top 10 in 2013?",
    correct_answer: "Injection ",
    incorrect_answers: ["Broken Authentication", "Cross-Site Scripting", "Insecure Direct Object References"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "According to DeMorgan&#039;s Theorem, the Boolean expression (AB)&#039; is equivalent to:",
    correct_answer: "A&#039; + B&#039;",
    incorrect_answers: ["A&#039;B + B&#039;A", "A&#039;B&#039;", "AB&#039; + AB"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "What major programming language does Unreal Engine 4 use?",
    correct_answer: "C++",
    incorrect_answers: ["Assembly", "C#", "ECMAScript"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "The acronym &quot;RIP&quot; stands for which of these?",
    correct_answer: "Routing Information Protocol",
    incorrect_answers: ["Runtime Instance Processes", "Regular Interval Processes", "Routine Inspection Protocol"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "What type of sound chip does the Super Nintendo Entertainment System (SNES) have?",
    correct_answer: "ADPCM Sampler",
    incorrect_answers: ["FM Synthesizer", "Programmable Sound Generator (PSG)", "PCM Sampler"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "Which of the following computer components can be built using only NAND gates?",
    correct_answer: "ALU",
    incorrect_answers: ["CPU", "RAM", "Register"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "What is the codename of the eighth generation Intel Core micro-architecture launched in October 2017?",
    correct_answer: "Coffee Lake",
    incorrect_answers: ["Sandy Bridge", "Skylake", "Broadwell"],
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
    type: "boolean",
    difficulty: "hard",
    question: "The T-Mobile Sidekick smartphone is a re-branded version of the Danger Hiptop.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "Which of these Cherry MX mechanical keyboard switches is both tactile and clicky?",
    correct_answer: "Cherry MX Blue",
    incorrect_answers: ["Cherry MX Black", "Cherry MX Red", "Cherry MX Brown"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "Which kind of algorithm is Ron Rivest not famous for creating?",
    correct_answer: "Secret sharing scheme",
    incorrect_answers: ["Hashing algorithm", "Asymmetric encryption", "Stream cipher"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "Which of the following languages is used as a scripting language in the Unity 3D game engine?",
    correct_answer: "C#",
    incorrect_answers: ["Java", "C++", "Objective-C"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "All of the following programs are classified as raster graphics editors EXCEPT:",
    correct_answer: "Inkscape",
    incorrect_answers: ["Paint.NET", "GIMP", "Adobe Photoshop"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "What was the first commerically available computer processor?",
    correct_answer: "Intel 4004",
    incorrect_answers: ["Intel 486SX", "TMS 1000", "AMD AM386"],
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
    question: "AMD created the first consumer 64-bit processor.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "In CSS, which of these values CANNOT be used with the &quot;position&quot; property?",
    correct_answer: "center",
    incorrect_answers: ["static", "absolute", "relative"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "medium",
    question: "Early RAM was directly seated onto the motherboard and could not be easily removed.",
    correct_answer: "True",
    incorrect_answers: ["False"],
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
    question: "In programming, what do you call functions with the same name but different implementations?",
    correct_answer: "Overloading",
    incorrect_answers: ["Overriding", "Abstracting", "Inheriting"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "What is the number of keys on a standard Windows Keyboard?",
    correct_answer: "104",
    incorrect_answers: ["64", "94", "76"],
  },
];

let correct = 0;
let incorrect = 0;
let timerStart = 30;
let timer = timerStart;
const timerElm = document.querySelector("#countdown-text p:nth-child(2)");
const btnAvanti = document.querySelector("#avanti");
let numberQuestion = 20;
let test = {};
const answers = [];
let difficult = "easy";
let currentAnswer = "";
let counterInterval;
let counterTimeout;

const getTotalTimeText = function (event) {
  levelSelected = event.target.value;
  const totalTimeText = document.querySelector(".totalTimeText");
  const rangeInput = document.getElementById("rangeValue");

  switch (levelSelected) {
    case "0":
      totalTimeText.innerText = "0-10 minutes";
      rangeInput.style.backgroundColor = "#00fff0";
      break;
    case "100":
      totalTimeText.innerText = "10-24 minutes";
      rangeInput.style.backgroundColor = "rgb(0, 162, 255)";
      break;
    case "200":
      totalTimeText.innerText = "24-30 minutes";
      rangeInput.style.backgroundColor = "#000599";
      break;
  }
};

document.getElementById("rangeValue").addEventListener("click", getTotalTimeText);

const setDifficult_byBtn = (event) => {
  const totalTimeText = document.querySelector(".totalTimeText");
  const rangeInput = document.getElementById("rangeValue");
  if (event.target.innerText.toLowerCase() === "easy") {
    totalTimeText.innerText = "0-10 minutes";
    rangeInput.value = "0";
    rangeInput.style.backgroundColor = "#00fff0";
  } else if (event.target.innerText.toLowerCase() === "medium") {
    totalTimeText.innerText = "10-24 minutes";
    rangeInput.value = "100";
    rangeInput.style.backgroundColor = "rgb(0, 162, 255)";
  } else if (event.target.innerText.toLowerCase() === "hard") {
    totalTimeText.innerText = "24-30 minutes";
    rangeInput.value = "200";
    rangeInput.style.backgroundColor = "#000599";
  }
};

const difficulty_btn = document.querySelectorAll(".cont-range ul");
difficulty_btn.forEach((btn) => btn.addEventListener("click", setDifficult_byBtn));

const goExam = (event) => {
  event.preventDefault();
  document.querySelector("#welcome").style.display = "none";
  document.querySelector("#exam").style.display = "block";
  document.querySelector("#countdown").style.display = "block";
  levelSelected = event.target.elements.rangeValue.value;
  switch (levelSelected) {
    case "0":
      difficult = "easy";
      timerStart = "40";
      numberQuestion = 16; //16
      break;
    case "100":
      difficult = "medium";
      timerStart = "60";
      numberQuestion = 24; //24
      break;
    case "200":
      difficult = "hard";
      timerStart = "90";
      numberQuestion = 30; //30
      break;
  }

  setQuestion();
};

const dropSecond = () => {
  const radius = document.querySelector("circle").attributes.r.value;
  const circ = radius * 2 * Math.PI;
  const step = circ / timerStart;
  const delta = step * (timerStart - timer);
  const circle = document.querySelector("circle + circle");
  const offset = 16;
  circle.style["stroke-dasharray"] = `${circ - delta - offset} ${delta + offset} `;
  timer--;
  timerElm.innerText = timer;
  if (timer < 20) {
    circle.style.transition = "stroke 20s, stroke-dasharray 2s;";
    circle.style.stroke = "#ff0000";
  }
};

const dropQuestion = () => {
  currentAnswer = "";
  test.answer = currentAnswer;
  test.correct = false;
  answers.push(test);
  incorrect++;
  if (correct + incorrect === numberQuestion) {
    getResult();
  } else {
    setQuestion();
  }
};

const setCounter = () => {
  timer = timerStart;
  timerElm.innerText = timer;
  clearInterval(counterInterval);
  clearTimeout(counterTimeout);
  counterInterval = setInterval(dropSecond, 1000);
  counterTimeout = setTimeout(dropQuestion, timerStart * 1000);
  const circle = document.querySelector("circle + circle");
  circle.style["stroke-dasharray"] = `320 6`;
  circle.style.transition = "stroke-dasharray 2s, stroke 0.1s";
  circle.style.stroke = "#d20094";
};

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
  return arr[index];
};

const setClicked = function (event) {
  event.preventDefault();
  document
    .querySelectorAll(".container-buttons .exam-buttons")
    .forEach((elem) => elem.classList.remove("button-clicked"));

  event.target.classList.add("button-clicked");

  btnAvanti.disabled = false;
  btnAvanti.classList.add("universal-style-btn-slc");
  currentAnswer = event.target.innerHTML;
};

const areYouSure = (event) => {
  const booleano = confirm("Are you sure to leave the page?");
  if (booleano) {
    window.location.href = "exam.html";
  } else {
    event.preventDefault();
  }
};

const setQuestion = () => {
  setCounter();
  document
    .querySelectorAll(".container-buttons .exam-buttons")
    .forEach((elem) => elem.classList.remove("button-clicked"));
  test = getQuestion(question, difficult);
  btnAvanti.disabled = true;
  btnAvanti.classList.remove("universal-style-btn-slc");
  let h2 = document.querySelector("h2");
  h2.innerHTML = test.question;
  const arrQuestion = [test.correct_answer, ...test.incorrect_answers];
  const randQuestion = [];
  const btn = document.querySelectorAll(".container-buttons .exam-buttons");

  while (arrQuestion.length > 0) {
    index = Math.floor(Math.random() * arrQuestion.length);
    randQuestion.push(arrQuestion[index]);
    arrQuestion.splice(index, 1);
  }

  if (test.type === "boolean") {
    document.querySelector("#exam form").classList.add("exam-form-padding-top");
    btn[2].style.display = "none";
    btn[3].style.display = "none";
  } else {
    document.querySelector("#exam form").classList.remove("exam-form-padding-top");
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
  document.getElementById("backWelcomePage").onclick = areYouSure;
};

toggleAnswer = (event) => {
  event.currentTarget.querySelectorAll("p:not(:first-child)").forEach((elm) => elm.classList.toggle("hiddenAnswer"));
};

const reviewDiv = document.querySelector("#review");
const getReview = () => {
  answers.forEach((elm) => {
    const div = document.createElement("div");
    const questionTest = elm.question;
    let answer = elm.answer;
    const correctAnswer = elm.correct_answer;
    const correct = elm.correct;
    pAnsw = document.createElement("p");
    pText = document.createElement("p");
    pCorr = document.createElement("p");

    pAnsw.classList.add("hiddenAnswer");
    pCorr.classList.add("hiddenAnswer");
    if (correct === true) {
      pText.innerHTML = `<i class="fa-solid fa-check"></i>` + questionTest;
      pText.classList.add("font-size-q");
      pAnsw.innerHTML = "<strong>Your answer:</strong> " + answer + `<i class="fa-solid fa-check"></i>`;
      pAnsw.classList.add("margin-left");
      div.appendChild(pText);
      div.appendChild(pAnsw);
    } else {
      if (answer === "") answer = "NO ANSWER";
      pText.innerHTML = `<i class="fa-solid fa-xmark"></i>` + questionTest;
      pText.classList.add("font-size-q");
      pAnsw.innerHTML = "<strong>Your answer:</strong> " + answer + `<i class="fa-solid fa-xmark"></i>`;
      pAnsw.classList.add("margin-left");
      pCorr.innerHTML = "<strong>Correct answer:</strong> " + correctAnswer + `<i class="fa-solid fa-check"></i>`;
      pCorr.classList.add("margin-left");
      div.appendChild(pText);
      div.appendChild(pAnsw);
      div.appendChild(pCorr);
    }
    div.onclick = toggleAnswer;
    reviewDiv.appendChild(div);
  });
};

const showAnswers = () => {
  if (reviewDiv.style.display == "block") {
    reviewDiv.style.display = "none";
  } else {
    reviewDiv.style.display = "block";
  }
};
const yourQuestion = document.getElementById("your-answers");
yourQuestion.onclick = showAnswers;

const getResult = () => {
  clearInterval(counterInterval);
  clearTimeout(counterTimeout);
  const correctCont = document.querySelector(".corrects-result");
  const textExamResult = document.querySelector(".result-grafic p");
  const correctPercent = (100 / numberQuestion) * correct;
  const incorrectPercent = (100 / numberQuestion) * incorrect;

  correctCont.innerHTML = `<h2>Correct</h2> <h2><strong>${correctPercent.toFixed(2)}%</strong></h2>
  	<h4>${correct}/${numberQuestion} questions</h4>`;

  const incorrectCont = document.querySelector(".wrongs-result");
  incorrectCont.innerHTML = `<h2>Wrong</h2> <h2><strong>${incorrectPercent.toFixed(2)}%</strong></h2>
  	<h4>${incorrect}/${numberQuestion} questions</h4>`;

  document.querySelector("#exam").style.display = "none";
  document.querySelector("#results").style.display = "inline-block";
  document.querySelector("#countdown").style.display = "none";

  const correctToStroke = (1004.8 * correctPercent.toFixed(2)) / 100;

  if (correctPercent > 60) {
    textExamResult.innerHTML =
      "<strong>Congratulations!<br><span class='azzurro'>You passed the exam.</span></strong><p><br>We'll send you the certificate in a few moments. Check your email (including promotion / spam folder)</p>";
  } else {
    textExamResult.innerHTML =
      "<strong>Sorry!<br><span class='rosso'>You didn't pass the exam.</span></strong><p><br>We'll send you the result of the exam in a few moments. Check your email (including promotion / spam folder)</p>";
  }

  document.querySelector(".result-grafic circle+circle").style.strokeDasharray = `${correctToStroke} 1004.8`;

  getReview();
};

const getFeedback = () => {
  window.location.href = "feedback.html";
};

const nextQuestion = (event) => {
  event.preventDefault();
  test.answer = currentAnswer;
  if (test.correct_answer === currentAnswer) {
    correct++;
    test.correct = true;
  } else {
    incorrect++;
    test.correct = false;
  }
  answers.push(test);
  if (correct + incorrect === numberQuestion) {
    getResult();
  } else {
    setQuestion();
  }
};

btnAvanti.onclick = nextQuestion;
document.querySelector("#rate-us").onclick = getFeedback;
document.querySelector("#welcome form").onsubmit = goExam;
