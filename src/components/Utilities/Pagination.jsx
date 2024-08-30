import React from 'react';

const Pagination = ({ page, lastPage, setPage }) => {

    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }

    const handleNextPage = () => {
        setPage(( prevState ) => {
            if (prevState < lastPage ) {
                scrollTop()
                return prevState + 1
            }
            return prevState
        })
    }

    const handlePrevPage = () => {
        setPage((prevState) => {
            if (prevState > 1) {
                scrollTop()
                return prevState - 1
            }
            return prevState
        });
    };
    
    return (
        <div className='flex justify-center items-center py-4 px-2 gap-4 text-color-primary text-2xl ' >
            <button className='transition-all hover:text-color-accent' onClick={handlePrevPage} >Prev</button>
            <p className='transition-all hover:text-color-accent' >{page} of {lastPage} </p>
            <button className='transition-all hover:text-color-accent' onClick={handleNextPage} >Next</button>
        </div>
    )
}

export default Pagination