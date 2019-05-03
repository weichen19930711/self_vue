let goods = JSON.parse(window.localStorage.getItem("goods") || '[]')
let allCount = parseInt(window.localStorage.getItem("allCount") || '0')

const state = {
  goods: goods,
  allCount: allCount,
  goodsCount: {}
}

const mutations = {
  addToCar(state, goodInfo) {
    let flag = false
    state.goods.some(good => {
      if (good.id == goodInfo.id) {
        flag = true
        good.count += parseInt(goodInfo.count)
        return true    
      }
    })
    if (!flag) {
      state.goods.push(goodInfo)  
    }
    state.allCount += parseInt(goodInfo.count)

    window.localStorage.setItem("goods", JSON.stringify(state.goods))
    window.localStorage.setItem("allCount", state.allCount)
  } 
}

const getters = {
  goodsCount: function(state) {
    state.goods.forEach(good => {
      state.goodsCount[good.id] = good.count 
    })
    return state.goodsCount
  }
}

const car = {
  state,
  mutations,
  getters
}
export default car