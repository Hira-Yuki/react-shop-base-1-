import { productsList } from "../../store/products";
import { useRecoilValueLoadable } from "recoil";


{/* <section class="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mt-10 xl:container mx-auto">
  <h2 class="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">패션</h2>
  <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list" data-scroll="true">
    <a class="card card-bordered border-gray-200 dark:border-gray-800 card-compact lg:card-normal" href="/product/1">
      <figure class="flex h-80 bg-white overflow-hidden">
        <img
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt="상품 이미지"
          class="transition-transform duration-300"
        />
      </figure>
      <div class="card-body bg-gray-100 dark:bg-gray-700">
        <p class="card-title text-base">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</p>
        <p class="text-base">$110</p>
      </div>
    </a>
    <a class="card card-bordered border-gray-200 dark:border-gray-800 card-compact lg:card-normal" href="/product/2">
      <figure class="flex h-80 bg-white overflow-hidden">
        <img
          src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
          alt="상품 이미지"
          class="transition-transform duration-300"
        />
      </figure>
      <div class="card-body bg-gray-100 dark:bg-gray-700">
        <p class="card-title text-base">Mens Casual Premium Slim Fit T-Shirts</p>
        <p class="text-base">$22</p>
      </div>
    </a>
    <a class="card card-bordered border-gray-200 dark:border-gray-800 card-compact lg:card-normal" href="/product/3">
      <figure class="flex h-80 bg-white overflow-hidden">
        <img
          src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
          alt="상품 이미지"
          class="transition-transform duration-300"
        />
      </figure>
      <div class="card-body bg-gray-100 dark:bg-gray-700">
        <p class="card-title text-base">Mens Cotton Jacket</p>
        <p class="text-base">$56</p>
      </div></a
    ><a class="card card-bordered border-gray-200 dark:border-gray-800 card-compact lg:card-normal" href="/product/4"
      ><figure class="flex h-80 bg-white overflow-hidden">
        <img
          src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
          alt="상품 이미지"
          class="transition-transform duration-300"
        />
      </figure>
      <div class="card-body bg-gray-100 dark:bg-gray-700">
        <p class="card-title text-base">Mens Casual Slim Fit</p>
        <p class="text-base">$16</p>
      </div></a
    >
  </div>
</section> */}


/**
 * API 통신을 할 때 로딩중인지를 탐색하고 로딩 중이라면 Skeleton UI를 노출 시켜 보세요.
 */
const ProductsLoad = ({ limit }: { limit: number }): JSX.Element => {



  // switch (productList.state) {
  //   case 'hasValue': return (
  //     <>
  //       {productList.contents.slice(0, limit).map((product, index) => (
  //         <div key={index} className="card bordered">
  //           <img src={product.image} alt={product.title} className="h-80 rounded" />
  //           <div className="card-body">
  //             <h2 className="card-title">{product.title}</h2>
  //             <p>{product.description}</p>
  //             <div className="card-actions">
  //               <button className="btn btn-primary">Buy Now</button>
  //             </div>
  //           </div>
  //         </div>
  //       ))}
  //     </>
  //   )
  //   case 'loading':
  //     return (
  //       <>
  //         {
  //           Array.from(Array(limit)).map((elm, index) => {
  //             return (
  //               <div key={index} className="card bordered animate-pulse">
  //                 <div className="h-80 rounded bg-gray-100"></div>
  //                 <div className="card-body">
  //                   <div className="space-y-4">
  //                     <div className="h-6 bg-gray-100 rounded"></div>
  //                     <div className="h-6 bg-gray-100 rounded w-5/6"></div>
  //                     <div className="h-6 bg-gray-100 rounded w-1/4"></div>
  //                   </div>
  //                 </div>
  //               </div>
  //             );
  //           })
  //         }
  //       </>
  //     )
  //   case 'hasError':
  //     return <div>오류가 발생했습니다. 데이터를 불러올 수 없습니다.</div>;
  //   default:
  //     return <div>데이터를 불러오는 중...</div>;
  // }

  return (
    <>
      {0 < limit ? (
        Array.from(Array(limit)).map((elm, index) => {
          return (
            <div key={index} className="card bordered animate-pulse">
              <div className="h-80 rounded bg-gray-100"></div>
              <div className="card-body">
                <div className="space-y-4">
                  <div className="h-6 bg-gray-100 rounded"></div>
                  <div className="h-6 bg-gray-100 rounded w-5/6"></div>
                  <div className="h-6 bg-gray-100 rounded w-1/4"></div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div>제품이 없습니다.</div>
      )}
    </>
  );
};

export default ProductsLoad;
