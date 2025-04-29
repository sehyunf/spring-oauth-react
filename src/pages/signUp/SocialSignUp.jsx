import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const SocialSignUp = ({provider, email}) => {

  const { register, handleSubmit, getValues, formState: {isSubmitting, isSubmitted, errors}} = useForm({mode:"onChange"});
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;

  return (
    <form onSubmit={handleSubmit(async (data) => {

      const {memberName, memberNickname} = data;

        const oauthMemberVO = {
          memberEmail : email,
          memberName : memberName,
          memberNickname : memberNickname,
          memberProvider : provider
        }

        console.log(oauthMemberVO);

        await fetch("http://localhost:10000/member/register", {
          method : "POST",
          headers : {
            "Content-Type" : "application/json"
          },
          body : JSON.stringify(oauthMemberVO)
        })
        .then((res) => {
          if(!res.ok) {
            return res.json().then((res) => {
              alert(`${res.message}`)
            })
          }
          return res.json()
        })
        // 성공한 res
        .then((res) => {
          console.log(res);
        }).catch(console.error)
        
    })}>
      <p>{email}</p>

      <label>
        <p>이름</p>
        <input type="text" placeholder='이름을 입력하세요.' 
          {...register("memberName")}
        />
      </label>

      <label>
        <p>닉네임</p>
        <input type="text" placeholder='닉네임을 입력하세요.' 
          {...register("memberNickname")}
        />
      </label>

      <button disabled={isSubmitting}>회원가입</button>
    </form>
  );
};

export default SocialSignUp;