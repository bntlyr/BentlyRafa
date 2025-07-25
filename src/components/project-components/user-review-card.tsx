import './user-review-card.css'

// Card Component for User-Reviews

type UserReviewProps = {
    userAvatar?: string
    userName: string
    userTitle?: string
    userReview: string
}

export default function UserReview({userAvatar, userName, userTitle, userReview}: UserReviewProps) {
    return (
        <div className="review-container">
            <div className="review-header">
                <img src={userAvatar} alt="user-avatar"/>
                <div className="user-info">
                    <h1 className="user-name">{userName}</h1>
                    {/* only if available, do not display if no data is found*/}
                    <h3 className="user-title">{userTitle}</h3> 
                </div>
            </div>
            <div className="review-content">
                <p className="review-text">
                    {userReview}
                </p>
            </div>
        </div>
    );
}