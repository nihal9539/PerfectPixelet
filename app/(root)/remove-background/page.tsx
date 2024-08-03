"use client";
import React, { useRef, useState } from "react";

const RemoveBackground: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const imageRef = useRef<HTMLInputElement>(null);

  const handleImageChange = () => {
    if (imageRef.current && imageRef.current.files && imageRef.current.files[0]) {
      const file = imageRef.current.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <h1 className="text-center text-4xl font-bold">Background Remover</h1>
      <div className="mt-10 flex justify-center items-center">
        <div
          onClick={() => imageRef.current?.click()}
          className="mt-10 flex justify-center items-center border-2 border-dashed w-96 h-96"
        >
          <input
            type="file"
            id="file"
            className="hidden"
            ref={imageRef}
            onChange={handleImageChange}
          />
          <button id="remove-background-button">Remove Background</button>
        </div>
      </div>
      {selectedImage && (
        <div className="mt-10 flex justify-center">
          <img src={selectedImage} alt="Selected" className="w-96 h-96 object-cover" />
        </div>
      )}
    </>
  );
};

export default RemoveBackground;
