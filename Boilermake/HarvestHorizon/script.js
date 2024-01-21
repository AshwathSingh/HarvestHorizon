let currentQuestionIndex = 0;

const questionsData = [
  {
    text: "Your scientists propose a new genetically modified crop that claims to be resistant to common pests. What do you do?",
    options: [
      {
        text: "Invest resources in extensive testing and research before approving.",
        nextIndex: 1,
      },
      {
        text: "Immediately implement the new crop to combat pests.",
        nextIndex: 2,
      },
      {
        text: "Reject the idea of genetically modified crops altogether.",
        nextIndex: 3,
      },
    ],
  },
  {
    text: "A major transportation route for your food supply chain is disrupted due to a natural disaster. How do you respond?",
    options: [
      { text: "Implement alternative transportation methods.", nextIndex: 4 },
      {
        text: "Rely on existing stockpiles until the route is restored.",
        nextIndex: 5,
      },
      { text: "Seek international aid for immediate relief.", nextIndex: 6 },
    ],
  },
  {
    text: "You discover a new farming technology that promises higher yields but is expensive to implement. What's your approach?",
    options: [
      {
        text: "Invest in the new technology to boost productivity.",
        nextIndex: 7,
      },
      { text: "Stick to traditional methods to save costs.", nextIndex: 8 },
      {
        text: "Conduct a cost-benefit analysis before making a decision.",
        nextIndex: 9,
      },
    ],
  },
  {
    text: "A drought threatens your crops. How do you mitigate the impact?",
    options: [
      { text: "Implement advanced irrigation techniques.", nextIndex: 10 },
      {
        text: "Encourage water conservation practices among farmers.",
        nextIndex: 11,
      },
      { text: "Develop drought-resistant crop varieties.", nextIndex: 12 },
    ],
  },
  {
    text: "Local communities express concern about the environmental impact of your farming practices. What's your response?",
    options: [
      {
        text: "Initiate sustainable farming practices to address environmental concerns.",
        nextIndex: 13,
      },
      {
        text: "Prioritize economic growth and ignore environmental concerns.",
        nextIndex: 14,
      },
      {
        text: "Engage in open dialogue with communities to find a balanced solution.",
        nextIndex: 15,
      },
    ],
  },
  {
    text: "A new pest is threatening your crops. How do you handle the situation?",
    options: [
      {
        text: "Implement a targeted pesticide to control the pest.",
        nextIndex: 16,
      },
      {
        text: "Explore natural and organic pest control methods.",
        nextIndex: 17,
      },
      {
        text: "Collaborate with researchers to develop pest-resistant crop varieties.",
        nextIndex: 18,
      },
    ],
  },
  {
    text: "Your farming equipment is outdated, affecting efficiency. What's your plan?",
    options: [
      {
        text: "Invest in modern farming equipment for increased efficiency.",
        nextIndex: 19,
      },
      {
        text: "Continue using existing equipment to save costs.",
        nextIndex: 20,
      },
      { text: "Explore leasing options for updated equipment.", nextIndex: 21 },
    ],
  },
  {
    text: "A neighboring farm is facing financial challenges. How do you respond?",
    options: [
      { text: "Offer assistance and share resources.", nextIndex: 22 },
      {
        text: "Focus on your farm's sustainability without involving in their challenges.",
        nextIndex: 23,
      },
      {
        text: "Collaborate on joint projects to improve both farms' conditions.",
        nextIndex: 24,
      },
    ],
  },
  {
    text: "You receive an offer to sell your farm's produce exclusively to a big corporation. What's your decision?",
    options: [
      { text: "Accept the offer for guaranteed income.", nextIndex: 25 },
      {
        text: "Continue selling to a variety of markets for diversification.",
        nextIndex: 26,
      },
      {
        text: "Negotiate with the corporation for better terms.",
        nextIndex: 27,
      },
    ],
  },
  {
    text: "New government regulations impact your farming practices. How do you adapt?",
    options: [
      {
        text: "Comply with the regulations to avoid legal issues.",
        nextIndex: 28,
      },
      { text: "Challenge the regulations through legal means.", nextIndex: 29 },
      {
        text: "Collaborate with other farmers to lobby for changes in regulations.",
        nextIndex: 30,
      },
    ],
  },
  {
    text: "Your farm is hit by a sudden market downturn affecting crop prices. How do you navigate this situation?",
    options: [
      {
        text: "Diversify your crops to appeal to different markets.",
        nextIndex: 31,
      },
      {
        text: "Negotiate with buyers for better pricing terms.",
        nextIndex: 32,
      },
      { text: "Explore alternative markets or export options.", nextIndex: 33 },
    ],
  },
  {
    text: "A new technology promises to automate some of your farming tasks. What's your approach?",
    options: [
      {
        text: "Embrace the technology for increased efficiency.",
        nextIndex: 34,
      },
      {
        text: "Stick to manual methods to preserve traditional practices.",
        nextIndex: 35,
      },
      {
        text: "Gradually adopt the technology after thorough testing.",
        nextIndex: 36,
      },
    ],
  },
  {
    text: "You face a shortage of skilled labor on your farm. How do you address this issue?",
    options: [
      {
        text: "Invest in training programs for existing staff.",
        nextIndex: 37,
      },
      {
        text: "Hire skilled workers from outside the local community.",
        nextIndex: 38,
      },
      {
        text: "Collaborate with educational institutions for skilled labor recruitment.",
        nextIndex: 39,
      },
    ],
  },
  {
    text: "A rare disease is affecting your livestock. How do you handle the health crisis?",
    options: [
      {
        text: "Implement quarantine measures to prevent the disease spread.",
        nextIndex: 40,
      },
      {
        text: "Consult with veterinary experts to find a cure.",
        nextIndex: 41,
      },
      {
        text: "Consider culling affected animals to prevent further spread.",
        nextIndex: 42,
      },
    ],
  },
  {
    text: "You receive an opportunity to participate in an agricultural innovation competition. How do you approach it?",
    options: [
      {
        text: "Develop a groundbreaking idea and actively participate.",
        nextIndex: 43,
      },
      {
        text: "Pass on the opportunity as it may distract from daily operations.",
        nextIndex: 44,
      },
      {
        text: "Collaborate with other farmers to form a competitive team.",
        nextIndex: 45,
      },
    ],
  },
  {
    text: "Your innovative farming practices receive recognition, and you're invited to speak at a major agricultural conference. How do you prepare?",
    options: [
      {
        text: "Thoroughly research and prepare a detailed presentation.",
        nextIndex: 46,
      },
      {
        text: "Decline the invitation as public speaking is not your strength.",
        nextIndex: 47,
      },
      {
        text: "Collaborate with a public speaking coach to improve your presentation skills.",
        nextIndex: 48,
      },
    ],
  },
  {
    text: "A dispute arises with a neighboring farm over water rights. How do you handle the situation?",
    options: [
      {
        text: "Engage in a legal resolution process to determine water rights.",
        nextIndex: 49,
      },
      {
        text: "Initiate open communication and negotiation with the neighboring farmer.",
        nextIndex: 50,
      },
      {
        text: "Seek mediation from a third party to resolve the dispute.",
        nextIndex: 51,
      },
    ],
  },
  {
    text: "Your farm is selected as a pilot for a government-supported sustainability program. How do you participate?",
    options: [
      {
        text: "Actively engage and implement sustainable practices on your farm.",
        nextIndex: 52,
      },
      {
        text: "Opt out of the program to maintain full control over your farming decisions.",
        nextIndex: 53,
      },
      {
        text: "Collaborate with other participating farms to share best practices.",
        nextIndex: 54,
      },
    ],
  },
  {
    text: "A new social media campaign criticizes your farming methods. How do you respond?",
    options: [
      {
        text: "Launch a counter-campaign to address misconceptions and educate the public.",
        nextIndex: 55,
      },
      {
        text: "Ignore the campaign, believing that actions speak louder than words.",
        nextIndex: 56,
      },
      {
        text: "Engage with critics in a constructive dialogue to address concerns.",
        nextIndex: 57,
      },
    ],
  },
  {
    text: "A severe storm damages your crops and infrastructure. How do you rebuild?",
    options: [
      {
        text: "Utilize insurance funds to expedite the rebuilding process.",
        nextIndex: 58,
      },
      {
        text: "Seek assistance from the local community in a collective rebuilding effort.",
        nextIndex: 59,
      },
      {
        text: "Implement preventive measures to better withstand future storms.",
        nextIndex: 60,
      },
    ],
  },
  {
    text: "You receive an offer to collaborate with a tech company for implementing smart farming solutions. How do you proceed?",
    options: [
      {
        text: "Embrace the collaboration for technological advancement on your farm.",
        nextIndex: 61,
      },
      {
        text: "Decline the offer to maintain the farm's traditional practices.",
        nextIndex: 62,
      },
      {
        text: "Negotiate terms to ensure the collaboration aligns with your farming values.",
        nextIndex: 63,
      },
    ],
  },
  {
    text: "A rare opportunity arises to participate in an international agricultural expo. How do you showcase your farm?",
    options: [
      {
        text: "Create an impressive exhibition highlighting your farm's innovations.",
        nextIndex: 64,
      },
      {
        text: "Pass on the opportunity to avoid the challenges of international exposure.",
        nextIndex: 65,
      },
      {
        text: "Collaborate with other farmers to create a collective display at the expo.",
        nextIndex: 66,
      },
    ],
  },
  {
    text: "Your farm becomes a finalist for an environmental sustainability award. How do you celebrate the achievement?",
    options: [
      {
        text: "Organize a community event to share sustainability practices.",
        nextIndex: 67,
      },
      {
        text: "Keep the celebration low-key to focus on continuous improvement.",
        nextIndex: 68,
      },
      {
        text: "Invite local schools to visit the farm and learn about sustainability.",
        nextIndex: 69,
      },
    ],
  },
  {
    text: "A local school requests a farm tour for educational purposes. How do you facilitate the tour?",
    options: [
      {
        text: "Design an interactive and educational tour showcasing farming processes.",
        nextIndex: 70,
      },
      {
        text: "Decline the request to avoid disruptions to daily farm operations.",
        nextIndex: 71,
      },
      {
        text: "Collaborate with local educators to develop a curriculum-integrated farm tour.",
        nextIndex: 72,
      },
    ],
  },
  {
    text: "You receive an unexpected offer to sell your farm at a lucrative price. What's your response?",
    options: [
      {
        text: "Consider the offer seriously, weighing financial benefits and personal attachment.",
        nextIndex: 73,
      },
      {
        text: "Reject the offer as the farm holds sentimental value beyond monetary considerations.",
        nextIndex: 74,
      },
      {
        text: "Negotiate with the buyer to ensure the farm's legacy is preserved.",
        nextIndex: 75,
      },
    ],
  },
  {
    text: "A major transportation route for your food supply chain is disrupted due to a natural disaster. How do you respond?",
    options: [
      { text: "Implement alternative transportation methods.", nextIndex: 4 },
      {
        text: "Rely on existing stockpiles until the route is restored.",
        nextIndex: 5,
      },
      { text: "Seek international aid for immediate relief.", nextIndex: 6 },
    ],
  },
  {
    text: "You discover a new farming technology that promises higher yields but is expensive to implement. What's your approach?",
    options: [
      {
        text: "Invest in the new technology to boost productivity.",
        nextIndex: 7,
      },
      { text: "Stick to traditional methods to save costs.", nextIndex: 8 },
      {
        text: "Conduct a cost-benefit analysis before making a decision.",
        nextIndex: 9,
      },
    ],
  },
  {
    text: "A drought threatens your crops. How do you mitigate the impact?",
    options: [
      { text: "Implement advanced irrigation techniques.", nextIndex: 10 },
      {
        text: "Encourage water conservation practices among farmers.",
        nextIndex: 11,
      },
      { text: "Develop drought-resistant crop varieties.", nextIndex: 12 },
    ],
  },
  {
    text: "Local communities express concern about the environmental impact of your farming practices. What's your response?",
    options: [
      {
        text: "Initiate sustainable farming practices to address environmental concerns.",
        nextIndex: 13,
      },
      {
        text: "Prioritize economic growth and ignore environmental concerns.",
        nextIndex: 14,
      },
      {
        text: "Engage in open dialogue with communities to find a balanced solution.",
        nextIndex: 15,
      },
    ],
  },
  {
    text: "A new pest is threatening your crops. How do you handle the situation?",
    options: [
      {
        text: "Implement a targeted pesticide to control the pest.",
        nextIndex: 16,
      },
      {
        text: "Explore natural and organic pest control methods.",
        nextIndex: 17,
      },
      {
        text: "Collaborate with researchers to develop pest-resistant crop varieties.",
        nextIndex: 18,
      },
    ],
  },
  {
    text: "Your farming equipment is outdated, affecting efficiency. What's your plan?",
    options: [
      {
        text: "Invest in modern farming equipment for increased efficiency.",
        nextIndex: 19,
      },
      {
        text: "Continue using existing equipment to save costs.",
        nextIndex: 20,
      },
      { text: "Explore leasing options for updated equipment.", nextIndex: 21 },
    ],
  },
  {
    text: "A neighboring farm is facing financial challenges. How do you respond?",
    options: [
      { text: "Offer assistance and share resources.", nextIndex: 22 },
      {
        text: "Focus on your farm's sustainability without involving in their challenges.",
        nextIndex: 23,
      },
      {
        text: "Collaborate on joint projects to improve both farms' conditions.",
        nextIndex: 24,
      },
    ],
  },
  {
    text: "You receive an offer to sell your farm's produce exclusively to a big corporation. What's your decision?",
    options: [
      { text: "Accept the offer for guaranteed income.", nextIndex: 25 },
      {
        text: "Continue selling to a variety of markets for diversification.",
        nextIndex: 26,
      },
      {
        text: "Negotiate with the corporation for better terms.",
        nextIndex: 27,
      },
    ],
  },
  {
    text: "New government regulations impact your farming practices. How do you adapt?",
    options: [
      {
        text: "Comply with the regulations to avoid legal issues.",
        nextIndex: 28,
      },
      { text: "Challenge the regulations through legal means.", nextIndex: 29 },
      {
        text: "Collaborate with other farmers to lobby for changes in regulations.",
        nextIndex: 30,
      },
    ],
  },
  {
    text: "Your farm is hit by a sudden market downturn affecting crop prices. How do you navigate this situation?",
    options: [
      {
        text: "Diversify your crops to appeal to different markets.",
        nextIndex: 31,
      },
      {
        text: "Negotiate with buyers for better pricing terms.",
        nextIndex: 32,
      },
      { text: "Explore alternative markets or export options.", nextIndex: 33 },
    ],
  },
  {
    text: "A new technology promises to automate some of your farming tasks. What's your approach?",
    options: [
      {
        text: "Embrace the technology for increased efficiency.",
        nextIndex: 34,
      },
      {
        text: "Stick to manual methods to preserve traditional practices.",
        nextIndex: 35,
      },
      {
        text: "Gradually adopt the technology after thorough testing.",
        nextIndex: 36,
      },
    ],
  },
  {
    text: "You face a shortage of skilled labor on your farm. How do you address this issue?",
    options: [
      {
        text: "Invest in training programs for existing staff.",
        nextIndex: 37,
      },
      {
        text: "Hire skilled workers from outside the local community.",
        nextIndex: 38,
      },
      {
        text: "Collaborate with educational institutions for skilled labor recruitment.",
        nextIndex: 39,
      },
    ],
  },
  {
    text: "A rare disease is affecting your livestock. How do you handle the health crisis?",
    options: [
      {
        text: "Implement quarantine measures to prevent the disease spread.",
        nextIndex: 40,
      },
      {
        text: "Consult with veterinary experts to find a cure.",
        nextIndex: 41,
      },
      {
        text: "Consider culling affected animals to prevent further spread.",
        nextIndex: 42,
      },
    ],
  },
  {
    text: "You receive an opportunity to participate in an agricultural innovation competition. How do you approach it?",
    options: [
      {
        text: "Develop a groundbreaking idea and actively participate.",
        nextIndex: 43,
      },
      {
        text: "Pass on the opportunity as it may distract from daily operations.",
        nextIndex: 44,
      },
      {
        text: "Collaborate with other farmers to form a competitive team.",
        nextIndex: 45,
      },
    ],
  },
  {
    text: "Your innovative farming practices receive recognition, and you're invited to speak at a major agricultural conference. How do you prepare?",
    options: [
      {
        text: "Thoroughly research and prepare a detailed presentation.",
        nextIndex: 46,
      },
      {
        text: "Decline the invitation as public speaking is not your strength.",
        nextIndex: 47,
      },
      {
        text: "Collaborate with a public speaking coach to improve your presentation skills.",
        nextIndex: 48,
      },
    ],
  },
  {
    text: "A dispute arises with a neighboring farm over water rights. How do you handle the situation?",
    options: [
      {
        text: "Engage in a legal resolution process to determine water rights.",
        nextIndex: 49,
      },
      {
        text: "Initiate open communication and negotiation with the neighboring farmer.",
        nextIndex: 50,
      },
      {
        text: "Seek mediation from a third party to resolve the dispute.",
        nextIndex: 51,
      },
    ],
  },
  {
    text: "Your farm is selected as a pilot for a government-supported sustainability program. How do you participate?",
    options: [
      {
        text: "Actively engage and implement sustainable practices on your farm.",
        nextIndex: 52,
      },
      {
        text: "Opt out of the program to maintain full control over your farming decisions.",
        nextIndex: 53,
      },
      {
        text: "Collaborate with other participating farms to share best practices.",
        nextIndex: 54,
      },
    ],
  },
  {
    text: "A new social media campaign criticizes your farming methods. How do you respond?",
    options: [
      {
        text: "Launch a counter-campaign to address misconceptions and educate the public.",
        nextIndex: 55,
      },
      {
        text: "Ignore the campaign, believing that actions speak louder than words.",
        nextIndex: 56,
      },
      {
        text: "Engage with critics in a constructive dialogue to address concerns.",
        nextIndex: 57,
      },
    ],
  },
  {
    text: "A severe storm damages your crops and infrastructure. How do you rebuild?",
    options: [
      {
        text: "Utilize insurance funds to expedite the rebuilding process.",
        nextIndex: 58,
      },
      {
        text: "Seek assistance from the local community in a collective rebuilding effort.",
        nextIndex: 59,
      },
      {
        text: "Implement preventive measures to better withstand future storms.",
        nextIndex: 60,
      },
    ],
  },
  {
    text: "You receive an offer to collaborate with a tech company for implementing smart farming solutions. How do you proceed?",
    options: [
      {
        text: "Embrace the collaboration for technological advancement on your farm.",
        nextIndex: 61,
      },
      {
        text: "Decline the offer to maintain the farm's traditional practices.",
        nextIndex: 62,
      },
      {
        text: "Negotiate terms to ensure the collaboration aligns with your farming values.",
        nextIndex: 63,
      },
    ],
  },
  {
    text: "A rare opportunity arises to participate in an international agricultural expo. How do you showcase your farm?",
    options: [
      {
        text: "Create an impressive exhibition highlighting your farm's innovations.",
        nextIndex: 64,
      },
      {
        text: "Pass on the opportunity to avoid the challenges of international exposure.",
        nextIndex: 65,
      },
      {
        text: "Collaborate with other farmers to create a collective display at the expo.",
        nextIndex: 66,
      },
    ],
  },
  {
    text: "Your farm becomes a finalist for an environmental sustainability award. How do you celebrate the achievement?",
    options: [
      {
        text: "Organize a community event to share sustainability practices.",
        nextIndex: 67,
      },
      {
        text: "Keep the celebration low-key to focus on continuous improvement.",
        nextIndex: 68,
      },
      {
        text: "Invite local schools to visit the farm and learn about sustainability.",
        nextIndex: 69,
      },
    ],
  },
  {
    text: "A local school requests a farm tour for educational purposes. How do you facilitate the tour?",
    options: [
      {
        text: "Design an interactive and educational tour showcasing farming processes.",
        nextIndex: 70,
      },
      {
        text: "Decline the request to avoid disruptions to daily farm operations.",
        nextIndex: 71,
      },
      {
        text: "Collaborate with local educators to develop a curriculum-integrated farm tour.",
        nextIndex: 72,
      },
    ],
  },
  {
    text: "You receive an unexpected offer to sell your farm at a lucrative price. What's your response?",
    options: [
      {
        text: "Consider the offer seriously, weighing financial benefits and personal attachment.",
        nextIndex: 73,
      },
      {
        text: "Reject the offer as the farm holds sentimental value beyond monetary considerations.",
        nextIndex: 74,
      },
      {
        text: "Negotiate with the buyer to ensure the farm's legacy is preserved.",
        nextIndex: 75,
      },
    ],
  },
];

function makeChoice(optionIndex) {
  const chosenOption =
    questionsData[currentQuestionIndex].options[optionIndex - 1];
  currentQuestionIndex = chosenOption.nextIndex;
  updateStory();
}

function updateStory() {
  const storyTextElement = document.getElementById("story-text");
  const optionsContainer = document.getElementById("options-container");

  if (currentQuestionIndex < questionsData.length) {
    const currentQuestion = questionsData[currentQuestionIndex];
    storyTextElement.textContent = currentQuestion.text;

    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.textContent = option.text;
      button.onclick = () => makeChoice(index + 1);
      optionsContainer.appendChild(button);
    });
  } else {
    storyTextElement.textContent =
      "You have reached the end of the game, I am currently still developing this with more questions  \n I hope you found it to be interesting";
    optionsContainer.innerHTML = "";
  }
}
updateStory();
