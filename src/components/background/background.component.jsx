import React from "react";
import styled from "styled-components";


export default ()=>{
	return(
		<Backgroung />
	)
}

const Backgroung = styled.div`
  background: url("https://source.unsplash.com/random/1920x1080");
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100vw;
  min-height: 100vh;
  z-index: -1;
  filter: contrast(1.1);
`;