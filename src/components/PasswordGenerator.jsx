
import React, { useEffect, useRef, useState } from 'react'

const PasswordGenerator = () => {
    const [length,setLength] = useState(6);
    const [isNumber,setIsNumber] = useState(false);
    const [isChar,setIsChar] = useState(false);
    const [password,setPassword] = useState("");
    const handleCopyPassword = () => {
        passwordRef.current.select();
        passwordRef.current.setSelectionRange(0,3)
        window.navigator.clipboard.writeText(password);
        alert(`You have copyed password : ${password}`)
    }
    const passwordRef = useRef(null)
    const passwordGeneratorMethod = () => {
        let passwordString = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let password = '';
        if(isNumber) passwordString += '0123456789';
        if(isChar) passwordString += '~!@#$%^&*()_+-{}'
        for(let i = 1; i < length; i++) {
            let charactors =  Math.floor(Math.random() * passwordString.length);
            password += passwordString.charAt(charactors)
        }
        setPassword(password)
    }
    useEffect(() => {
        passwordGeneratorMethod()
    },[isNumber,isChar,length])
    return (
        <div className='bg-lime-500 p-10 px rounded-xl'>
            <div className='space-x-2 flex '>
                <input 
                value={password}
                className='h-14 rounded-xl shadow-xl px-5 w-full'
                type="text" 
                readOnly 
                placeholder='Password' 
                ref={passwordRef}
                />
                <button 
                className='bg-gray-600 px-4 py-2 rounded-xl text-white'
                onClick={handleCopyPassword}
                >Copy</button>
            </div>
            <div className='my-3'>
                <input 
                type="range" 
                className="w-full" 
                min={6}
                max={20}
                value={length}
                onChange={(e) => setLength(e.target.value)}
                />
                <p>Length ({length})</p>
            </div>
            <div>
                <input 
                type="checkbox"
                onChange={() => setIsNumber(!isNumber)}
                />
                <label>Add Number</label>
                <br />
                <input 
                type="checkbox"
                onChange={() => setIsChar(!isChar)}
                />
                <label>Add Spacel Charactor</label>
            </div>
        </div>
    )
}

export default PasswordGenerator
