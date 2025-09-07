export interface BlogResponse{
    id: string
    title: string
    slug: string
    content: string
    thumbnail_url: string | null
    author: number
    created_at: string
    likes_count: number
    comments_count: number
    bookmarks_count: number
    views: number
    tags: string[]
}

export interface BlogContentResponse{
    title: string
    content: string
    author: number
    created_at: string
}