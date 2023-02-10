export class Profile {
  id?: string;
  nickname: string;
  password: string;
  imageProfile: string;
  occupation?: string | null;
  createdAt?: Date;
  updatedAt?: Date;
}
