import React, { useState } from 'react';
import { Grid, Typography, Icon } from "@material-ui/core";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

export default function RowCart(props) {
  const { image_url, tagline } = props.cart;
  const [numberOfValue, setNumberOfValue]=useState(0);

  function incrementalValue(e) {
    e.stopPropagation();
    setNumberOfValue(numberOfValue + 1);
  }
  function decrementalValue(e) {
    e.stopPropagation();
    setNumberOfValue(numberOfValue - 1);
  }
  return (
      <Grid container 
      style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"cebter"
      }}
      >
        <Grid item xs={2}>
        <Grid container 
        style={{
          display: "flex",
          justifyContent: "center",
        }}
        >
            <div 
            style={{
              position:"absolute",
              left: 38,
              top: 52,
              zIndex: -1 ,
              background:"#FAB901",
              borderRadius:"8px",
              padding: "3px",
             
            }}>
            <Typography 
            style={{
                fontSize: "11px",
                fontWeight: "bold",
                color: "#664200",
            }}>€12</Typography>
            </div>
          <img
            style={{
              width: "24px",
              height: "70px"
            }}
            src={image_url} />
          </Grid>
        </Grid>
        <Grid item xs={5}>
          <Typography variant="subtitle2"
            style={{
              color:"#D9D9DB",
              fontSize:"12px",
              fontWeight:"normal",
              marginBottom:"4px"
              }}> 
            {tagline}
            </Typography>
          <Typography variant="subtitle2"
           style={{
             color: "#B0AFB7",
             fontSize: "9px",
             fontWeight: "normal"
           }}> 
              Additional information here
          </Typography>
        </Grid>
        <Grid item xs={3} 
        style={{display:"flex"}}>
          <div
           style={{
            borderRadius: "4px 0 0 4px",
            border:"1px solid #4D4B49",
            color:"#B0AFB7",
            width:"26px",
            height: "20px",
            textAlign: "center",
            fontWeight:"bold",
            cursor:"pointer"
          }}
          onClick={decrementalValue}
          >-</div>
        <div
          style={{
            color: "#B0AFB7",
             width: "26px",
             height: "20px",
             textAlign:"center"
          }}
        >{numberOfValue}</div>
        <div 
          style={{
             background:"#FAB901",
             borderRadius:"0 4px 4px 0",
             color:"#2D1F00",
             width: "26px",
             height: "20px",
            textAlign: "center",
            cursor: "pointer",
          }}
          onClick={incrementalValue}
        >+</div>
        </Grid>
        <Grid item xs={2}>
         <Icon>
          <DeleteOutlineIcon style={{ color:"#936464"}}/>
         </Icon>
        </Grid> 

      </Grid>
    );
}
