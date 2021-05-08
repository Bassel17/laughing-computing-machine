const apiUrl = "http://localhost:1337";

export async function getTodos(){
    const response = await fetch(`${apiUrl}/todos`);
    return response.json();
}