import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react'
import { StyleSheet, View, TextInput, Button} from 'react-native';
import firebase from '../Connections/firebaseConnection';

export default function Cadastro() {

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState("")

  async function cadastrar(){

    if(email !== "" && senha !== ""){

      await firebase.auth().createUserWithEmailAndPassword(email, senha)
      .then((value)=> {
          //alert(value.user.uid);
          firebase.database().ref('usuarios').child(value.user.uid).set({
            nome: nome,
            idade: idade,
            email: value.user.email
          })

          alert('Usuario criado com sucesso!');
          setNome('');
          setIdade('');
          setEmail('');
          setSenha('');
          return

      }).catch((error) => {

        if(error.code === "auth/weak-password"){

            alert("Sua senha ter pelo menos 6 caracteres")

            return
          
        }

        if(error.code === "auth/invalid-email"){

            alert("Email Inválido")

            return
          
        }

        if(error.code === "auth/email-already-in-use"){

            alert("Já existe um login com esse email")
  
            return
          
        }

        else{

            alert("Algo deu errado!")
            alert(error.code)

            return

        }

      })
      
      }

    }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder='Email: ' value={email} onChangeText={setEmail}/>
      <TextInput style={styles.input} placeholder='Senha: ' value={senha} onChangeText={setSenha}/>
      <TextInput style={styles.input} placeholder='Nome: ' value={nome} onChangeText={setNome}/>
      <TextInput style={styles.input} placeholder='Idade: ' value={idade} onChangeText={setIdade}/>
      <Button style={{borderRadius: 130}} title='Cadastrar' onPress={() => cadastrar()}/>
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
