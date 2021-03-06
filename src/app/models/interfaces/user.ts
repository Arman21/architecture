import { userWorkPlace } from "./job";

export interface User {
  name: string;
  surName: string
  age: number;
  birthday?: string;
  gender?: string;
  country: string;
  city: string;
  phoneNumber: string;
  emailAddress: string;
  avatar: string;
  workPlace?: userWorkPlace;
  wifeOrHusband: number | null;
  children?: boolean;
  isAdmin: boolean;
  id: number | string;
  hobbies: string[];
  favoriteColor: string;
  human?: boolean
}
