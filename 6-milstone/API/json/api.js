
  function dataLoad(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(Response => Response.json())
    .then(json => console.log(json))
  };

  function userLoad (){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data =>userDisplay(data))
  }
  function userDisplay(data){
      const ul = document.getElementById('users');
    for(let user of data ){
        const h3 = document.createElement ('h3')
        h3.innerText= ` name:${user.name }, Email:${user.email} phone:${user.phone}`;
        ul.appendChild(h3)
    }
  }
  function postLoad(){
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => console.log(data))
  }