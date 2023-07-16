// function postas( firstapi )
// {
//      let date
//      let http=new XMLHttpRequest()
//      http.open("GET","https://jsonplaceholder.typicode.com/posts")
//      http.send()
//      http.addEventListener("readystatechange",function()
//      {
//           if(http.readyState==4&&http.status==200)
//           {
//                 date =JSON.parse(http.response)
//           }
//           console.log(date)
//           console.log("postes")
//           firstapi()
     
//      })
// }
// function comments(secoapi)
// {
//      let date
//      let http=new XMLHttpRequest()
//      http.open("GET","https://jsonplaceholder.typicode.com/comments")
//      http.send()
//      http.addEventListener("readystatechange",function()
//      {
//           if(http.readyState==4&&http.status==200)
//           {
//                 date =JSON.parse(http.response)
//           }
//           console.log(date,"comments")
//           console.log("comments")
//           secoapi()
     
//      })
// }
// function albums(thirdapi)
// {
//      let date
//      let http=new XMLHttpRequest()
//      http.open("GET","https://jsonplaceholder.typicode.com/albums")
//      http.send()
//      http.addEventListener("readystatechange",function()
//      {
//           if(http.readyState==4&&http.status==200)
//           {
//                 date =JSON.parse(http.response)
//           }
//           console.log(date)
//           console.log("albums")
//           thirdapi()
     
//      })
// }
// function todos()
// {
//      let date
//      let http=new XMLHttpRequest()
//      http.open("GET","https://jsonplaceholder.typicode.com/todos")
//      http.send()
//      http.addEventListener("readystatechange",function()
//      {
//           if(http.readyState==4&&http.status==200)
//           {
//                 date =JSON.parse(http.response)
//           }
//           console.log(date)
//           console.log("todos")
     
//      })
// }
// postas( function(){
//      comments( function(){
//           albums( function(){todos()
//           } )
//      } )
// } )

// $(".btn").click(  function(){
//      $(".test").slideToggle(1000,function(){
//           $(".test").css({background:"#09c",margin:"20px"})
//      })
// })

// const form = document.querySelector('#todo-form');
// const input = document.querySelector('#todo-input');
// const list = document.querySelector('#todo-list');

// let todos = [];

// form.addEventListener('submit', (event) => {
//   event.preventDefault();

//   const todoText = input.value.trim();
//   if (todoText === '') return;

//   const todo = {
//     id: Date.now(),
//     text: todoText,
//     done: false
//   };

//   todos.push(todo);
//   input.value = '';
//   renderTodos();
// });



// function renderTodos() {
//     list.innerHTML = '';
//     todos.forEach((todo) => {
//       const li = document.createElement('li');
//       li.classList.add('todo');
//       li.innerHTML = `
//         <input type="checkbox" id="${todo.id}" ${todo.done ? 'checked' : ''}>
//         <label for="${todo.id}" class="todo-text">${todo.text}</label>
//         <button data-id="${todo.id}" class="mx-3">Delete</button>
//       `;
//       const deleteBtn = li.querySelector('button');
//       deleteBtn.addEventListener('click', deleteTodo);
//       const checkbox = li.querySelector('input');
//       checkbox.addEventListener('change', toggleTodo);
//       list.appendChild(li);
//     });
//   }
  


// function deleteTodo(event) {
//     const todoId = Number(event.currentTarget.dataset.id);
//     todos = todos.filter((todo) => todo.id !== todoId);
//     renderTodos();
//   }
  
//   function toggleTodo(event) {
//     const todoId = Number(event.currentTarget.id);
//     const todo = todos.find((todo) => todo.id === todoId);
//     todo.done = !todo.done;
//     renderTodos();
//   }
  
//   renderTodos();


let http = new XMLHttpRequest();
let ourmauls=[];
http.open("GET","https://www.themealdb.com/api/json/v1/1/categories.php")
http.send()
http.addEventListener("readystatechange",function(){
     if(http.readyState==4 && http.status==200)
     {
        ourmauls= JSON.parse(http.response).meals
       console.log(ourmauls)
       showFood()
     }     
})


function showFood()
{
    boxshow=``
    for(let i=0;i<ourmauls.length;i++)
    {
       boxshow +=`  <div class="col-lg-4 mb-3">
       <div class="item text-center">
        <img src="`+ourmauls[i].strMealThumb+`" alt="img" class="img-fluid mb-3">
        <h5>`+ourmauls[i].strMeal+`</h5>
       </div>
     </div> `   
    }    
    document.getElementById("foods").innerHTML=boxshow;  
}