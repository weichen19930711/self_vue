let goods = JSON.parse(window.localStorage.getItem("goods") || '[]')
let allCount = window.localStorage.getItem("allCount") || 0

const state = {
  goods: goods,
  allCount: allCount
}

const mutations = {
  addToCar(state, goodInfo) {
    let flag = false
    state.goods.some(good => {
      if (good.id == goodInfo.id) {
        flag = true
        good.count += goodInfo.count
        return true    
      }
    })
    if (!flag) {
      state.goods.push(goodInfo)  
    }
    state.allCount += goodInfo.count

    window.localStorage.setItem("goods", JSON.stringify(state.goods))
    window.localStorage.setItem("allCount", state.allCount)
  } 
}

const car = {
  state,
  mutations
}
export default car