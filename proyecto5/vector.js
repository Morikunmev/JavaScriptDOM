function sumar(v1,v2){
    const suma = []
    for(let x=0;x<v1.length;x++){
        suma.push(v1[x]+v2[x])
    }
    return suma
}
export {sumar as SumarVectores}