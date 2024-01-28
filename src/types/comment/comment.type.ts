export type Comment = {
    id: number,
    author: string,
    date: string,
    content: string,
    likes: number,
    dislikes: number,
    articleId: number,
    parentId: number,
}