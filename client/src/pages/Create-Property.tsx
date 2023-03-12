import React from 'react'
import { useState } from 'react';
import { useGetIdentity } from '@pankod/refine-core';
import { FieldValue, FieldValues, useForm} from '@pankod/refine-react-hook-form';
import { useNavigate } from '@pankod/refine-react-router-v6';
import Form from 'components/common/Form';
const CreateProperty = () => {
  const navigate = useNavigate();
  //grab user info
  const {data: user} = useGetIdentity();
  const [PropertyImage, setPropertyImage] = useState({name: '', url: ''});
  const {refineCore: {onFinish, formLoading}, register, handleSubmit} = useForm();
  const handleImageChange = (file: File) => {
    const reader = (readFile: File) => new Promise<string>((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.onload = () => resolve(fileReader.result as string);
      fileReader.readAsDataURL(readFile);
    });

    reader(file).then((result: string) => setPropertyImage({ name: file?.name, url: result }));
  };
  const onFinishHandler = async (data: FieldValues) => {
    if(!PropertyImage.name) return alert('Please select an image!');

    await onFinish({...data, photo: PropertyImage.url, email: user.email})
  };
  return (
    <Form
      type="Create"
      register={register}
      onFinish={onFinish}
      formLoading={formLoading}
      handleSubmit={handleSubmit}
      handleImageChange={handleImageChange}
      onFinishHandler={onFinishHandler}
      propertyImage={PropertyImage}

    />
  )
}

export default CreateProperty