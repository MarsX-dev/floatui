import Plyr from "plyr-react"
import "plyr-react/plyr.css"

// Some resources to help you understand more about the video player
// https://github.com/sampotts/plyr
// https://github.com/chintan9/plyr-react

const VideoPlayer = ({
    src,
    type,
    poster = "",
    autoplay = false,
    options = {},
}) => {

    return (
        <Plyr
            source={{
                type: "video",
                sources: [{
                    src,
                    type,
                }],
                poster: poster,
                autoplay
            }}
            options={options}
        />
    )
}

export default VideoPlayer