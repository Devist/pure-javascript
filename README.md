### Element.insertAdjacentHTML()

insertAdjacentHTML() 메서드는 HTML or XML 같은 특정 텍스트를 파싱하고, 특정 위치에 DOM tree 안에 원하는 node들을 추가 한다. 이미 사용중인 element 는 다시 파싱하지 않는다. 그러므로 element 안에 존재하는 element를 건드리지 않는다. (innerHtml은 과 좀 다름). innerHtml보다 작업이 덜 드므로 빠르다.

### Throttle

일정시간간격으로 한번만 실행

### debounce

연속으로 발생하는 이벤트에 대해 마지막 한 번만 실행

### intersection observer

https://developer.mozilla.org/ko/docs/Web/API/Intersection_Observer_API
Intersection Observer API는 타겟 요소와 상위 요소 또는 최상위 document 의 viewport 사이의 intersection 내의 변화를 비동기적으로 관찰하는 방법입니다.

역사적으로 요소의 가시성이나 두 요소의 상대적인 가시성을 탐지하는 것은 어려운 일이었습니다. 일반적으로 알려진 해결방법은 신뢰성이 부족하고 브라우저나 사이트에 부하를 주기때문에 좋지 못한 사용자 경험을 낳습니다. 웹이 성숙함에따라 이러한 정보의 필요성은 커졌습니다. intersection 정보는 아래와 같은 여러가지 이유 때문에 필요합니다:

페이지가 스크롤 되는 도중에 발생하는 이미지나 다른 컨텐츠의 지연 로딩.
스크롤 시에, 더 많은 컨텐츠가 로드 및 렌더링되어 사용자가 페이지를 이동하지 않아도 되게 하는 infinite-scroll 을 구현.
광고 수익을 계산하기 위한 용도로 광고의 가시성 보고.
사용자에게 결과가 표시되는 여부에 따라 작업이나 애니메이션을 수행할 지 여부를 결정.
