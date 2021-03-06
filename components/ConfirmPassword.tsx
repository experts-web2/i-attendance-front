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
  const ConfirmPassword =()=>{
    const [ code , setCode]= useState("")
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(false);
    const handleSubmit =()=>{
      if(!code || !newPassword || !confirmPassword){
        setError(true)
       }
    }
      return (
          <Container style={MainStyle.container}>
              <Content contentContainerStyle={MainStyle.contentContainerStyle}>
              <Title style={MainStyle.headerTitle} >Confirm Password </Title>
              <Thumbnail
               style={MainStyle.logo}
            size={100}
            source={{
              uri: "https://logodix.com/logo/1829059.png",
            }}
          />
                  <Form>
                  <Item stackedLabel last>
              <Label>Code</Label>
              <Input keyboardType="numeric" defaultValue={code} onChangeText={(value)=> setCode(value)} />
            </Item>
            {error && !code && <Text style={MainStyle.errorMessage}>Code is required</Text>}
            <Item style={MainStyle.formItem} stackedLabel last >
              <Label>New Password</Label>
              <Input secureTextEntry defaultValue={newPassword} onChangeText={(value)=> setNewPassword(value)}  />
            </Item>
            {error && !newPassword && <Text style={MainStyle.errorMessage}>New password is required</Text>}
            <Item style={MainStyle.formItem} stackedLabel last>
              <Label>Confirm Password</Label>
              <Input secureTextEntry defaultValue={confirmPassword} onChangeText={(value)=> setConfirmPassword(value)}  />
            </Item>
            {error && !confirmPassword && <Text style={MainStyle.errorMessage}>Confirm password is required</Text>}
            {confirmPassword.length > 0 && newPassword !== confirmPassword &&
            <Text> Password Not Matched </Text> }
              
            
            <Button style={MainStyle.formBtn}  primary>
                <Text style={MainStyle.fromBtnText} onPress={() => handleSubmit()}> Submit</Text>
            </Button>
                  </Form>
              </Content>
          </Container>
      )
  }
  export default ConfirmPassword;