import { Servicee } from "./servicee";
import { User } from "./user";

export class Feedback
{
   id:number;
   message:string;
   creationDate:Date;
   user: any=new User();
   service:any=new Servicee();

}