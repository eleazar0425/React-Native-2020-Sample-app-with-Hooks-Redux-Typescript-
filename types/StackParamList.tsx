import Movie from '../model/Movie'

type StackParamList = {
  Home: undefined,
  Detail: { movie: Movie}
};

export default StackParamList