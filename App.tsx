import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

// Form validation
import * as Yup from 'yup'

const PasswordSchema =() => Yup.object().shape({
  PasswordLength: Yup.number()
  .min(8, 'Password must be at least 8 characters')
  .max(16, 'Password must be at most 16 characters')
  .required('Password is required')
})

const App = () => {

  // States
  const [password, setPassword] = useState('');
  const [isPasswordGenerated, setIsPasswordGenerated] = useState(false);
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false)

  // Functions
  const generatepassword = (passwordLength:number) => {

    let charactersList = '';

    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+';

    if (upperCase) {
      charactersList += upperCaseChars;
    }
    if (lowerCase) {
      charactersList += lowerCaseChars;
    }
    if (symbols) {
      charactersList += symbolChars;
    }
    if (numbers) {
      charactersList += digitChars;
    }

    const passwordResult = createPassword(charactersList, passwordLength)

    setPassword(passwordResult);
    setIsPasswordGenerated(true);
  }

  const createPassword = (characters:string,passwordLength:number) =>{
      let result = '';
      for (let i = 0; i < passwordLength; i++) {
       const charactersIndex = Math.round(Math.random() * characters.length)

       result += characters.charAt(charactersIndex);
      }
      return result;
  }

  const resetPasswordString = () => {
    setPassword('');
    setIsPasswordGenerated(false);
    setLowerCase(true);
    setUpperCase(false);
    setNumbers(false);
    setSymbols(false);
  }

  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})