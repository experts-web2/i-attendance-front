import React, { useState } from "react";
import {
    View,
  Header,
  Content,
  Button,
  Form,
  Item,
  Label,
  Input,
  Text,
  Container,
  DatePicker,
} from "native-base";
import { MainStyle } from "../styles";

const Attendance =()=>{
    const [ date ,setDate ] = useState(new Date())
return (
    <Container style={MainStyle.container}>
<Text> Hello Attendance </Text>
{/* <DatePicker
defaultDate={new Date()}
            minimumDate={new Date(2018, 1, 1)}
            maximumDate={new Date(2018, 12, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Select date"
            textStyle={{ color: "green" }}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            onDateChange={(value)=> console.log("date",value)}
            disabled={false}
            /> */}
    </Container>
)
}
export default Attendance;