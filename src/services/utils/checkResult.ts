export function checkResult(result:any){
    if(result === null){
        throw { code: "Conflict", message: "Cannot find"}
    }
}