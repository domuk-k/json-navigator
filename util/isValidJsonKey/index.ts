/**
 * 우리 도메인에서 정한 key 규칙, `.` 포함 형태에 대한 테스트를 위한 유틸 함수입니다.
 * @description
 * - JSON 파일의 각 property 이름은 영어 대소문자(`[a-zA-Z]`), 숫자(`[0-9]`), 마침표(`.`)로 구성될 수 있다.
 * - 단, property 이름의 처음과 끝에는 마침표가 올 수 없고, 마침표가 둘 이상 연속하는 경우는 없다고 가정한다.
 * @param json 임의의 JSON 객체입니다. @see https://www.json.org/
 * @returns {boolean} 우리 도메인에서 정한 key 규칙을 검증한 boolean값
 */
function isValidJsonKey(json: unknown) {
  // TODO: 위 규칙을 검증합니다
  return true;
}

export default isValidJsonKey;
