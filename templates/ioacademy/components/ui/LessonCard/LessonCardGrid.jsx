import Link from "next/link"
import { Duration, Title, SubTitle } from "./"

export const LessonCardGrid = ({ idx, item: { thumbnail, title, description, duration, slug } }) => {

    return (
        <div className="space-y-2 sm:max-w-sm">
            <Link href={`/tutorials/cs50/${slug}`}>
                <img src={thumbnail} className="rounded-lg w-full" alt={title} />
            </Link>
            <div className="pt-2 text-sm flex items-center justify-between">
                <SubTitle>Lesson {idx + 1}</SubTitle>
                <Duration>{duration}</Duration>
            </div>
            <Title>
                <Link href={`/tutorials/cs50/${slug}`}>
                    {title}
                </Link>
            </Title>
            <p>
                {description}
            </p>
        </div>
    )
}