document.getElementById("discover-new").addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "index2.html";
});

// Button 1
const completeBtn = document.getElementById("complete-btn");
completeBtn.addEventListener("click", function (e) {
  e.preventDefault();
  alert("Board Updated Successfully");
  completeBtn.classList.add("disabled");

  let convertTaskAssigned = parseInt(
    document.getElementById("task-assigned").innerText
  );
  let convertTaskCompleted = parseInt(
    document.getElementById("task-complete").innerText
  );

  document.getElementById("task-assigned").innerText = convertTaskAssigned - 1;
  document.getElementById("task-complete").innerText = convertTaskCompleted + 1;

  if((convertTaskCompleted + 1) === 28){
    alert('Congratulations!! You have completed all the current task.')
  }

  function liveTime() {
    let liveTime = new Date();
    return liveTime.toLocaleString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  }

  let Card1 =  document.getElementById("card-1").innerText;

  const historyCard = document.createElement("p");
  historyCard.classList.add("history-tab");
  historyCard.innerHTML = `You have completed the ${Card1} at ${liveTime()}`;

  const historyDiv = document.getElementById("history-info");
  historyDiv.appendChild(historyCard);
});

// Button 2

const completeBtn2 = document.getElementById("complete-btn-2");
completeBtn2.addEventListener("click", function (e) {
  e.preventDefault();
  alert("Board Updated Successfully");
  completeBtn2.classList.add("disabled");

  let convertTaskAssigned = parseInt(
    document.getElementById("task-assigned").innerText
  );
  let convertTaskCompleted = parseInt(
    document.getElementById("task-complete").innerText
  );

  document.getElementById("task-assigned").innerText = convertTaskAssigned - 1;
  document.getElementById("task-complete").innerText = convertTaskCompleted + 1;

  if((convertTaskCompleted + 1) === 28){
    alert('Congratulations!! You have completed all the current task.')
  }

  function liveTime() {
    let liveTime = new Date();
    return liveTime.toLocaleString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  }

  let Card2 =  document.getElementById("card-2").innerText;

  const historyCard = document.createElement("p");
  historyCard.classList.add("history-tab");
  historyCard.innerHTML = `You have completed the ${Card2} at ${liveTime()}`;

  const historyDiv = document.getElementById("history-info");
  historyDiv.appendChild(historyCard);
});

// Button 3

const completeBtn3 = document.getElementById("complete-btn-3");
completeBtn3.addEventListener("click", function (e) {
  e.preventDefault();
  alert("Board Updated Successfully");
  completeBtn3.classList.add("disabled");

  let convertTaskAssigned = parseInt(
    document.getElementById("task-assigned").innerText
  );
  let convertTaskCompleted = parseInt(
    document.getElementById("task-complete").innerText
  );

  document.getElementById("task-assigned").innerText = convertTaskAssigned - 1;
  document.getElementById("task-complete").innerText = convertTaskCompleted + 1;

  if((convertTaskCompleted + 1) === 28){
    alert('Congratulations!! You have completed all the current task.')
  }

  function liveTime() {
    let liveTime = new Date();
    return liveTime.toLocaleString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  }

  let Card3 =  document.getElementById("card-3").innerText;

  const historyCard = document.createElement("p");
  historyCard.classList.add("history-tab");
  historyCard.innerHTML = `You have completed the ${Card3} at ${liveTime()}`;

  const historyDiv = document.getElementById("history-info");
  historyDiv.appendChild(historyCard);
});

// Button 4

const completeBtn4 = document.getElementById("complete-btn-4");
completeBtn4.addEventListener("click", function (e) {
  e.preventDefault();
  alert("Board Updated Successfully");
  completeBtn4.classList.add("disabled");

  let convertTaskAssigned = parseInt(
    document.getElementById("task-assigned").innerText
  );
  let convertTaskCompleted = parseInt(
    document.getElementById("task-complete").innerText
  );

  document.getElementById("task-assigned").innerText = convertTaskAssigned - 1;
  document.getElementById("task-complete").innerText = convertTaskCompleted + 1;

  if((convertTaskCompleted + 1) === 28){
    alert('Congratulations!! You have completed all the current task.')
  }

  function liveTime() {
    let liveTime = new Date();
    return liveTime.toLocaleString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  }

  let Card4 =  document.getElementById("card-4").innerText;

  const historyCard = document.createElement("p");
  historyCard.classList.add("history-tab");
  historyCard.innerHTML = `You have completed the ${Card4} at ${liveTime()}`;

  const historyDiv = document.getElementById("history-info");
  historyDiv.appendChild(historyCard);
});

// Button 5

const completeBtn5 = document.getElementById("complete-btn-5");
completeBtn5.addEventListener("click", function (e) {
  e.preventDefault();
  alert("Board Updated Successfully");
  completeBtn5.classList.add("disabled");

  let convertTaskAssigned = parseInt(
    document.getElementById("task-assigned").innerText
  );
  let convertTaskCompleted = parseInt(
    document.getElementById("task-complete").innerText
  );

  document.getElementById("task-assigned").innerText = convertTaskAssigned - 1;
  document.getElementById("task-complete").innerText = convertTaskCompleted + 1;

  if((convertTaskCompleted + 1) === 28){
    alert('Congratulations!! You have completed all the current task.')
  }

  function liveTime() {
    let liveTime = new Date();
    return liveTime.toLocaleString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  }

  let Card5 =  document.getElementById("card-5").innerText;

  const historyCard = document.createElement("p");
  historyCard.classList.add("history-tab");
  historyCard.innerHTML = `You have completed the ${Card5} at ${liveTime()}`;

  const historyDiv = document.getElementById("history-info");
  historyDiv.appendChild(historyCard);
});

// Button 6

const completeBtn6 = document.getElementById("complete-btn-6");
completeBtn6.addEventListener("click", function (e) {
  e.preventDefault();
  alert("Board Updated Successfully");
  completeBtn6.classList.add("disabled");

  let convertTaskAssigned = parseInt(
    document.getElementById("task-assigned").innerText
  );
  let convertTaskCompleted = parseInt(
    document.getElementById("task-complete").innerText
  );

  document.getElementById("task-assigned").innerText = convertTaskAssigned - 1;
  document.getElementById("task-complete").innerText = convertTaskCompleted + 1;

  if((convertTaskCompleted + 1) === 28){
    alert('Congratulations!! You have completed all the current task.')
  }

  function liveTime() {
    let liveTime = new Date();
    return liveTime.toLocaleString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  }

  let Card6 =  document.getElementById("card-6").innerText;

  const historyCard = document.createElement("p");
  historyCard.classList.add("history-tab");
  historyCard.innerHTML = `You have completed the ${Card6} at ${liveTime()}`;

  const historyDiv = document.getElementById("history-info");
  historyDiv.appendChild(historyCard);
});

// Bg-color-change

document.getElementById("theme-btn").addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector('body').style.backgroundColor = randomColor();
})