import React from 'react'

function MyImg(props) {
    return (
        <div className='md:h-[25rem] h-[20rem] border-4 border-orange-400 bg-gray-300 md:w-[25rem] w-[20rem] overflow-y-hidden flex justify-center  rounded-full'>
            <img className='h-[60rem]' src={props.image} />
        </div>
    )
}

export default MyImg
