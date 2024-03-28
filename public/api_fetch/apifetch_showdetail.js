 // id pass call load function
 const id = window.location.pathname.split('/').pop();
 console.log(id);
 const load = async () => {
     let url1 = `https://jsonplaceholder.typicode.com/posts/${id}`
     let myobject1 = await(await fetch(url1)).json();
     const table1 = document.getElementById("tbl1");
     let data1 = `<thead>
         <th>UserID</th>
         <th>ID</th>
         <th>Title</th>
         <th>Body</th>
         </thead>`

     data1 += (`<tr><td>${myobject1.userId}</td>
         <td>${myobject1.id}</td>
         <td>${myobject1.title}</td>
         <td>${myobject1.body}</td><tr>`)

     table1.innerHTML = data1;
 }
 
 // onclick event show comments function use
 const showcomment = async () => {
     let url2 = `https://jsonplaceholder.typicode.com/comments?postId=${id}`
     let myobject2 = await(await fetch(url2)).json();
     const table2 = document.getElementById("tbl2");
     let data2 = `<thead>
         <th>PostID</th>
         <th>ID</th>
         <th>Name</th>
         <th>Email</th>
         <th>Body</th>
         </thead>`;
         
     myobject2.forEach(element => {
         data2 += (`<tr><td>${element.postId}</td>
             <td>${element.id}</td>
             <td>${element.name}</td>
             <td>${element.email}</td>
             <td>${element.body}</td></tr>`)
     });
     table2.innerHTML = data2;
     table2.style.display = "block";
 }