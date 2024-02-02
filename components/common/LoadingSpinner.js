export const LoadingSpinner = ({className="h-screen"}) => {
    return (
        <div className={`flex justify-center items-center ${className}`}>
            <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-text-btn"></div>
        </div>
    )
}