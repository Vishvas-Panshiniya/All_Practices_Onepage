// api fetch in this function
let pagelimit = 10;
let maxlength;
const load = async () => {
    let url = `https://jsonplaceholder.typicode.com/posts`
    let myobject = await(await fetch(url)).json();
    maxlength = myobject.length;
    // console.log(maxlength);
    const table = document.getElementById("tbl1");
    let data = `<thead>
        <th>UserID</th>
        <th>ID</th>
        <th>Title</th>
        <th>Body</th>
        <th>Show details</th>
        </thead>`

    myobject.slice(pagelimit-10,pagelimit).forEach(element => {
        data += (`<tr><td>${element.userId}</td>
            <td>${element.id}</td>
            <td>${element.title}</td>
            <td>${element.body}</td>
            <td>
                <div class='showdata'><a href="/login/dashboard/posts/${element.id}">Show Detail</a></div>
            </td></tr>`)
    });
    table.innerHTML = data;
    document.getElementById("no").textContent = pagelimit/10;
}


// pagination
const firstpage = () => {
    pagelimit = 10;
        load();
}

const pervious = () => {
    if(pagelimit != 10){
        pagelimit -= 10;
        load();
    }
}

const next = () => {
    if(pagelimit != maxlength){
        pagelimit += 10;
        load();
    }
}

const lastpage = () => {
    pagelimit = maxlength;
        load();
}