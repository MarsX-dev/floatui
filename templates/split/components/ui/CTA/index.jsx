import Image from 'next/image'
import SectionWrapper from "../../SectionWrapper"
import NavLink from "../NavLink"
import cta_image from '../../../public/cta-img.svg'

const CTA = () => {
    return (
        <SectionWrapper id="cta" className="overflow-hidden">
            <div className="custom-screen flex flex-col-reverse gap-x-12 justify-between md:flex-row md:items-center">
                <div className="flex-none max-w-xl mt-12 space-y-3 md:mt-0">
                    <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Simple, powerful ways to increase website users
                    </h2>
                    <p className="text-gray-600">
                        Split is a new, revolutionary & cost-effective way to grow your website's traffic. It's a super-simple, one-time fee that will make your site rank higher on Google and bring in more visitors. We're so confident, we offer a 100% money back guarantee.
                    </p>
                    <div className="pt-1">
                        <NavLink
                            href="/pricing"
                            className="inline-flex items-center gap-x-2 font-medium text-sm text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 "
                        >
                            Try it out
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                            </svg>
                        </NavLink>
                    </div>
                </div>
                <div className="flex-none w-full md:max-w-xl">
                    <Image src={cta_image} alt="chart" className='w-full shadow-lg rounded-lg border' />
                </div>
            </div>
        </SectionWrapper>
    )
}

export default CTA