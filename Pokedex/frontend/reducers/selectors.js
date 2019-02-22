export const selectAllPokemon = (state) => (
  Object.values(state.entities.pokemon)
)

export const selectPoke = (state, id) => (
  Object.values(state.entities.pokemon[id])
) 