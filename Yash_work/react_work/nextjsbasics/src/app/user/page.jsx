export default async function User() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   console.log(res);
  const user = await res.json();
  return (
    <div>
      {user && (
        <>
          <ul>
            {user.map((u) => {
              return <li key={u.name}>{u.name}</li>;
            })}
          </ul>
        </>
      )}
    </div>
  );
}
