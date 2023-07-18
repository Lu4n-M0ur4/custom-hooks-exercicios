
import {Title,PostContainer } from './style'
import { Card } from '../components/Card/Card'
import useRequestData from '../hooks/useRequestData'
import { ERROR, LOADING } from '../constants/constants'


const  FilmListPage = () => {
  const [filmsList, loading, error]  = useRequestData("films")

  return (
    <div>
      <Title>Título dos filmes</Title>
      <PostContainer>

      {error ? (
          <img src={ERROR}></img>
        ) : loading ? (
          <img src={LOADING}></img>
        ) : filmsList.map((film) => {
        return(
          <Card 
          key={film.title} 
          title={film.title}
          text={film.opening_crawl} 
          backgroudColor={'gray'}
          textColor={'#ffffff'}
          />)
      })}
      </PostContainer>
    </div>
  );
}

export default FilmListPage;



