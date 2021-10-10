import React,{useState} from 'react';

const Hook = () =>
{
    const state=useState(0);

    const[count,setCount]=useState(10);
    const DecNum = () =>
    {
        setCount(count-1);
    }

    return(
        <>
            <div className="text-center">
                <h1 className="display-1">{count}</h1>
                <button type="button" className="btn btn-success" onClick={DecNum}>Increment</button>
                <button type="reset" className="btn btn-danger">Reset</button>
            </div>
        </>
    )
};

export default Hook;