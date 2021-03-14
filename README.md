### document.classList.contains()

contains( String )
지정한 클래스 값이 엘리먼트의 class 속성에 존재하는지 확인한다.

### document.classList.toggle

toggle( String [, force] )
하나의 인수만 있을 때: 클래스 값을 토글링한다. 즉, 클래스가 존재한다면 제거하고 false를 반환하며, 존재하지 않으면 클래스를 추가하고 true를 반환한다.
두번째 인수가 있을 때: 두번째 인수가 true로 평가되면 지정한 클래스 값을 추가하고 false로 평가되면 제거한다.

// if visible is set remove it, otherwise add it
div.classList.toggle("visible");

// add/remove visible, depending on test conditional, i less than 10
div.classList.toggle("visible", i < 10 );

### console.dir()

console.log는 요소를 HTML과 같은 트리 구조로 출력합니다.
console.dir은 요소를 JSON과 같은 트리 구조로 출력합니다.
구체적으로, console.log는 DOM 요소에 대해 특별한 처리를 제공하지만 console.dir은 그렇지 않습니다. 이것은 종종 DOM JS 객체의 전체 표현을 보려고 할 때 유용합니다.
