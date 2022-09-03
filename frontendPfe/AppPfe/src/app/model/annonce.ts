import { Category } from "../enum/category";
import { SubCategory } from "../enum/sub-category";
import { User } from "./user";

export class Annonce{
    id:number;
    category:Category;
    subCategory:SubCategory;
    description:string;
    location:string;
    creationDate:Date;
    enabled:boolean;
    user:any=new User();
}