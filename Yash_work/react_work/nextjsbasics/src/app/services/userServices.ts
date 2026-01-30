export default async function getUser(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    if(!res.ok){
        throw Error("unable to fetch")
    }
    return res.json();
}