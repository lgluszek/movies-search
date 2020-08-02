const paths = {
  root: '/',
  moviesList: '/movies',
  movieDetails: (id: string) => `/movies/${id}`,
  somethingWentWrong: `/something-went-wrong`,
};

export default paths;
