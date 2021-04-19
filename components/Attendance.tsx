import React, { useState } from "react";
import DateTimePicker from '@react-native-community/datetimepicker';
import {
  Container,
  Header,
  Content,
  Button,
  Form,
  Item,
  Label,
  Input,
  Text,
  Title,
  Thumbnail,
  Icon,
} from "native-base";
import { ScrollView, TouchableOpacity } from "react-native";
import { MainStyle } from "../styles";
import { Attendance, User } from "../models/user.model";
const AttendanceForm = () => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectDate, setSelectDate] = useState(new Date());
  const [attendance, setAttendance] = useState(new Attendance());
  const [error, setError] = useState(false);

  const handleDate = (value: any) => {
    const date = value as Date;
    setShowDatePicker(false);
    setSelectDate(date);
  };

  const handleSubmit = () => {
    if (!Attendance.isAttendanceValid(attendance)) {
      setError(true);
    }
  };
  return (
    <Container style={MainStyle.container}>
      <ScrollView>
        <Content contentContainerStyle={MainStyle.contentContainerStyle}>
          <Title style={MainStyle.headerTitle}>Attendance</Title>

          <Thumbnail
            style={MainStyle.logo}
            size={100}
            source={{
              uri: "https://logodix.com/logo/1829059.png",
            }}
          />
          <Form>

          <Item
              style={MainStyle.formItem}
              stackedLabel
              last
            >
              <Label>City</Label>
              <Input
               editable={false} defaultValue={attendance.city}
              />
            </Item>
            <Item
              style={MainStyle.formItem}
              stackedLabel
              last
            >
              <Label>Center</Label>
              <Input
                editable={false} defaultValue={attendance.center}
              />
            </Item>
            <Item
              style={MainStyle.formItem}
              error={error && !attendance.newEmployees}
              stackedLabel
              last
            >
              <Label>New Members</Label>
              <Input
                keyboardType="numeric"
                defaultValue={attendance.newEmployees}
              />
            </Item>
            {error && !attendance.newEmployees && (
              <Text style={MainStyle.errorMessage}>Required</Text>
            )}

            <Item
              style={MainStyle.formItem}
              error={error && !attendance.employees}
              stackedLabel
              last
            >
              <Label>Employees</Label>
              <Input
                keyboardType="numeric"
                defaultValue={attendance.employees}
              />
            </Item>
            {error && !attendance.employees && (
              <Text style={MainStyle.errorMessage}>Required</Text>
            )}
            <Item
              style={MainStyle.formItem}
              error={error && !attendance.nonEmployees}
              stackedLabel
              last
            >
              <Label>Non Employees</Label>
              <Input
                keyboardType="numeric"
                defaultValue={attendance.nonEmployees}
              />
            </Item>
            {error && !attendance.nonEmployees && (
              <Text style={MainStyle.errorMessage}>Requiredd</Text>
            )}


            {showDatePicker && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={"date"}
                is24Hour={true}
                display="default"
                onChange={(e, value) => handleDate(value)}
              />
            )}

            <Item
              style={MainStyle.formItem}
              stackedLabel
              last
              onPress={() => setShowDatePicker(true)}
            >
              <Label>Select Date</Label>
              <Input
                editable={false}
                defaultValue={selectDate.toLocaleString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              />
            </Item>

            <Button
              style={MainStyle.formBtn}
              onPress={() => handleSubmit()}
              primary
            >
              <Text style={MainStyle.fromBtnText}>Sumbit</Text>
            </Button>
          </Form>
        </Content>
      </ScrollView>
    </Container>
  );
};
export default AttendanceForm;
