const title = document.getElementById("heading");

if (title instanceof HTMLElement) {
  title.innerHTML = "My Blogs";
  title.style.backgroundColor="yellow"
}   

const list=document.querySelectorAll("li");
list.forEach(it => {
    if(it instanceof HTMLElement){
        it.innerHTML=it.innerHTML + " Element";
    }
});
const btn = document.querySelector("#btn") as HTMLButtonElement;
const handleclick = (event: MouseEvent): void => {
    console.log('I am clicked');
}
btn.addEventListener("click", handleclick);

// async function fetchUsers(): Promise<User[]> {
    // try{
        //   const res = await fetch("./tempdata.json");
        //   const data: User[] = await res.json();
        //   return data;
        // }
// catch(error:unknown){
//     if(error instanceof Error){
    //         console.log("failed to fetch :"+ error.message)
    //         return User[]''
    //     }
    // }
    // }
    // fetchUsers().then(users => {
        //   console.log(users);
        // });
        
type User = {
    id: number,
    name: string,
    role: string,
    active: boolean
};
type Result<T> =| { success: true; data: T } | { success: false; error: string };


  async function fetchUsers(): Promise<Result<User[]>> {
  try {
    const res = await fetch("./tempdata.json");

    if (!res.ok) {
      return { success: false, error: "Failed to fetch users" };
    }

    const data: User[] = await res.json();
    return { success: true, data };
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { success: false, error: error.message };
    }
    return { success: false, error: "Unknown error" };
  }
}
async function fun(){
    const result = await fetchUsers();

if (result.success) {
  console.log(result.data);
} else {
  console.log(result.error);
}



}
fun();