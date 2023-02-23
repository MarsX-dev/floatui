import Link from "next/link"
import { Duration, Title, SubTitle } from "./"

export const LessonCardList = ({ idx, item: { thumbnail, title, description, duration, slug } }) => {

    return (
        <div className="gap-x-6 sm:flex">
            <Link
                href={`/tutorials/cs50/${slug}`}
                className="sm:max-w-[17rem]"
            >
                <img
                    src={thumbnail}
                    className="rounded-lg w-full"
                    alt={title}
                    loading="lazy"
                />
            </Link>
            <div className="space-y-2 pt-4 sm:pt-0">
                <div className="text-sm flex items-center justify-between">
                    <SubTitle>Lesson {idx + 1}</SubTitle>
                    <Duration className="sm:hidden">
                        {duration}
                    </Duration>
                </div>
                <Title>
                    <Link
                        href={`/tutorials/cs50/${slug}`}
                    >
                        {title}
                    </Link>
                </Title>
                <p className="max-w-xl text-gray-600 dark:text-gray-300 sm:line-clamp-2">
                    {description}
                </p>
                <Duration className="hidden sm:block">
                    {duration}
                </Duration>
            </div>
        </div>
    )
}