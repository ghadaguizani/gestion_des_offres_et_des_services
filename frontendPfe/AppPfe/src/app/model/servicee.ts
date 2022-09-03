import { Category } from "../enum/category";
import { User } from "./user";
import { SubCategory } from "../enum/sub-category";
import { Feedback } from "./feedback";
export class Servicee {
    
    id:number;
    description:string;
    category:Category;
    subCategory:SubCategory;
    creationDate:Date;
    location:string;
    score:number;
    picture:string;
    enabled:boolean;
    user: any=new User();
    feedbacks:Feedback[];

}