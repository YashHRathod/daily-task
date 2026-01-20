import UserHook from "./UserHook"
import useUser from "../hooks/useUser"
function UserCount(){
    const {data,isPending,error}=useUser();
    if(isPending)return <h1>Counting data....</h1>
    if(error)return <h1>Error:{error.message}</h1>
    return <h1>{data&& data.length}</h1>
}
export default UserCount;