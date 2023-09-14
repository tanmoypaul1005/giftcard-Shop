/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import React, { useRef, useEffect, useState } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import usePostcardStore, { getPostcardData } from '../../app/stores/PostcardStore';
import useHorizontalScroll from '../Utilities/useHorizontalScroll';


const CategoryTabs = () => {
    const { categories, setSelectedTab, selected_tab } = usePostcardStore();
    const [is_overflow, setIsOverflow] = useState(false)
    const [width, setWidth] = useState(0)

    const category_tabs = useRef(null);

    const scrollRef = useHorizontalScroll();

    const router = useRouter()
    const { shop_id, category_index } = router.query
    // console.log('category', category_index);

    useEffect(() => {
        if (category_index) {
            let index = parseInt(category_index.toString()) ?? -1;
            setSelectedTab(parseInt(index));
            getPostcardData(categories[parseInt(category_index.toString())].id, shop_id ?? null);
        } else {
            setSelectedTab(-1);
        }

    }, []);




    useEffect(function () {
        scrollRef.current = category_tabs.current;
    }, [category_tabs.current]);

    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth))

        // console.log(window.innerWidth, "innerWidth");
        // console.log(category_tabs?.current.scrollWidth, "scrollWidth");
        // console.log(category_tabs?.current.clientWidth, "clientWidth");
        // console.log(category_tabs?.current.offsetWidth, "offsetWidth");

        let scrollWidth = category_tabs?.current.scrollWidth
        let clientWidth = category_tabs?.current.clientWidth

        if (scrollWidth > clientWidth) setIsOverflow(true)
        else setIsOverflow(false)
    }, [category_tabs, width])


    function scrollRight() {
        category_tabs.current.scrollLeft += 200;
    }

    function scrollLeft() {
        category_tabs.current.scrollLeft -= 200;
    }

    const getAllPostcards = () => {
        if(selected_tab === -1) return;
        setSelectedTab(-1);
        getPostcardData(null, shop_id ?? null);
    }

    const getCategoryWisePostcards = (category, index) => {
        setSelectedTab(index);
        getPostcardData(category.id, shop_id ?? null);
    }

    return (
        <div className="relative flex justify-start items-center overflow-x-scroll">
            {is_overflow && <div onClick={scrollLeft} className='absolute top-1/2 -left-1 transform -translate-y-1/2 z-10 w-7 h-12 center cp bg-white md:bg-blueGray-50 mt-1.5 md:mt-0'>
                <IoIosArrowBack />
            </div>}

            <div ref={category_tabs} className="relative  overflow-x-scroll flex justify-start items-center space-x-2  md:space-x-5 mt-3 md:mt-0 px-8 h-12">

                <button onClick={getAllPostcards} className={`font-semibold px-3 ${selected_tab !== -1 && "border-gray-300 border"} hover:border-cBrickHover bg-blueGray-50 ${selected_tab === -1 && "bg-cLemonade"} hover:bg-cLemonade text-gray-900 transition-all ease-in h-10 rounded-md text-md focus:outline-none`}>
                    All
                </button>

                {

                    categories.map((category, index) =>

                        <button onClick={() => selected_tab !== index && getCategoryWisePostcards(category, index)} key={index} className={`font-semibold px-3  w-auto ${selected_tab !== index && "border-gray-300 border"}  hover:border-cBrickHover bg-blueGray-50 ${selected_tab === index && "bg-cLemonade"} hover:bg-cLemonade text-gray-900 transition-all ease-in h-10 rounded-md text-md focus:outline-none whitespace-nowrap`}>
                            {category?.name ?? ''}
                        </button>

                    )

                }


            </div>

            {is_overflow && (
                <div onClick={scrollRight} className="absolute top-1/2 -right-1 transform -translate-y-1/2 z-10         w-7 h-12 center cp bg-white md:bg-blueGray-50 mt-1.5 md:mt-0">
                    <IoIosArrowForward />
                </div>
            )}
        </div>
    );
}

export default CategoryTabs;