let goods = JSON.parse(window.localStorage.getItem("goods") || '[]')

const state = {
  goods: goods
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
    window.localStorage.setItem("goods", JSON.stringify(state.goods))
  },
  updateGoodsCount(state, goodInfo) {
    state.goods.some(item => {
      if (item.id == goodInfo.id) {
        item.count = parseInt(goodInfo.count)
      }
    })
    window.localStorage.setItem("goods", JSON.stringify(state.goods))
  },
  updateGoodsSelected(state, goodInfo) {
    state.goods.some(item => {
      if (item.id == goodInfo.id) {
        item.selected = goodInfo.selected
      }
    })
    window.localStorage.setItem("goods", JSON.stringify(state.goods))
  },
  removeGoods(state, id) {
    state.goods.some((item, i) => {
      if (item.id == id) {
        state.goods.splice(i, 1)
        return true
      }
    })
     window.localStorage.setItem("goods", JSON.stringify(state.goods))
  } 
}

const getters = {
  goodsCount: function(state) {
    let goodsCount_ = {}
    state.goods.forEach(good => {
      goodsCount_[good.id] = good.count 
    })
    return goodsCount_
  },
  allCount: function(state) {
    let allCount_ = 0
    state.goods.forEach(item => {
      allCount_ += item.count
    })
    return allCount_
  },
  goodsSelected: function(state) {
    let goodsSelected_ = {}
    state.goods.forEach(item => {
      goodsSelected_[item.id] = item.selected
    })
    return goodsSelected_
  },
  goodsSettleInfo: function(state) {
    let goodsSettleInfo_ = {
      count: 0,
      amount: 0
    }
    state.goods.forEach(item => {
      if (item.selected) {
        goodsSettleInfo_.count += item.count
        goodsSettleInfo_.amount += item.price * item.count
      }
    })
    return goodsSettleInfo_
  }
}

const car = {
  state,
  mutations,
  getters
}
export default car