import { getMoviesFromApi, getMovieFromApi, getSuggestionsFromApi } from "./db";

const resolvers = {
  Query: {
    movies: (_, args) => getMoviesFromApi(args.limit, args.rating),
    movie: (_, args) => getMovieFromApi(args.id),
    suggestions: (_, args) => getSuggestionsFromApi(args.id),
  },
};



export default resolvers;
