
>## 📌필수 구현 기능<br>

✅ **게시글 목록 페이지**
+ [x] 이전 월 보기, 다음 월 보기 버튼이 있고 해당 버튼 클릭 시 월 이동 가능하게 하기
+ [x] 일정 하나를 클릭할 시 팝업 띄우기
+ [x] 일정 추가하기 버튼 (페이지 우측 아래에 플로팅 버튼으로 처리) 클릭 시 일정 추가하기 페이지로 이동하기
+ [ ] 캘린더 내 일정은 시간 순으로 정렬하기
+ [x] 우측 아래의 추가하기 버튼 위에 [완료된 일정 보기] 만들기
  + [x] 클릭 시, 완료된 일정만 캘린더에 표시 되고 버튼 텍스트가 [모든 일정 보기]로 바뀌도록 하기
  + [x] [모든 일정 보기] 버튼 클릭 시, 모든 일정 캘린더에 표시하기
  + [x] **[주의] 파이어스토어에서 필터해서 가져오지 말고 전체 데이터를 가져온 후, 리덕스에서 필터를 할 것 (컴포넌트에서도 가능)**
 + [ ] PC, 모바일, 태블릿 3가지로 확인했을 때 뷰가 깨지지 않게 하기
<br><br>

✅ **게시글 작성 페이지**
+ [ ] 일시, 일정 내용을 기입하지 않으면 팝업으로 경고하기
  + [ ] 실제로 파이어스토어에 들어가지 못하게 막기
+ [x] 일정 추가 시 캘린더 페이지로 이동하기