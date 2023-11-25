import { User } from "./user";

export class Note {
  id?: number;
  title: string = "";
  content: string = "";
  creator?: User;
}
