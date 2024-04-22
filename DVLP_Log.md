# 개발 진행 기록 

### 요구 사항
샘플페이지 참고하여 구현하기 https://react-shop-oinochoe.vercel.app/
클론 코딩을 할 수도 있지만 내용 참고하여 개인 프로젝트를 구현해도 OK.

### 결정 사항
- 과제 제출까지 남은 기간이 2일 정도인 상태이므로 기존의 템플릿 코드를 최대한 활용해서 클론 코딩 진행하는 것으로 결정.
- 테마 등의 전역 상태 관리를 위한 라이브러리는 보일러플레이트가 적어 빠르게 코드 작성이 가능한 Recoil을 사용하기로 결정.
- 나머지 라이브러리는 템플릿 코드에서 이미 사용 중인 것을 중심으로 사용.
- 디자인 패턴은 이전부터 컴포넌트를 재사용하기 위해 최대한 작은 요소로 쪼개는 방식으로 관심이 있던 아토믹 패턴을 참고하기로 함. 

## Day 1
<details>
<summary>더보기/접기</summary>

- 제공된 프로젝트 살펴보기 
- 요구사항 체크하기
- 이미 작성된 부분과 미완성된 부분 파악하기
- 기존에 작성된 부분을 참고하여 개발 방향 결정하기
- Header / Footer 영역 마크업 하기

### 회고
이미 어느정도 작업이 진행된 프로젝트를 이어서 진행해 보는 것은 처음이기에 긴장되는 과제.
다만 기본 틀은 잡혀 있기 때문에 내용 파악을 끝내고 나면 금방 진행할 수 있을 것으로 생각되서 기대된다.
이미 작성되어 있는 코드 컨벤션에 맞춰 작성할 수 있을지도 걱정되는 부분.

### 삽질 

<details>
<summary>로컬 개발 환경에서는 올바르게 표시되지만 배포한 vercel 페이지에서는 카드 이미지가 보이지 않는 문제</summary>

아래와 같은 코드로 svg를 모듈화 시도 했으나 문제가 해결되지 않음
```ts
const svgModules = import.meta.globEager('../assets/img/svg/*.svg');

const CardItem = ({ itemName }) => {
  const SvgComponent = svgModules[`../assets/img/svg/${itemName}.svg`]?.default;

  if (!SvgComponent) {
    return <li>SVG not found</li>; 
  }

  return (
    <li>
      <SvgComponent alt={`${itemName} icon`} />
    </li>
  );
}

export default CardItem;
```

시간이 없어서 조금 무식하지만 하나하나 모두 임포트한 뒤 사용하도록 수정 

```ts
import Visa from '../../../assets/img/svg/visa.svg';
import Master from '../../../assets/img/svg/master.svg';
import AmericanExpress from '../../../assets/img/svg/americanExpress.svg';
import Paypal from '../../../assets/img/svg/paypal.svg';
import DinersClub from '../../../assets/img/svg/dinersClub.svg';
import Discover from '../../../assets/img/svg/discover.svg';

const svgIcons = {
  visa: Visa,
  master: Master,
  americanExpress: AmericanExpress,
  paypal: Paypal,
  dinersClub: DinersClub,
  discover: Discover
};

const CardItem = ({ itemName }) => {

  return (
    <li>
      <img src={svgIcons[itemName]} />
    </li>
  )
}

export default CardItem
```
</details>

<details>
<summary>배포한 페이지에서 상품 리스트가 로드되지 않음</summary>

github에는 환경 파일이 업로드 되지 않으므로 vercel에서 환경 변수를 입력해 주어야하는데 이걸 깜빡한 채 배포했었다.

개발 도구에서 네트워크 탭을 확인한 후 API URL이 undefined 인걸 발견하고 안도의 한숨을 쉬며 수정했다.
</details>
</details>