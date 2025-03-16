import React, { useState, useRef } from 'react'
import {LuUser, LuUpload, LuTrash } from 'react-icons/lu'

const ProfilePhotoSelector = ({image,setImage}) => {
    const inputRef = useRef(null);
    const[previwUrl,setPreviewUrl] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if(file){
            //update image state
            setImage(file);

            //Generate preview
            const preview = URL.createObjectURL(file);
            setPreviewUrl(preview);
        }
        
    }

    const handleRemoveImage=() =>{
            setImage(null);
            setPreviewUrl(null);
    }

    const onChooseFile = () =>{
        inputRef.current.click();
    } 
  return (
    <div className='flex justify-center mb-6'>
        <input
            type='file'
            ref={inputRef}
            accept='image/*'
            className='hidden'
            onChange={handleImageChange}
        />
        {!image ? (
            <div className='w-20 h-20 bg-blue-200 rounded-full flex items-center justify-center relative'>
                <LuUser className='text-4xl text-blue-400'/>
                <button
                    type='button'
                    className='w-8 h-8 flex items-center justify-center bg-blue-400 text-white rounded-full absolute -bottom-2 right-0 '
                    onClick={onChooseFile}
                >
                    <LuUpload/>
                </button>
            </div>
        ) : (
            <div className='relative'>
                <img 
                src={previwUrl} 
                alt="Profile photo"
                className='w-20 h-20 rounded-full object-cover'
                />

                <button
                    type='button'
                    className='w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded-full absolute -bottom-2 right-0 '
                    onClick={handleRemoveImage}>
                    <LuTrash/>
                </button>
            </div>    
        )}
    </div>
  );
};

export default ProfilePhotoSelector