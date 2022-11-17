import styled from "styled-components";

const Info = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    background-color: rgba(0,0,0,0.2);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &:hover ${Info}{
        opacity: 1;
    }
`;

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: whitesmoke;
    position: absolute;
`;

const Image = styled.img`
    height: 75%;
    z-index: 2;
`;

const Icon = styled.div`
    opacity: 0;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    transition: all 0.5s ease;
 
    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`;

const ProductItem = ({item}) => {
  return (
    <Container>
        <Circle />
        <Image src={item.img} />
        <Info>
            <Icon>[||||]</Icon>
    
            <Icon>O</Icon>
        
            <Icon>&gt;3</Icon>
        </Info>
    </Container>
  )
}

export default ProductItem