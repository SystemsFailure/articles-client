import { Comment } from "../comment/comment.type";

export type Article = {
    id: number,
    title: string;
    author: string;
    date: string;
    content: string;
    tags: string[];
    category: string;
    views: number;
    likes: number;
    comments: Comment[];
    relatedArticles: Article[];
    imageURL: string;
    isFeatured: boolean;
    isPublished: boolean;
    externalLink?: string;
    duration?: string;
    abstract?: string;
}