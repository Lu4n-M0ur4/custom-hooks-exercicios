import { Title, NameContainer } from "./style";
import { Card } from "../components/Card/Card";
import useRequestData from "../hooks/useRequestData";
import { LOADING, ERROR } from "../constants/constants";

const CharactersListPage = () => {
  const [caractersList, loading, error] = useRequestData("people");

  return (
    <div>
      <Title>Nomes dos Personagens</Title>
      <NameContainer>
        {error ? (
          <img src={ERROR}></img>
        ) : loading ? (
          <img src={LOADING}></img>
        ) : (
          caractersList.map((caracter) => {
            return (
              <Card
                key={caracter.name}
                text={caracter.name}
                backgroudColor={"nome"}
                textColor={"nome"}
              />
            );
          })
        )}
      </NameContainer>
    </div>
  );
};

export default CharactersListPage;
