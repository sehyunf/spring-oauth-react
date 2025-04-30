import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Mypage = () => {

  // 토큰이 있을 때만 접근할 수 있는 페이지
  const {currentUser, isLogin} = useSelector((state) => state.user)
  const {
    memberEmail,
    memberPicture,
    memberName,
    memberNickname
  } = currentUser;
  console.log("유저", currentUser);
  console.log("로그인여부", isLogin);
  

  return (
    <div>
      마이페이지
      <p>이메일 : {memberEmail}</p>
      <p>이름 : {memberName}</p>
      <p>닉네임 : {memberNickname}</p>
    </div>
  );
};

export default Mypage;