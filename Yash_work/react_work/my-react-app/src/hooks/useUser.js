import { useQuery } from "@tanstack/react-query";
// import toast from "react-hot-toast";

const URL = import.meta.env.VITE_API_URL;

function useUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      console.log("API CALLED");
      const res = await fetch(URL);
      if (!res.ok) {
        throw new Error("Failed to fetch users");
      }
      
      console.log("2")
      return res.json();
    },
    retry:true,
    
    
  //    onSuccess: () => {
  //     console.log("YASHMC!!")
  //   toast.success("Users loaded successfully");
  // },
  //   onError: () => {
  //     toast.error("Failed to load users");
  //     console.log("YASH")
  //   },
  staleTime:10000,
    
  
  });
}

export default useUsers;
