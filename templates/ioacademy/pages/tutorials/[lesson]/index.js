import Head from "next/head";
import GradientWrapper from "../../../components/GradientWrapper";
import NavLink from "../../../components/ui/NavLink";
import SectionWrapper from "../../../components/SectionWrapper";
import { LessonCardList } from "../../../components/ui/LessonCard";
import lessonsExamples from "../../../lessonExamples/lessons.json";

const Tutorial = () => {
  return (
    <>
      <Head>
        <title>Mastering computer science fundamentals - IO Academy</title>
      </Head>

      <GradientWrapper>
        <section>
          <div className='custom-screen text-gray-600 sm:text-center'>
            <div className='space-y-5 max-w-4xl sm:mx-auto'>
              <h1 className='text-4xl text-white font-extrabold sm:text-6xl'>
                Welcome to our computer science course
              </h1>
              <p className='text-gray-300 max-w-xl sm:mx-auto'>
                With our computer science course IO Academy gives you the
                knowledge and confidence you need to excel in software
                engineering, and more.
              </p>
              <div className='items-center gap-x-3 font-medium text-sm sm:flex sm:justify-center'>
                <NavLink
                  href='/#pricing'
                  className='block text-white bg-sky-500 hover:bg-sky-600 active:bg-sky-700'
                  scroll={false}>
                  Get full access
                </NavLink>
                <NavLink
                  href='#lessons'
                  className='block text-gray-100 bg-gray-700 hover:bg-gray-800 mt-3 sm:mt-0'
                  scroll={false}>
                  Browse lessons
                </NavLink>
              </div>
            </div>
          </div>
        </section>
      </GradientWrapper>
      <SectionWrapper className='mt-12 dark:mt-0'>
        <div id='lessons' className='max-w-screen-lg mx-auto px-4 md:px-8'>
          <h2 className='text-xl text-gray-800 dark:text-gray-50 font-semibold'>
            All lessons
          </h2>
          <ul className='mt-8 space-y-12 dark:divide-gray-800 sm:space-y-0 sm:divide-y'>
            {lessonsExamples.map((item, idx) => (
              <li key={idx} className='sm:py-8'>
                <LessonCardList idx={idx} item={item} />
              </li>
            ))}
          </ul>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Tutorial;
