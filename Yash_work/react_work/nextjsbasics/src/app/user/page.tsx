import getUser from "../services/userServices";
export default async function UserPage() {
 
  const user = await getUser();
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
