import { User } from "../user/user";

export class Note {
  id?: number;
  title: string = "";
  content: string = "";
  creator?: User;
}
