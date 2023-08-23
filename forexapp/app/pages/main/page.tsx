import React from 'react'

function Main() {
  return (
    <div>
      <div>
        <div className='flex-col gap-4 bg-white p-14 h-80%  w-auto'>
          <h4>FROM</h4>
          <div className='flex gap-4'>
            <img src='https://m.media-amazon.com/images/I/51CNVGYmz2L._AC_SL1220_.jpg' className='h-4 w-4' alt='Currency'/>
            <select className='bg-slate-400 drop-shadow-2xl' value="Select">
              <option>USD</option>
              <option>KES</option>
            </select>
          </div>
          <h4>TO</h4>
          <div className='flex gap-4'>
            <img src='https://m.media-amazon.com/images/I/51CNVGYmz2L._AC_SL1220_.jpg' className='w-4 h-4' alt='Currency'/>
            <select className='bg-slate-400 drop-shadow-2xl' value="Select">
              <option>USD</option>
              <option>KES</option>
            </select>
          </div>
          <h4 className='m-4'>Results Apear here</h4>
          <button className='bg-sky-500/100 text-white px-4'>Convert</button>
        </div>
      </div>
    </div>
  )
}

export default Main