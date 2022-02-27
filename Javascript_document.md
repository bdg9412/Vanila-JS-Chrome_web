# Javascript

## 자바스크립트란?

자바스크립트는 객체 기반의 스크립트 언어이다. 주로 웹 브라우저에서 사용되며 웹의 동작을 구현하나 Node.js와 같은 프레임워크를 사용하면 서버 측 프로그래밍에서도 사용할 수 있다.

자바스크립트의 특징?

1. 자바스크립트는 객체 기반의 스크립트 언어
2. 자바스크립트는 동적이며, 타입을 명시할 필요가 없는 인터프리터 언어
3. 자바스크립트는 객체 지향형 프로그래밍과 함수형 프로그래밍을 모두 표현할 수 있다.

## 자바스크립트 기본 타입?

타입이란 프로그램에서 다룰 수 있는 값의 종류를 의미한다. 자바스크립트의 기본 타입은 크게 원시 타입과 객체 타입으로 구분할 수 있다.

1. 원시 타입
    1. 숫자 // let num = 10;
    2. 문자열 // let myName = “홍길동”
    3. boolean 
    4. 심볼
    5. undefined // let str;
    
    ** null이란 object 타입으로 아직 ‘값’이 정해지지 않은 것이며 undefined는 ‘타입’이 정해지지 않은 것을 의미 **
    
    ** 값이 변화할 수 있는 변수를 선언할 때에는 let을 사용하고 변화하지 않는 변수를 선언할 땐 const를 사용**
    
2. 리스트

```jsx
const mon = "mont";
const tue = "tue";
const wed = "wed";

// 리스트 선언 및 출력
let daysOfWeek = [mon, tue, wed];
console.log(daysOfWeek[1]) // 리스트의 요소에 접근 가능하다. 출력은 tue이다.

// 리스트 활용
daysOfWeek.push("sun");
console.log(daysOfWeek); //[mon, tue, wed, sun] 출력

```

1. 객체 타입

객체형은 원시형과 달리 다양한 데이터를 담을 수 있다. 키로 구분된 데이터 집합이나 복잡한 개체(entity)를 저장할 수 있다. 객체는 중괄호를 이용홰 만들 수 있다. 중괄호 안에는 “키:값” 쌍으로 구성된 property를 여러 개 넣을 수 있다. 객체를 서랍장으로 가정하면, 서랍장 안은 property이며, 파일 각각에 붙어있는 이름표는 객체의 키라 할 수 있다.

```jsx
// 객체 선언
let user = new Object(); // "객체 생성자" 문법
let user = {}; // "객체 리터럴" 문법

// 객체 선언
let user = { // 객체
	name: "John", // key는 name 값은 Jhon
	age:30 // key는 age 값은 30
}

console.log(user.name) // John 출력

// 객체 활용
user.name = "BDG" 
console.log(user.name) // BDG 출력

```

1. 자료형 추가 설명

자바스크립트에서 문자열을 따옴표로 묶는데 큰따옴표와 작은따옴표의 경우 차이를 두지 않는다. 다만, 역따옴표로 변수나 표현실을 감싼 후 ${…} 안에 넣어주면, 원하는 변수나 표현식을 문자열 중간에 손쉽게 넣을 수 있다.

```jsx
let name = "John";

// 변수를 문자열 중간에 삽입
alert(`Hello, ${name}!`); // Hello, John! 출력

// 표현식을 문자열 중간에 삽입
alert( `the result is ${1 + 2}` ); // the result is 3 출력

// typeof
console.log(typeof name); // string 출력, typeof로 데이터 타입 확인 가능
```

## 함수

함수는 재사용 가능한  기능을 정의하는 것(캡슐화하여 여러번 사용할 수 있도록 해준다)

```jsx
function sayHello(name){
	console.log(`hello my name is ${name}`);
}

sayHello("BDG"); // BDG를 인자로 받아 hello my name is BDG 출력

//객체 안에서 함수 정의
const player = {
	name_origin: "BDG",
	sayHello: fucntion(name){
		console.log(`hello my name is ${name}`);
	}
	plus: function(a,b){
		return a+b
	}
}

player.sayHello("Dongkeun") // Dongkeun을 인자로 받아 hello my name is Dongkeun 출력
const result = plus(2,3) // result의 값이 5가 된다.
```

## 조건문

```jsx
const age = parseInt("bdg") // parseInt는 string을 int로 변환 "16"-> 16, "문자열"-> NaN

if(isNaN(age)){
	console.log("please enter a number");
}
else if(!(isNaN(age))){
	console.log("number!");
}
else{
	console.log("Ohing?!");
}
```

비교연산자는 아래와 같다.

1. AND: &&
2. OR: || 
3. 대소비교: <, >, ≤, ≥

## DOM(문서 객체 모델, Document Object Model)

HTML DOM은 HTML 문서를 조작하고 접근하는 표준화된 방법을 정의하며, javascript는 documnet 객체를 통하여 HTML의 각 요소에 접근할 수 있다.

## Document Event

```jsx
const title = document.getElementById("title");

function handleTitleClick() {
    console.log("title was clicked!");
}

function handleMousEnter(){
    console.log("mouse hover!");
}

function handleMouseLeave(){
	console.log("mouse leave!");
}

title.addEventListener("click", handleTitleClick); // 클릭 이벤트시 handleTitleClick 호출
title.addEventListener("mouseenter", handleMousEnter); // 마우스 호버시 handleMousEnter 호출
title.addEventListener("mouseleave", handleMouseLeave); // 마우스 호버 해제시 handleMouseLeave 호출
```