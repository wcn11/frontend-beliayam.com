export const state = () => ({
    carts: [],
    cartsNav: [],
    vouchers: [],
    selectedVoucher: []
})

export const getters = {

    getCountCart(state) {

        return state.carts.reduce((accumulator, product) => {

            return accumulator + (product.price * product.quantity)

        }, 0)

    },
    getCarts(state) {

        return state.carts

    },
    getCartsNav(state) {

        return state.cartsNav

    },
    getCartsVouchers(state) {

        return state.vouchers

    },
    getSelectedVouchers(state, getters) {

        let countCart = getters.getCountCart

        let counter = 0

        let totalVoucherFee = 0

        for (let i = 0; i < state.selectedVoucher.length; i++) {

            if (state.selectedVoucher[i].discountBy === "percent") {

                let priceAfterDiscount = (state.selectedVoucher[i].discountValue / 100) * countCart

                totalVoucherFee += priceAfterDiscount

                state.selectedVoucher[i].discountValueFee = priceAfterDiscount

                counter += (countCart - priceAfterDiscount)

                countCart -= priceAfterDiscount

                continue

            } else if (state.selectedVoucher[i].discountBy === "price") {

                state.selectedVoucher[i].discountValueFee = state.selectedVoucher[i].discountValue

                totalVoucherFee += state.selectedVoucher[i].discountValue

                counter += (countCart - state.selectedVoucher[i].discountValue)

                countCart -= state.selectedVoucher[i].discountValue

                continue

            }

        }

        return {
            grandTotalAfterDiscount: counter,
            totalVoucherFee: totalVoucherFee,
            vouchers: state.selectedVoucher
        }

    },
}

export const mutations = {
    async SET_CARTS(state, data) {
        if (data) {
            state.carts = data.products
        }
    },
    async SET_CARTS_NAV(state, data) {
        if (data.products) {

            state.cartsNav = data.products
        }
    },
    async SET_INCREMENT(state, data) {

        state.carts[data.indexFilter].quantity++
    },
    async SET_DECREMENT(state, data) {

        state.carts[data.indexFilter].quantity--
    },
    async SET_INCREMENT_NAV(state, data) {

        state.cartsNav[data.indexFilter].quantity++
    },
    async SET_VOUCHERS(state, data) {

        state.vouchers = data

    },
    async SET_VOUCHER(state, data) {

        state.selectedVoucher.push(data)

    }
}

export const actions = {
    async setCarts({ commit }) {

        await this.$axios.$get(`${process.env.NUXT_ENV_BASE_URL_API_VERSION}/cart?page=1&show=6&sortBy=ASC&orderBy=name`)
            .then((results) => {
                if (results.data) {
                    commit('SET_CARTS', results.data);
                }
            })
    },
    async setCartsNav({ commit }) {

        await this.$axios.$get(`${process.env.NUXT_ENV_BASE_URL_API_VERSION}/cart?page=1&show=6&sortBy=ASC&orderBy=name`)
            .then((results) => {
                if (results.data) {
                    commit('SET_CARTS_NAV', results.data);
                }
            })
    },
    async setVouchers({ commit }, data) {

        await this.$axios.$get(`${process.env.NUXT_ENV_BASE_URL_API_VERSION}/voucher/user?page=1&show=10&sortBy=ASC&orderBy=voucherCode&platform=website&isActive=true`)
            .then((results) => {
                if (results.data) {
                    commit('SET_VOUCHERS', results.data);
                }
            })

    },
    async setVoucher({ commit }, data) {

        commit('SET_VOUCHER', data);

    },
    async setIncrement({ commit }, data) {

        commit('SET_INCREMENT', data);

    },
    async setDecrement({ commit }, data) {

        commit('SET_DECREMENT', data);

    },
    async setIncrementNav({ commit }, data) {

        commit('SET_INCREMENT_NAV', data);
    },
}