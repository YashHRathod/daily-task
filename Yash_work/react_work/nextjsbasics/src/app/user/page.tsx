export default async function UserPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users',{
    next: { revalidate: 10 }
  });
  const user = await res.json();
  // console.log(user);
  return (
    <div>
      {user && (
        <>
          <ul>
            {user.map((u:any) => {
               return <li key={u.name}>{u.name}</li>;
            })}
          </ul>
        </>
      )}
    </div>
  );
}
