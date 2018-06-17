
export async function getUsers() {
    const API_URI = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(API_URI);
    const users = await response.json();
    return users;
}

