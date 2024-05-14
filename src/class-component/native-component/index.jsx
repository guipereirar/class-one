import * as S from "./styles";

function CreativeCard(props){
  return(
    <S.CardContainer>
        <S.CardTitle>{props.title}</S.CardTitle>
        <S.CardSubtitle>{props.description}</S.CardSubtitle>
      </S.CardContainer>
  )
}

export default function CreativeComponent() {
  return (
    <S.Container>
      <CreativeCard title="yuri" description='lindo' />
      <CreativeCard title="gabi" description='pfta' />
      <CreativeCard title="pedro" description='amoooo' />
      <CreativeCard title="emily" description='gentil' />
      <CreativeCard title="gusta" description='gigante' />

    </S.Container>
  );
}
