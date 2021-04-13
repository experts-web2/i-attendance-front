import React, { useState } from "react";
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
} from "native-base";
import { MainStyle } from "../styles";
const ForgotPassword = () => {

  const [email, setEmail] = useState("");

 const handleRequestPassword =()=>{
 console.log("email" , email)

  }
  return (
    <Container style={MainStyle.container}>
      <Content contentContainerStyle={MainStyle.contentContainerStyle}>
        <Title style={MainStyle.headerTitle}>Forgot Password</Title>
        <Thumbnail
          style={MainStyle.logo}
          size={100}
          source={{
            uri: "https://logodix.com/logo/1829059.png",
          }}
        />
        <Form>
          <Item style={MainStyle.formItem} stackedLabel last>
            <Label>Email</Label>
            <Input defaultValue={email} onChangeText={(value)=> setEmail(value)}/>
          </Item>

          <Button style={MainStyle.formBtn}primary>
            <Text style={MainStyle.fromBtnText} onPress={() => handleRequestPassword()}>Request Password</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
};
export default ForgotPassword;
