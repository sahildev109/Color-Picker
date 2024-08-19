import React, {useState} from 'react'

const colorPicker=()=>{
const [color,setColor]=useState('#ffffff')

const onChangeColor=(e)=>{
    setColor(e.target.value);
}

 return (<>
 <div>
    <p className='mt-9 font-bold text-4xl text-center'>Color Picker</p>
    <div className='h-screen w-screen flex mt-16 content-center flex-wrap flex-col' >
        <div className='h-60 w-60 text-center content-center rounded-3xl ' style={{backgroundColor:color}}>
 <p className='font-semibold text-2xl'>Selected Color : </p>
 <p className='font-semibold text-2xl'>{color}</p>
 </div>
 <p className='text-center text-lg mt-2'>Select a Color : </p>

 <input  type="color" value={color} onChange={onChangeColor} className='h-24 w-24 mx-auto mt-1 rounded-3xl p-2' />
 </div>
 </div>
 </>)   
}
export default colorPicker;