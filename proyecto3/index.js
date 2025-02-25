import validarClave,{sumar} from "./contraseña.js";

const resultado = document.querySelector("#resultado")
document.querySelector("#verificar").addEventListener("click",()=>{
    const clave = document.querySelector("#clave").value
    if(validarClave(clave)){
        resultado.textContent="Contraseña segura"
    }else{
        resultado.textContent = "Contraseña no segura"
    }
})