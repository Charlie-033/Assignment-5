document.getElementById('back-btn').addEventListener('click', function(e){
    e.preventDefault();
    window.location.href = "index.html"
})

document.getElementById("discover-new").addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "index2.html";
});

// RGBA value

function randomColor(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 8; i++) {
      color += hex[Math.floor(Math.random()*16)];  
    }
    return color;
  };