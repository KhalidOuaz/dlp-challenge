export class Request{
    constructor(){}

    static async fetch(url,params: {method: string, body: any, headers: any, status:any, msg:any}){
        let req = await fetch(url, params);
        return await req.json();
    }
}