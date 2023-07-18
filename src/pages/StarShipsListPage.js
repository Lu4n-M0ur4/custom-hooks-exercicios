
import {Title,PostContainer } from './style'
import { Card } from '../components/Card/Card'

import useRequestData from '../hooks/useRequestData';
import { ERROR, LOADING } from '../constants/constants';


const  StarShipsListPage = () => {
 
  const [starShipsList, loading , error] = useRequestData("starships")


  return (
    <div>
      <Title>Título das Naves</Title>
      <PostContainer>

      {error ? (
          <img src={ERROR}></img>
        ) : loading ? (
          <img src={LOADING}></img>
        ) :starShipsList.map((starShip) => {
        return(
          <Card 
          key={starShip.name} 
          title={starShip.name}
          text={starShip.manufacturer} 
          backgroudColor={'gray'}
          textColor={'#ffffff'}
          />)
      })}
      </PostContainer>
    </div>
  );
}

export default StarShipsListPage;



