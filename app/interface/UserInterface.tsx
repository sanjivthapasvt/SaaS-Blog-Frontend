export interface UserResponse{
    id: number
    full_name: string
    profile_pic: string
}

export interface UserMeResponse{
    id: number
    username: string | null
    full_name: string
    profile_pic: string
    email: string
    joined_at: string
}