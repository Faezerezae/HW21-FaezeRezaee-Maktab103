
export interface IUser {
    userId: number;
    firstName: string;
    lastName: string;
    image: string;
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
