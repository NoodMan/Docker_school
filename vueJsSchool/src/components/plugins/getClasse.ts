import { useTokenStore } from "../../stores/token";
import { useClasseStore } from "../../stores/ClasseStore";


export default async function classList() {
    const tokenStore = useTokenStore();
    const classeStore = useClasseStore();
    let response = await fetch("http://127.0.0.1:8000/api/school_classes",{
    method: "GET",
    headers: {
        Authorization: `Bearer ${tokenStore.token}`,
    }
    }).then((r) => r.json()).catch();
    console.log("liste des classes", response);

    classeStore.classes = response["hydra:member"];

    return response;   
}