import React, { useEffect } from 'react';
import { GiPianoKeys } from "react-icons/gi";
import { FaDrumSteelpan } from "react-icons/fa";
import { FaGuitar } from "react-icons/fa";

import { noteMap, playNote } from '../utils/Notes';

export const Main = () => {
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { 
  //   setVolume(parseInt(e.target.value));
  //   setDecimalVolume(volume/100);
  // }

  useEffect(() => {
    document.addEventListener('keydown', handleNote, true);
  }, [])

  const handleNote = (event: any) => {
    playNote(noteMap[event.key as keyof typeof noteMap])  //play the note according with the noteMap object
  }

  const playNoteOnClick = (event:any) => {
    const note = event.toLowerCase()
    playNote(noteMap[note as keyof typeof noteMap])
  }

  return (
    <div className='flex flex-col h-2/4 justify-around items-center'>
      <div className='font-sedgwick text-6xl'>
        Synth Hero
      </div>
      <div className='bg-zinc-800 h-56 w-72 sm:w-96 rounded-xl'>
        <div className='h-6 bg-zinc-900 rounded-t-xl'></div>
        <div className='flex flex-col h-[200px]'>
          <div className='flex h-2/4 p-2 w-full'>
            <div className='flex flex-col items-center justify-center w-1/4'>
              {/* <p className='font-sedgwick text-slate-200'>
                Volume
              </p>
              <input id="volume" type="range" value={volume} onChange={(e) => handleChange(e)} className='w-4/5' /> */}              
            </div>
            <div className='w-2/4 p-2'>
              <div className='bg-black h-full rounded-md'>
                <p className='text-slate-200 h-2/4 pt-1 text-sm'>
                  PRESETS
                </p>
                <div className='flex justify-center p-1 h-2/4'>
                  <GiPianoKeys className='text-slate-500 w-1/3 h-4' />
                  <FaDrumSteelpan className='text-slate-500 w-1/3 h-4' />
                  <FaGuitar className='text-slate-500 w-1/3 h-4' />
                </div>
              </div>
            </div>
            <div className='flex items-center justify-center w-1/4'>
              <p className='font-sedgwick text-slate-200'>
                Mode
              </p>
            </div>
          </div>
          <div className='flex justify-center w-full h-2/4'>
            <div className='flex items-center justify-center bg-black rounded-md w-full h-full'>
              <ul className='flex relative bg-white w-10/12 h-5/6'>
                <li className='key white-keys w-[10%]' onClick={(e:any)=> playNoteOnClick(e.target.innerText)}>                  
                  A                  
                </li>                
                <li className='black-keys left-[18px] sm:left-[24px]' onClick={(e:any)=> playNoteOnClick(e.target.innerText)}>
                  W                  
                </li>
                <li className='key white-keys border border-gray-100 w-[10%]' onClick={(e:any)=> playNoteOnClick(e.target.innerText)}>
                  S                  
                </li>
                <li className='black-keys left-[42px] sm:left-[56px]' onClick={(e:any)=> playNoteOnClick(e.target.innerText)}>
                  E                  
                </li>                
                <li className='key white-keys border border-gray-100 w-[10%]' onClick={(e:any)=> playNoteOnClick(e.target.innerText)}>
                  D
                </li>
                <li className='key white-keys border border-gray-100 w-[10%]' onClick={(e:any)=> playNoteOnClick(e.target.innerText)}>
                  F
                </li>
                <li className='black-keys left-[90px] sm:left-[120px]' onClick={(e:any)=> playNoteOnClick(e.target.innerText)}>
                  T
                </li>
                <li className='key white-keys border border-gray-100 w-[10%]' onClick={(e:any)=> playNoteOnClick(e.target.innerText)}>
                  G
                </li>
                <li className='black-keys left-[114px] sm:left-[152px]' onClick={(e:any)=> playNoteOnClick(e.target.innerText)}>
                  Y
                </li>
                <li className='key white-keys border border-gray-100 w-[10%]' onClick={(e:any)=> playNoteOnClick(e.target.innerText)}>
                  H
                </li>
                <li className='black-keys left-[138px] sm:left-[184px]' onClick={(e:any)=> playNoteOnClick(e.target.innerText)}>
                  U
                </li>
                <li className='key white-keys border border-gray-100 w-[10%]' onClick={(e:any)=> playNoteOnClick(e.target.innerText)}>
                  J
                </li>
                <li className='key white-keys border border-gray-100 w-[10%]' onClick={(e:any)=> playNoteOnClick(e.target.innerText)}>
                  K
                </li>
                <li className='black-keys left-[186px] sm:left-[248px]' onClick={(e:any)=> playNoteOnClick(e.target.innerText)}>
                  O
                </li>
                <li className='key white-keys border border-gray-100 w-[10%]' onClick={(e:any)=> playNoteOnClick(e.target.innerText)}>
                  L
                </li>
                <li className='black-keys left-[210px] sm:left-[280px]' onClick={(e:any)=> playNoteOnClick(e.target.innerText)}>
                  P
                </li>
                <li className='key white-keys border border-gray-100 w-[10%]' onClick={(e:any)=> playNoteOnClick(e.target.innerText)}>
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