import { StatusBar } from 'expo-status-bar';
import { useState } from 'react'
import { StyleSheet, View, TextInput, Button} from 'react-native';
import firebase from '../Connections/firebaseConnection';

export default function Login() {

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [user, setUser] = useState("")

  async function logar(){

    if(email !== "" && senha !== ""){

      await firebase.auth().signInWithEmailAndPassword(email, senha).then(value => {
        
        alert("Usuário logado: "+value.user.email)
        setEmail("")
        setSenha("") 
        setUser(value.user.email)

      }).catch((error) => {

        if(error.code === "auth/weak-password"){

          alert("Sua senha ter pelo menos 6 caracteres")   

          return
          
        }

        if(error.code === "auth/invalid-email"){

          alert("Email Inválido")
              
          return
            
        }

        if(error.code === "auth/user-not-found"){

            alert("Usuário não encontrado")
              
            return

        }

        if(error.code === "auth/wrong-password"){

            alert("Senha incorreta")
            
            return

        }

        else{

          alert("Algo deu errado!")
              
          return
            
        }

      })

    }

  }

  async function deslogar(){

    await firebase.auth().signOut()
    setUser("")
    alert("Usuário deslogado")

  }

  return (
    <View style={styles.container}>
      {user == "" &&
      
        <TextInput style={styles.input} placeholder='Email: ' value={email} onChangeText={setEmail}/>

      }
      {user == "" &&
      
      <TextInput style={styles.input} placeholder='Senha: ' value={senha} onChangeText={setSenha}/>

      }
      {user == "" &&
      
        <Button title='Logar' onPress={() => logar()}/>

      }
      {user != "" &&
      
        <Button style={{marginTop: "5%"}} title='Deslogar' onPress={() => deslogar()}/>

      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: "10%"
  },
  input: {

    borderWidth: 2,
    borderColor: "#000",
    paddingHorizontal: 10,
    minWidth: "30%",
    maxWidth: "50%",
    marginBottom: 7.5,
    borderRadius: 10

  }
});
