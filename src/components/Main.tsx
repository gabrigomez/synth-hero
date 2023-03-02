import React, { useEffect } from 'react';
import { GiPianoKeys } from "react-icons/gi";
import { FaDrumSteelpan } from "react-icons/fa";
import { FaGuitar } from "react-icons/fa";

import { A4, Ab4, B4, Bb4, C4, C5, D4, D5, Db4, Db5, E4, E5, Eb4, Eb5, F4, G4, Gb4, noteMap, playNote } from '../utils/Notes';

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
                <li className='key white-keys w-[10%]' onClick={()=> playNote(C4)}>                  
                  A                  
                </li>                
                <li className='black-keys left-[18px] sm:left-[24px]' onClick={()=> playNote(Db4)}>
                  W                  
                </li>
                <li className='key white-keys border border-gray-100 w-[10%]' onClick={()=> playNote(D4)}>
                  S                  
                </li>
                <li className='black-keys left-[42px] sm:left-[56px]' onClick={()=> playNote(Eb4)}>
                  E                  
                </li>                
                <li className='key white-keys border border-gray-100 w-[10%]' onClick={()=> playNote(E4)}>
                  D
                </li>
                <li className='key white-keys border border-gray-100 w-[10%]' onClick={()=> playNote(F4)}>
                  F
                </li>
                <li className='black-keys left-[90px] sm:left-[120px]' onClick={()=> playNote(Gb4)}>
                  T
                </li>
                <li className='key white-keys border border-gray-100 w-[10%]' onClick={()=> playNote(G4)}>
                  G
                </li>
                <li className='black-keys left-[114px] sm:left-[152px]' onClick={()=> playNote(Ab4)}>
                  Y
                </li>
                <li className='key white-keys border border-gray-100 w-[10%]' onClick={()=> playNote(A4)}>
                  H
                </li>
                <li className='black-keys left-[138px] sm:left-[184px]' onClick={()=> playNote(Bb4)}>
                  U
                </li>
                <li className='key white-keys border border-gray-100 w-[10%]' onClick={()=> playNote(B4)}>
                  J
                </li>
                <li className='key white-keys border border-gray-100 w-[10%]' onClick={()=> playNote(C5)}>
                  K
                </li>
                <li className='black-keys left-[186px] sm:left-[248px]' onClick={()=> playNote(Db5)}>
                  O
                </li>
                <li className='key white-keys border border-gray-100 w-[10%]' onClick={()=> playNote(D5)}>
                  L
                </li>
                <li className='black-keys left-[210px] sm:left-[280px]' onClick={()=> playNote(Eb5)}>
                  P
                </li>
                <li className='key white-keys border border-gray-100 w-[10%]' onClick={()=> playNote(E5, .7)}>
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