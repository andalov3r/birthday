const messageBox = document.getElementById('message-box');
const messages = [
  "",

  "YOO GUESS WHAT",
  "I SAID GUESS",
  "AHAHAH SORRY SORRY AS TO GUESS YOU NEED A BRAIN",
  "BUT SOMEONE GOT NO BAINEEEEIEEEIEIEIEE >_<",
  "AS YOU KNOW I MADE SOMETHING FOR YOU",
  "A SPECIAL ONE HAI FERE",
  "SO BUCKLE UP HEHE",
  "FOR MY SPECIAL ONE HERE IT GOES HAI ",
  "TODAY ITS MY BIRTHDAY",
  "OO NOT MINE I MEAN YOURS",
  "TARA NI ITS THE SAME HAINA RA??",
  "YOU=ME SO MERO BIRTHDAY YAAAA",
  "HEHE JOKING JOKING YK IM FUNNY SO HAD TO JOKE A SMOLL",
  "NOW FOR THE FINAL",
  "ARE YOU READY SUNGURNI??",
  "OPPSS I MEAN MY BABEE",
  "SUPRISE",
  "Are you ready for some fun?AHAHAHAHA",
  "Keep clicking...1😸",
  "Keep clicking...2😸",
  "Keep clicking...3😸",
  "Keep clicking...4😸",
  "Keep clicking...5😸",
  "Keep clicking...6😸",
  "Keep clicking...7😸",
  "Keep clicking...8😸",
  "Keep clicking...9😹",
  "Keep clicking...10😹",
  "Keep clicking...11😹",
  "Keep clicking...12😹",
  "Keep clicking...13😹",
  "Keep clicking...14😹",
  "Keep clicking...15😹",
  "Almost there...",
  "Almost there...",
  "Keep clicking...16🙀",
  "Keep clicking...17🙀",
  "Keep clicking...18🙀",
  "Keep clicking...You Got This 19😼",
  "Keep clicking...last one fs🤥",
  "Keep clicking...SIKEEEEEEEEEEEEEEE😼",
  "Keep clicking...😼",
  "Almost there...😜",
  {
    text: "Is your name Andamika or Anamika?🤔",
    options: ["Andamika", "Anamika"]
  },
  "Happy Birthday!"
];
let currentMessageIndex = 0;

function displayMessage() {
  const currentMessage = messages[currentMessageIndex];

  if (typeof currentMessage === 'object') {
    messageBox.textContent = currentMessage.text;
    currentMessage.options.forEach(option => {
      const button = document.createElement('button');
      button.innerHTML = `<i class="fa-solid ${option === "Andamika" ? "fa-check" : "fa-user"}"></i> ${option}`;
      button.addEventListener('click', () => {
        if (option === "Andamika") {
          window.location.href = "andamika.html"; // Redirect on correct choice
        } else {
          messageBox.textContent = "Try again!";
          setTimeout(() => {
            displayMessage();
          }, 1000);
        }
      });
      messageBox.appendChild(button);
    });
  } else {
    messageBox.textContent = currentMessage;
    messageBox.classList.add('message-change');
    currentMessageIndex++;

    messageBox.addEventListener('animationend', () => {
      messageBox.classList.remove('message-change');
      if (currentMessageIndex < messages.length) {
        displayMessage();
      } else {
        messageBox.textContent = "Enjoy your special day!";
        messageBox.style.cursor = "default";
        messageBox.style.backgroundColor = "#f0f0f0";
        messageBox.removeEventListener('click', this);
      }
    });
  }
}

messageBox.addEventListener('click', displayMessage);