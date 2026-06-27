import { useState ,useEffect } from "react";

function useFetchUser(){

     const [user, setUser] = useState({ name: "dummy", avatar_url: null });
  async function fetchUser() {
    const data = await fetch("https://api.github.com/users/vikashasm");
    const user = await data.json();
    setUser(user);
  }
  useEffect(() => {
    fetchUser();
  }, []);



  return user
}

export default useFetchUser