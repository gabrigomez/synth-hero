import * as React from 'react';

export const Main = () => {
  return (
    <div className='flex flex-col h-2/4 justify-around items-center'>
      <div>
        Synth Hero
      </div>
      <div className='bg-zinc-700 h-56 w-11/12 sm:w-96 rounded-xl'>
        <div className='h-6 bg-zinc-900 rounded-t-xl'></div>
        <div className='flex flex-col h-[200px]'>
          <div className='flex h-2/4 w-full'>
            <div className='w-1/4'>
              L
            </div>
            <div className='w-2/4'>
              Presets Led
            </div>
            <div className='w-1/4'>
              R
            </div>
          </div>
          <div className='h-2/4'>
            keys
          </div>

        </div>

      </div>
    </div>
  )
}