import styled from '@emotion/styled';

export const Container = styled.section`
width: fit-content;
  margin: 24px auto;
  padding: 12px;

  background: rgba(142, 227, 212, 0.22) ;
  border-radius: 18px;
  @media screen  and (max-width: 767.98px){
        width: fit-content;`;
  
  export const Title = styled.h2`
    font-size: 24px;    
    margin:0;
    margin-bottom: 18px;
    
    text-align: center;
    
    color: #000000;
  `;
  
  export const StatList = styled.ul`
   display: flex;
  padding: 0;
  margin: 0;

  list-style: none;`;
  
  export const StatListItem = styled.li`
   display: grid;
    justify-items: center;
    
    width: 50px;
    padding: 6px;
    
    transition: transform 250ms ease-in-out;
    
    :first-of-type{
        border-radius: 12px 0 0 12px;
    }
    
    :last-child{
        border-radius: 0 12px 12px 0;
    }
    
    :hover {
  transform: scale(0.93);
}
    @media screen  and (min-width: 768px){
        width: 128px;
  `;
  
  export const StatLabel = styled.span`
  margin-bottom: 8px;
  
  font-weight: 400;
    font-size: 16px;
    color: #dcdcd5;`;
  
   export const StatPercentage = styled.span`
    font-weight: 700;
    font-size: 20px;
    color: #ffffff;
  `;