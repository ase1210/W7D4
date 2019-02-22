export const fetchAllPokemon = () => (
  $.ajax({
    method: 'GET',
    url: '/api/pokemon',
    dataType: 'json'
  })
);

export const fetchPoke = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/pokemon/${id}`,
    dataType: 'json'
  })
);