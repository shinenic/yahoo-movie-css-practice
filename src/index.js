for(var selectedOption=1,options=document.querySelectorAll(".options > div"),i=0;i<options.length;i++)options[i].addEventListener("click",function(t){return function(){t!==selectedOption&&(options[t].classList.toggle("options--active"),options[selectedOption].classList.toggle("options--active"),selectedOption=t)}}(i));