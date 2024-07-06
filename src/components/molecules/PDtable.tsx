import React from 'react';

const PDtable = ({ title, explanation }: any) => {
    return (
        <div className='flex flex-col w-2/5 p-2 m-2 bg-gray-light dark:bg-gray-dark'>
            <div className="w-full bg-stone-300 text-white  p-2 flex justify-between">
                <div className='font-bold'>{title}</div>
                <div className='text-blue-800'>
                <button className="icon-button px-2"> EDIT</button>
                <button className="icon-button px-2"> DELETE</button>
                </div>
                
            </div>
            <div className="p-4 bg-stone-100">{explanation}</div>
        </div>
    );
}

export default PDtable;
