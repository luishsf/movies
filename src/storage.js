let storage = {
  apiKey: '216c669ac3afc192884e527269ef74f1',
  sessionId: localStorage.getItem('session_id') || null,
  userId: localStorage.getItem('user_id') || null,
  pageTitlePostfix: ' — ' + document.title,
  listTypes: [
    {
      title: 'Lançamentos',
      shortTitle: 'Lançamentos',
      query: 'now_playing',
      type: 'collection',
      isCategory: true
    },
    {
      title: 'Filmes Populares',
      shortTitle: 'Populares',
      query: 'popular',
      type: 'collection',
      isCategory: true
    },
    {
      title: 'Filmes Mais Votados',
      shortTitle: 'Melhores Avaliados',
      query: 'top_rated',
      type: 'collection',
      isCategory: true
    },
    // {
    //   title: 'Gêneros',
    //   shortTitle: 'Gêneros',
    //   query: 'genres',
    //   type: 'collection',
    //   isCategory: true
    // },
    {
      title: 'Resultados da Pesquisa',
      query: 'search',
      isCategory: false
    },
    {
      title: 'Your Favorite Movies',
      query: 'favorite',
      isCategory: false
    }
  ],
  categories: {},
  // For Browser History
  backTitle: '',
  moviePath: '',
  createMoviePopup: false,
  moviePopupOnHistory: false
};

// Create categories titles
storage.listTypes.forEach(function(listType){
  storage.categories[listType.query] = listType.title;
});

export default storage;
