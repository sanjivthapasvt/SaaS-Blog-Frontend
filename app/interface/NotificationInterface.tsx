export interface NotificationResponse{
    id: number
    notification_type: string
    message: string
    triggered_by_user_id: number
    created_at: string
    blog_id: string | null
}
