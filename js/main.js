const form = document.querySelector('form');

/*
  form 인증 로직 흐름
  1. form요소에 submit이벤트 (전송) 연결
  2. 각 폼의 항목마다의 전용 인증함수 정의
  3. 각 인증함수마다 인증 여부에 따라 true, false값 리턴 처리 
  4. 전송이벤트 발생시 각 인증함수에서 하나라도 false리턴시 e.precventDefault로 전송기능 막고 에러메시지 출력
  5. 모든 함수가 true반환시 전송기능 실행

  각 폼요소별 인증성공 조건
  1. userId, textarea : 5글자이상 입력
  2. pwd : 두개의 비번동일, 특수문자, 숫자, 영문 포함, 5글자 이상
  3. email: @포함. @앞뒤로 문자포함, @뒤쪽에서 .포함, .앞뒤로 문자값 포함
  4. edu : value값이 빈문자열 아니면 성공
  5. gender : 하나라도 체크가 되어야 성공
  6. checkbox : 하나혹은 복수개이상 체크 되어야 성공 
*/
