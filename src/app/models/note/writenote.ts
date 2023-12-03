import { User } from "../user/user";

export class WriteNote {
  id?: number;
  title: string = "";
  content: string = "";
  creator?: User;
}
