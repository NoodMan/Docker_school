import { useTokenStore } from "../../stores/token";
import { useNoteStore } from "../../stores/NoteEleve";


export default async function NoteList() {
    const tokenStore = useTokenStore();
    const noteStore = useNoteStore();
    let response = await fetch("http://127.0.0.1:8000/api/notes",{
    method: "GET",
    headers: {
        Authorization: `Bearer ${tokenStore.token}`,
    }
    }).then((r) => r.json()).catch();
    console.log("liste des matières", response);
    console.log("hydra", response["hydra:member"]);
    
    noteStore.note = response["hydra:member"]
    

    return response;   
}