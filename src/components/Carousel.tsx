import React, { useEffect, useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const Carousel = () => {
    
    const slides = [
        {
            index: 0,
            string: "Get the Favoririri 1st"
        },
        {
            index: 1,
            string: "Get the Favoririri 2nd"
        },
        {
            index: 2,
            string: "Get the Favoririri 3rd"
        },
        {
            index: 3,
            string: "Get the Favoririri 4th"
        },
        {
            index: 4,
            string: "Get the Favoririri 5th"
        },
    ]
    const [currentIndex, setCurrentIndex] = useState(0);
    let timer:number = 0
    const nextSlideTimer = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        timer = setTimeout(() => {
            setCurrentIndex(newIndex);
        }, 2000)
    };
    nextSlideTimer()
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    
    useEffect(() => {
       
    }, [currentIndex])

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    };
  return (
    <div className='max-w-[1400px] h-[780px] w-full mx-auto mt-[15%] px-4 relative group ' >
    {/* Left Arrow */}
    <div className='hidden group-hover:block absolute top-[35%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={() => {
            prevSlide(),
            clearTimeout(timer)
        }} size={30} />
    </div>
    <div className='w-full text-center' >
        <h1 className='text-5xl text-[#ffffff]'>{slides[currentIndex].string}</h1>
    </div>
    {/* Right Arrow */}
    <div className='hidden group-hover:block absolute top-[35%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={() => {
            nextSlide(),
            clearTimeout(timer)
        }} size={30} />
    </div>
    <div className='flex top-4 justify-center pt-[5rem]'>
        {slides.map((slide, slideIndex) => (
            <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className='text-2xl cursor-pointer text-[#00000083]'
            >
                <RxDotFilled />
            </div>
        ))}
    </div>
</div>
  )
}

export default Carousel