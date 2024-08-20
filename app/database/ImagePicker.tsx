"use client"

import { useState } from "react"
import Image from "next/image"

const ImagePicker = () => {
  const [pickedImage, setPickedImage] = useState(null)
  const handleImageChange = (e: any) => {
    const file = e.target.files[0]

    if (!file) {
      setPickedImage(null)
      return
    }

    const fileReader = new FileReader()

    fileReader.onload = () => {
      setPickedImage(fileReader.result)
    }

    fileReader.readAsDataURL(file)
  }

  return (
    <label className='block mb-5' htmlFor='imageFile'>
      Uploaduj sliku:
      <br />
      {pickedImage && (
        <Image
          className='w-[150px]'
          src={pickedImage}
          alt='Izabrana slika'
          width={0}
          height={0}
        />
      )}
      <input
        type='file'
        name='imageFile'
        id='imageFile'
        className='rounded-lg text-black px-2 py-1 w-[300px]'
        required
        onChange={handleImageChange}
      />
    </label>
  )
}

export default ImagePicker
