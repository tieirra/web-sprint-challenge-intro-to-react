// Write your Character component here

import React, { useState } from "react";
import styled from 'styled-components';
import App from "../App"

function People(props) {


  return (

    <div> {props.data.map((data, i) => {
      return (

        <Card key={i}>
          <h1>Name: {data.name}</h1>
          <h3>Eye color: {data.eye_color}</h3>

          <img src={data.image} />
        </Card>

      );


    })}

    </div>
  );


};




const div = styled.div`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  display: flex;
  align-items: center;
`;


const Card = styled.div`
  background-color: #fff;
  border: solid 2px hotpink;
  border-radius: 2%;
  width: 55%;
  margin-left: 15%;
  padding: 2%;
  box-shadow: 5px 5px 20px pink;
  color: #555;
`;


const img = styled.img`
  border: gray solid 3px;
  border-radius: 5%;
  max-width: 100%;
`;


export default People;