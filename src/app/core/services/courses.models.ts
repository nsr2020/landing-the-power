export interface Course {

    id:string;
    title:string;
    description: string;
    image: string;
    price:number;
    duration?: number;
    isOnline:boolean;
    numVacancies:number;
}