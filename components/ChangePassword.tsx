import React ,{useState} from "react"
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
  const ChangePassword =()=>{
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const handleSubmit =()=>{

    }
      return (
          <Container  style={MainStyle.container}>

              <Content contentContainerStyle={MainStyle.contentContainerStyle} >
              <Title  style={MainStyle.headerTitle}  >Change Password</Title>
              <Thumbnail
                 style={MainStyle.logo}
            size={100}
            source={{
              uri: "https://logodix.com/logo/1829059.png",
            }}
          />
                  <Form>
                  <Item stackedLabel last>
              <Label>Old Password</Label>
              <Input secureTextEntry defaultValue={oldPassword} onChangeText={(value)=> setOldPassword(value)}/>
            </Item>
            <Item stackedLabel last>
              <Label>New Password</Label>
              <Input secureTextEntry defaultValue={newPassword} onChangeText={(value)=> setNewPassword(value)}/>
            </Item>
            <Item stackedLabel last>
              <Label>Confirm Password</Label>
              <Input secureTextEntry defaultValue={confirmPassword} onChangeText={(value)=> setConfirmPassword(value)}/>
            </Item>
            {newPassword === confirmPassword ? (
              <Text>Password Matched</Text>
            ) : (
              <Text>Password Not Matched</Text>
            )}
            <Button style={MainStyle.formBtn}  primary>
                <Text  style={MainStyle.fromBtnText}  onPress={() => handleSubmit()}> Submit</Text>
            </Button>
                  </Form>
              </Content>

          </Container>
      )
  }
  export default ChangePassword;