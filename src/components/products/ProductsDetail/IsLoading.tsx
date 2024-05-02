const IsLoading = () => {
  return (
    <div className="flex items-center space-x-4 p-4 animate-pulse flex-wrap">
      <div className="flex-1">
        <div className="h-72 bg-gray-300 rounded-lg w-100"></div> {/* 이미지 스켈레톤 */}
      </div>
      <div className="flex-2">
        <div className="space-y-3">
          <div className="h-8 bg-gray-300 rounded w-3/4"></div> {/* 제품 이름 스켈레톤 */}
          <div className="h-4 bg-gray-300 rounded w-1/2"></div> {/* 제품 설명 스켈레톤 */}
          <div className="h-4 bg-gray-300 rounded w-1/4"></div> {/* 추가 정보 스켈레톤 */}
          <div className="flex space-x-2">
            <div className="h-10 bg-purple-300 rounded w-20"></div> {/* 버튼 스켈레톤 */}
            <div className="h-10 bg-gray-300 rounded w-20"></div> {/* 버튼 스켈레톤 */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default IsLoading