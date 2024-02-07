export interface IServerError {
  message: string;
}

export interface IShortUser {
    id: number;
    username: string;
  }

export interface IUser {
  userId?: number;
  firstName?: string;
  lastName?: string;
  image?: string;
  username?:string;
  email?:string;
}

export interface IPost {
  id: number;
  userId: number;
  title: string;
  body: string;
  tags: string[];
  reactions: number;
  user?: IUser;
  disableShowMore?: boolean;
}

export interface IComment {
  id?: number;
  postId?: number;
  body: string;
  user: IShortUser;
}
