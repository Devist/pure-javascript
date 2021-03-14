export const debounce = (func, delay) => {
  /**
   * setTimeout 실행시 태스크 아이디를 저장
   */
  let timeoutId = null
  return (...args) => {
    /**
     * 이미 실행 대기중인 태스크가 존재하는 경우 해당 태스크를 제거
     */
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    /**
     * 입력받은 `delay 후에 해당 함수가 실행되도록 `setTimeout` 실행
     */
    timeoutId = setTimeout(func, delay, ...args)
  }
}

/**
 *
 *
 *
 */

/**
 * 스크롤 임계치
 */
const scrollThreshold = 0.95

const onScroll = (e) => {
  const { scrollTop, clientHeight, scrollHeight } = e.target.scrollingElement

  /**
   * 현재 스크롤된 위치를 0-1 값으로 구함
   * `scrollTop` ⇒ 현재 스크롤된 위치, `clientHeight` ⇒ 현재 뷰포트의 높이, `scrollHeight` ⇒ 스크롤 영역 높이
   */
  const scrollRatio = (scrollTop + clientHeight) / scrollHeight

  /**
   * [!] 브라우저 또는 단말마다 편차가 있을수 있어 1(100%) 값 보다는 `0.95 ~ 0.99` 값을 적용하는게 더 자연스러움
   */
  if (scrollRatio > scrollThreshold) {
    fetchMore()
  }
}

const debounceDelay = 100
const onDebounceScroll = debounce(onScroll, debounceDelay)

document.addEventListener('scroll', onDebounceScroll)
