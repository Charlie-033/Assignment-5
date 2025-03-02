document.getElementById('discover-new').addEventListener('click', function(e){
    e.preventDefault();
    window.location.href = "index2.html"
})


const completeBtn = document.getElementById('complete-btn');
completeBtn.addEventListener('click', function(e){
    e.preventDefault();
    alert('Board Updated Successfully')
    completeBtn.classList.add('disable')
    const remainAssigned = convertTaskAssigned - 1;
    document.getElementById("task-assigned").innerText = remainAssigned;
    const updateTask = convertTaskCompleted + 1;
    document.getElementById("task-complete").innerText = updateTask;


    const historyCard = document.createElement("p");
    historyCard.classList.add('history-tab');
    historyCard.innerHTML = `You have completed the ${Card1} at 4:13PM`
    historyDiv.appendChild(historyCard)

})
const completeBtn2 = document.getElementById('complete-btn-2');
completeBtn2.addEventListener('click', function(e){
    e.preventDefault();
    alert('Board Updated Successfully')
    completeBtn2.classList.add('disable')
    const remainAssigned = convertTaskAssigned - 1;
    document.getElementById("task-assigned").innerText = remainAssigned;
    const updateTask = convertTaskCompleted + 1;
    document.getElementById("task-complete").innerText = updateTask;


    const historyCard = document.createElement("p");
    historyCard.classList.add('history-tab');
    historyCard.innerHTML = `You have completed the ${Card2} at 4:13PM`
    historyDiv.appendChild(historyCard)

})