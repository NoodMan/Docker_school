import { useTokenStore } from "../../stores/token";
import { useProfStore } from "../../stores/ProfStore"


export default async function ProfList() {
    const tokenStore = useTokenStore();
    const profStore = useProfStore();
    let response = await fetch("http://127.0.0.1:8000/api/users",{
    method: "GET",
    headers: {
        Authorization: `Bearer ${tokenStore.token}`,
    }
    }).then((r) => r.json()).catch();
    console.log("liste des prof", response);
    console.log("hydra", response["hydra:member"]);
    
    profStore.prof = response["hydra:member"].filter((o:{roles:String[]}) => o.roles.includes("ROLE_TEACHER"));
    
    return response;   
}