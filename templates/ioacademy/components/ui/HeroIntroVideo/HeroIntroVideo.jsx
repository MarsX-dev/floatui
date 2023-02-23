import VideoPlayer from '../VideoPlayer'

const HeroIntroVideo = ({
    onClose
}) => {


    return (
        <div className="fixed inset-0 z-30 w-full h-full flex items-center justify-center">
            <div className="absolute inset-0 w-full h-full bg-black/50" onClick={onClose}></div>
            <div className="px-4 relative">
                <button
                    className="w-12 h-12 mb-5 rounded-full duration-150 bg-gray-800 hover:bg-gray-700 text-white"
                    onClick={onClose}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 m-auto">
                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                    </svg>
                </button>
                <div className="max-w-2xl">
                    <VideoPlayer
                        src="https://res.cloudinary.com/floatui/video/upload/v1673211729/cs50_h7vvpl.3gp"
                        type="video/mp4"
                        autoplay={true}
                    />
                </div>
            </div>
        </div>
    )
}

export default HeroIntroVideo