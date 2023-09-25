import Header from './components/Header';
import Footer from './components/Footer';
import './style.scss';
import Popup from './components/Popup';
import List from './components/List';

function App() {
	let isPop = true;
	let isFooter = true;
	return (
		<>
			<Header />
			{isFooter && <Footer />}
			{isPop ? <Popup /> : null}
			<List />
		</>
	);
}

export default App;

/*
SSR vs CSR

SSR- Server Side Rendering
- 페이지 이동시마다 일일이 서버쪽에 HTML파일을 요청해서 가져오는 방식
- 장점 : 초기 로딩속도가 빠름, 검색엔진 최적화 (SEO 좋음)
- 단점 : 페이지 이동시마다 일일이 서버쪽에 파일을 요청해야 되므로 페이지 깜박거림

CSR_ Client Side Rendering
- 초기에 빈 HTML 파일을 서버쪽에서 가져오고 화면에 출력될 모든 데이터를 자바스트립트로 chunk단위의 모든 데이터 차ㅣㄹ 가져온후 빈 HTML 파일에 동적으로 출력
- 장점 : 한번에 서브페이지 포함한 모든 데이터를 불러오기 때문에 페이지 이동시마다 새롭게 파일을 요청할 필요가 없기 때문에 페이지 전환이 자연스러움
- 단점 : 모든 페이지에 대한 데이터를 한번에 다 가져오기 떄문에 초기 로딩속도가 SSR방식에 비래서는 늦음, 검색엔진 최적화가 안됨


Real DOM ( 실제돔 )
-HTML 태그를 이용해서 구조를 만들면 브라우저가 이를 해석해서 실제 DOM 형태로 객체를 만들고 화면에 렌더링


Virtual DOM ( 가상돔 )
- 브라우저에 의해 Real DOM으로 변경되기 전 자바스크립트에 의해서 메모리상으로가 가상의 DOM을 만들어서 기존의 DOM구조와 차이점을 분석하고 바뀐 부분을 다시 렌더링하는 형태


JSX
- 리액트에 DOM을 효율적으로 생성하기 위한 HTML의 규칙성을 따라한 자바스크립트 돔 제작 방식


컴컴포넌트 생성시 주의섬
- 무조건 JSX를 리턴
- 컴포넌트 함수 이름은 대문자로 지정
- export로 내보내야지 다른 컴포넌트에서 불러올수 있음
- 하나의 컴포넌트 함수는 단인 JSX를 리턴 가능
- 복수개의 JSX를 리턴하고 싶을때는 wrapping El로 묶어서 그룹화한뒤 리턴
- 중첩된 Element 노드를 생성하지 않고 복수개의 JSX를 리턴하고 싶을떄는 <> </> Fragment로 감싸줌


*/
