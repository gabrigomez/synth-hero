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
      <div className='bg-zinc-800 h-56 w-72 sm:w-96 rounded-xl'>
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
                <li className='flex flex-col justify-end w-[10%] h-full text-xs text-slate-400'>
                  A
                </li>                
                <li className='h-2/4 absolute left-[18px] w-3 sm:left-[24px] sm:w-4 bg-black z-20 text-xs text-slate-400'>
                  W
                </li>
                <li className='flex flex-col justify-end border border-gray-100 w-[10%] h-full text-xs text-slate-400'>
                  S
                </li>
                <li className='h-2/4 absolute left-[42px] w-3 sm:left-[56px] sm:w-4 bg-black z-20 text-xs text-slate-400'>
                  E
                </li>                
                <li className='flex flex-col justify-end border border-gray-100 w-[10%] h-full text-xs text-slate-400'>
                  D
                </li>
                <li className='flex flex-col justify-end border border-gray-100 w-[10%] h-full text-xs text-slate-400'>
                  F
                </li>
                <li className='h-2/4 absolute left-[90px] w-3 sm:left-[120px] sm:w-4 bg-black z-20 text-xs text-slate-400'>
                  E
                </li>
                <li className='flex flex-col justify-end border border-gray-100 w-[10%] h-full text-xs text-slate-400'>
                  G
                </li>
                <li className='h-2/4 absolute left-[114px] w-3 sm:left-[152px] sm:w-4 bg-black z-20 text-xs text-slate-400'>
                  Y
                </li>
                <li className='flex flex-col justify-end border border-gray-100 w-[10%] h-full text-xs text-slate-400'>
                  H
                </li>
                <li className='h-2/4 absolute left-[138px] w-3 sm:left-[184px] sm:w-4 bg-black z-20 text-xs text-slate-400'>
                  U
                </li>
                <li className='flex flex-col justify-end border border-gray-100 w-[10%] h-full text-xs text-slate-400'>
                  J
                </li>
                <li className='flex flex-col justify-end border border-gray-100 w-[10%] h-full text-xs text-slate-400'>
                  K
                </li>
                <li className='h-2/4 absolute left-[186px] w-3 sm:left-[248px] sm:w-4 bg-black z-20 text-xs text-slate-400'>
                  I
                </li>
                <li className='flex flex-col justify-end border border-gray-100 w-[10%] h-full text-xs text-slate-400'>
                  L
                </li>
                <li className='h-2/4 absolute left-[210px] w-3 sm:left-[280px] sm:w-4 bg-black z-20 text-xs text-slate-400'>
                  O
                </li>
                <li className='flex flex-col justify-end border border-gray-100 w-[10%] h-full text-xs text-slate-400'>
                  Ç
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}