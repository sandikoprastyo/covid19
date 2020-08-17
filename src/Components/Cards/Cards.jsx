import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={4}
          sm={10}
          lg={3}
          className={(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h3">
              <CountUp
                start={0}
                end={confirmed.value}
                duration="3.5"
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of Infected cases COVID_19
            </Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          component={Card}
          xs={12}
          md={4}
          sm={10}
          lg={3}
          className={(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h3">
              <CountUp
                start={0}
                end={recovered.value}
                duration="3.5"
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of Recovered cases COVID_19
            </Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          component={Card}
          xs={12}
          md={4}
          sm={10}
          lg={3}
          className={(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h3">
              <CountUp
                start={0}
                end={deaths.value}
                duration="3.5"
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of Deaths cases COVID_19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
export default Cards;
