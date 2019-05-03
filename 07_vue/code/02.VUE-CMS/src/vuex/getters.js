const getters = {
    name: state => state.user.name,
    cars: state => state.car.goods,
    allCount: state => state.car.allCount
}

export default getters 