import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import SocialSignUp from './SocialSignUp';
import NormalSignUp from './NormalSignUp';

const SignUp = () => {

  const [searchParams] = useSearchParams();
  const provider = searchParams.get("provider");
  const email = searchParams.get("email");

  useEffect(() => {
    console.log(searchParams.get("provider"));
    console.log(searchParams.get("email"));
  }, [email, provider]);

  const { register, handleSubmit, getValues, formState: {isSubmitting, isSubmitted, errors}} = useForm({mode:"onChange"});
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;

  if(provider && email) {
    return <SocialSignUp provider={provider} email={email} />
  }else {
    return <NormalSignUp />
  }
};

export default SignUp;