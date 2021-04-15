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
    const [error, setError] = useState(false);

    const handleSubmit =()=>{
if(!oldPassword || !newPassword || !confirmPassword){
  setError(true)
}
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
                  <Item error={error && !oldPassword} stackedLabel last>
              <Label>Old Password</Label>
              <Input secureTextEntry defaultValue={oldPassword} onChangeText={(value)=> setOldPassword(value)}/>
            </Item>
            {error && !oldPassword && <Text style={MainStyle.errorMessage}>Old password is required</Text>}
            <Item error={error && !newPassword} stackedLabel last>
              <Label>New Password</Label>
              <Input secureTextEntry defaultValue={newPassword} onChangeText={(value)=> setNewPassword(value)}/>
            </Item>
            {error && !newPassword && <Text style={MainStyle.errorMessage}>New password is required</Text>}
            <Item error={error && !confirmPassword} stackedLabel last>
              <Label>Confirm Password</Label>
              <Input secureTextEntry defaultValue={confirmPassword} onChangeText={(value)=> setConfirmPassword(value)}/>
            </Item>
            {error && !confirmPassword && <Text style={MainStyle.errorMessage}>Confirm password is required</Text>}
            {confirmPassword.length > 0 && newPassword !== confirmPassword && 
              <Text style={MainStyle.errorMessage}>Password Not Matched</Text>
           }
            <Button style={MainStyle.formBtn}  onPress={() => handleSubmit()} primary>
                <Text  style={MainStyle.fromBtnText}  > Submit</Text>
            </Button>
                  </Form>
              </Content>

          </Container>
      )
  }
  export default ChangePassword;