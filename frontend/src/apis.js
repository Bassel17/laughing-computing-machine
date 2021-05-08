const apiUrl = "http://localhost:1337";

export async function getTodos(){
    const response = await fetch(`${apiUrl}/todos`);
    return response.json();
}

export async function addTodo(text){
    const response = await fetch(`${apiUrl}/todos`,{
        method:"POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            text
        })
    });
    return response.json();
}