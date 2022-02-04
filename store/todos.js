export const state = () => ({
    list: [
        {
            text: "halo",
            done: true
        },
        {
            text: "halo1",
            done: false
        },
        {
            text: "halo2",
            done: true
        },
        {
            text: "halo3",
            done: true
        },
    ]
})

export const mutations = {
    add(state, text) {
        state.list.push({
            text,
            done: false
        })
    },
    remove(state, { todo }) {
        state.list.splice(state.list.indexOf(todo), 1)
    },
    toggle(state, todo) {
        todo.done = !todo.done
    }
}