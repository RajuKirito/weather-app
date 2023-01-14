import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function DayCard(props) {
  const day = props.day;
  const date = new Date(day.datetime);

  console.log(date.getDate());
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          width="50%"
          image="https://cdn-icons-png.flaticon.com/512/979/979585.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {day.conditions}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {date.toJSON().slice(0, 10)}
            {date.toLocaleString("default", {
              weekday: "long"
            })}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
