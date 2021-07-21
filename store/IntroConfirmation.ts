interface State {
  isConfirmed?: boolean
}

export const state = (): State => ({
  isConfirmed: undefined,
})

export const getters = {
  isConfirmed: (state: State) => state.isConfirmed,
}

export const mutations = {
  confirmIntroWarning(state: State) {
    state.isConfirmed = true
  },
  rejectIntroWarning(state: State) {
    state.isConfirmed = false
  },
}
