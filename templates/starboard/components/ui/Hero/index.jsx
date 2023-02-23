import Image from "next/image"
import SubscribeForm from "../SubscribeForm"
import previewImage from '../../../public/desktop-app-prview.png'
import LayoutEffect from "../../LayoutEffect"

const Hero = () => {

    return (
        <LayoutEffect isInviewState={{
            trueState: "opacity-100 -translate-y-0",
            falseState: "opacity-0 -translate-y-3"
        }}>
            <section className="py-28 overflow-hidden duration-300 ease-in">
                <div className="custom-screen items-center gap-12 text-gray-600 md:flex">
                    <div className='flex-none space-y-5 max-w-2xl'>
                        <h1 className="text-4xl text-gray-800 font-extrabold sm:text-5xl">
                            A Powerful Project Management Desktop App
                        </h1>
                        <p>
                            With complete software that enables your teams to interact, plan, evaluate, and manage daily activities, you can break down large projects, quickly, and easily.
                        </p>
                        <SubscribeForm />
                    </div>
                    <div className='flex-none mt-12 md:mt-0'>
                        <Image
                            src={previewImage}
                            alt="Starboard Desktop App"
                            className="w-full rounded-xl border shadow-lg md:max-w-2xl"
                            priority
                        />
                    </div>
                </div>
            </section>
        </LayoutEffect>
    )
}

export default Hero