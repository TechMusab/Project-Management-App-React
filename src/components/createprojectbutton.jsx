/* eslint-disable react/prop-types */

export default function Createprojectbutton({handleproject}) {

    return (
       <button onClick={handleproject} className='px-4 py-2 text-xs md:text- base  bg-stone-700 text-stone-400 hover:text-stone-100 hover:bg-stone-600 rounded-md '> +ADD Project</button>
    )
}
