# simple JSON navigator

JSON의 계층구조를 GUI로 탐색할 수 있는 웹앱입니다.

## 주요기능

- [X] JSON 확장자 파일\*을 업로드
- [X] JSON의 계층구조를 GUI로 탐색
- [ ] 키워드 매칭 방식의 검색기능

### 제한사항

- JSON 확장자 파일 내 format에 제한

  - JSON 데이터의 key는 영어 대소문자(`[a-zA-Z]`), 숫자(`[0-9]`), 마침표(`.`)로 구성될 수 있습니다. 이는 계층을 표현하는 방식으로 처리됩니다.

    - 마침표(`.`)는 처음과 끝에 오지 않으며, 연속되지 않습니다.

    ```json
    {
      "foo.bar": true
    }
    ```

  - JSON 데이터의 value에 객체가 올 수 있으며, 계층으로 처리됩니다

    ```json
    {
      "foo": {
        "bar": true
      }
    }
    ```

### 레퍼런스

- JSON 내 각 속성의 형식에 대한 참고 : <https://www.json.org/json-en.html>

---

### 구현에 관하여

#### 1. 채택 기술

- React : 렌더링 편의, 생산성, 개발경험(DX)
- Next.js
- tailwind : 쉽고 직관적인 스타일링. 소형 프로젝트에도 적합

...TBD

#### 2. 기능별 구현전략

- 업로드 기능

  - 파일 업로드 시 제한사항에 대한 데이터 검증
    - 가급적 html input 요소의 속성을 활용
  - 검증 실패 시, 적절한 인터렉션 제공

- GUI 방식의 탐색 기능
  - 계층구조 렌더링을 위한 데이터 가공
  - 계층 제한 없이 렌더링 : 재귀 렌더링
- 검색 기능
  - 열린 요구사항 안에서 의사결정 필요
    - 단순 필터링 (mac finder 방식)
    - 하이라이트 (매칭되는 value에 색상을 표현하면서 계층구조 화면 유지)
