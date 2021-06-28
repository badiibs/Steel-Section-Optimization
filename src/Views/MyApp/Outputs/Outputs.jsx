  
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import OutputElem from '../../../Components/OutputElem';
import TableElem from '../../../Components/TableElem';
import CardElem from '../../../Components/CardElem';
import ChartElem from '../../../Components/ChartElem';
import calculationFunctions from '../Calculations/calculations';
import axios from 'axios';
import * as tf from '@tensorflow/tfjs';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Outputs = ({
  inputsData,
  outputsData,
  updateValue
}) => {
  const classes = useStyles();
  const [ chartData, setChartData ] = useState();
  const [ sectionName, setSectionName ] = useState("");

  //const sectionName = "";
	useEffect(() => {
    const computeData = async () => {
      /*try {
        const res = await calculationFunctions.predicitions(inputsData);
        setSectionName(res);
      } catch(e) {
        console.log("res",res);
      }
      const res = await calculationFunctions.predicitions(inputsData);
      setSectionName(res);*/

      await calculationFunctions.predicitions(inputsData)
      .then((res) => {
        console.log("res",res);
        setSectionName(res);
      })
      .catch(error => {
        console.log(error);
      })
    }
    computeData();
  }, []);
  
  
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <CardElem
            title="The best steel section"
            subtitle="Results :"
          >
            <div>
              {sectionName}
            </div>
          </CardElem>
          
        </Grid>
        <Grid container spacing={3}>
              
            </Grid>
      </Grid>
    </div>
  )
}

export default Outputs;