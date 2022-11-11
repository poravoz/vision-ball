window.onload = function() {
    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.classList.add("input");
    input.setAttribute("id", "input");
    input.setAttribute("placeholder", "Задайте своє питання")
    document.body.appendChild(input);
  
    let div = document.createElement("div");
    div.classList.add("div");
    div.setAttribute("id", "div");
    document.body.appendChild(div);
    
    let img = document.createElement("img");
    img.src = "https://vgif.ru/gifs/155/vgif-ru-26753.gif";
    img.classList.add("magic_ball");
    document.body.appendChild(img);
  
  
  
    var answers = ["Ні", "Безперечно", "Жодних сумнівів", "Безумовно так", "Можеш бути впевнений у цьому", 
  "Мені здається так", "Cкорiше за все", "Хороші перспективи", "Знаки кажуть - так", "Так", 
  "Поки не ясно, спробуй знову", "Запитай пізніше", "Краще не розповідати", "Зараз не можна передбачити", 
  "Сконцентруйся і запитай знову", "навіть не думай", "Моя відповідь ні", "За моїми даними – ні",
  "Перспективи не дуже добрі", "Дуже сумнівно"];
  
    img.onclick = function() {
      if(document.getElementById('input').value === '')
      {
        alert("Ви забули вказати відповідь");
      }
      else {
      var answer = answers[Math.floor(Math.random() * answers.length)];
      var ball = document.getElementById("div").innerHTML = answer;
      }
  
    }
  }
  
