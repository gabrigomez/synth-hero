import * as React from 'react';
import { GiPianoKeys } from "react-icons/gi";
import { FaDrumSteelpan } from "react-icons/fa";
import { FaGuitar } from "react-icons/fa";

export const Main = () => {
  return (
    <div className='flex flex-col h-2/4 justify-around items-center'>
      <div>
        Synth Hero
      </div>
      <div className='bg-zinc-800 h-56 w-11/12 sm:w-96 rounded-xl'>
        <div className='h-6 bg-zinc-900 rounded-t-xl'></div>
        <div className='flex flex-col h-[200px]'>
          <div className='flex h-2/4 p-2 w-full'>
            <div className='flex items-center justify-center w-1/4'>
              <div className='border-2 border-black bg-zinc-600 rounded-full h-16 w-16'></div>
            </div>
            <div className='w-2/4 p-2'>
              <div className='bg-black h-full rounded-md'>
                <p className='text-cyan-600 h-2/4 pt-1 text-sm'>
                  PRESETS
                </p>
                <div className='flex justify-center p-1 h-2/4'>
                  <GiPianoKeys className='text-cyan-600 w-1/3 h-4' />
                  <FaDrumSteelpan className='text-cyan-600 w-1/3 h-4' />
                  <FaGuitar className='text-cyan-600 w-1/3 h-4' />
                </div>
              </div>
            </div>
            <div className='flex items-center justify-center w-1/4'>
              <div className='border-2 border-black bg-zinc-600 rounded-full h-16 w-16'></div>
            </div>
          </div>
          <div className='flex justify-center w-full h-2/4'>
            <div className='flex items-center justify-center bg-black rounded-md w-full h-full'>
              <ul className='flex relative bg-white w-10/12 h-5/6'>
                <li className='flex flex-col justify-end w-[10%] h-full text-xs text-slate-400'>A</li>                
                <li className='h-2/4 absolute left-[24px] w-4 bg-black z-20'>W</li>
                <li className='flex flex-col justify-end border border-gray-100 w-[10%] h-full text-xs text-slate-400'>S</li>
                <li className='h-2/4 absolute left-[56px] w-4 bg-black z-20'>E</li>                
                <li className='flex flex-col justify-end border border-gray-100 w-[10%] h-full text-xs text-slate-400'>D</li>
                <li className='flex flex-col justify-end border border-gray-100 w-[10%] h-full text-xs text-slate-400'>F</li>
                <li className='h-2/4 absolute left-[120px] w-4 bg-black z-20'>E</li>
                <li className='flex flex-col justify-end border border-gray-100 w-[10%] h-full text-xs text-slate-400'>G</li>
                <li className='h-2/4 absolute left-[152px] w-4 bg-black z-20'>Y</li>
                <li className='flex flex-col justify-end border border-gray-100 w-[10%] h-full text-xs text-slate-400'>H</li>
                <li className='h-2/4 absolute left-[184px] w-4 bg-black z-20'>U</li>
                <li className='flex flex-col justify-end border border-gray-100 w-[10%] h-full text-xs text-slate-400'>J</li>
                <li className='flex flex-col justify-end border border-gray-100 w-[10%] h-full text-xs text-slate-400'>K</li>
                <li className='h-2/4 absolute left-[248px] w-4 bg-black z-20'>I</li>
                <li className='flex flex-col justify-end border border-gray-100 w-[10%] h-full text-xs text-slate-400'>L</li>
                <li className='h-2/4 absolute left-[280px] w-4 bg-black z-20'>O</li>
                <li className='flex flex-col justify-end border border-gray-100 w-[10%] h-full text-xs text-slate-400'>Ç</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}