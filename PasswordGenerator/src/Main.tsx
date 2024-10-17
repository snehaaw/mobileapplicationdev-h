import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Btn, { btnType } from './components/Btn';
import Output from './components/Output';
import InputBox from './components/InputBox';  
import FormCheckBox from './components/FormCheckBox';  
import { generatePasswordString } from './utility/passwordGenerator';
import { showErrorSnackbar, showSuccessSnackBar, showInfoSnackBar } from './utility/utils';
import { PasswordRequirement, ID_UPPER_CASE_CHECKBOX, ID_LOWER_CASE_CHECKBOX, ID_NUMBERS_CHECKBOX, ID_SPECIAL_CHAR_CHECKBOX } from './utility/Consts';
import Clipboard from '@react-native-clipboard/clipboard';  

export default function Main() {
  const [generatedPassword, setGeneratedPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState('');  
  const [passwordReq, setPasswordReq] = useState<PasswordRequirement>({
    length: 0,
    includeUpper: false,
    includeLower: false,
    includeNumber: false,
    includeSymbol: false
  });


  const handleGeneratePassword = () => {
     
  if (passwordLength === '') {
    showErrorSnackbar("Please enter a password length.");
    setGeneratedPassword(''); 
    return;
  }

    const length = parseInt(passwordLength, 10);  

  if (!passwordLength || isNaN(length)) {
    showErrorSnackbar("Invalid length value(enter a number)");
    setGeneratedPassword('');  
  return;
   }

  if (length < 8 || length > 16) {
    showErrorSnackbar("Password length must be a number between 8 and 16.");
    setGeneratedPassword('');  
  return;
   }

  if (!passwordReq.includeUpper && !passwordReq.includeLower && 
    !passwordReq.includeNumber && !passwordReq.includeSymbol) {
    showErrorSnackbar("Make a selection.");
    setGeneratedPassword('');  
  return;
   }

    
    const updatedReq = { ...passwordReq, length };
    const newPassword = generatePasswordString(updatedReq);
    setGeneratedPassword(newPassword);
    showSuccessSnackBar("Password generated successfully!");
  };

  //resetting the form
  const handleReset = () => {
    setPasswordLength('');  
    setPasswordReq({
      length: 0,
      includeUpper: false,
      includeLower: false,
      includeNumber: false,
      includeSymbol: false
    });
    setGeneratedPassword('');
    showInfoSnackBar("Cleared.");
  };

  // copying the password
  const handleCopyPassword = (password: string) => {
    if (password) {
      Clipboard.setString(password); 
      showSuccessSnackBar("Copied to clipboard.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Password Generator</Text>

      <InputBox
        value={passwordLength}  
        placeholder="Password Length (8-16)"
        onChangeText={setPasswordLength}  
      />

      <FormCheckBox
        id={ID_UPPER_CASE_CHECKBOX}
        label="Upper Case Letter"
        isChecked={passwordReq.includeUpper}
        onToggle={() => setPasswordReq(prev => ({ ...prev, includeUpper: !prev.includeUpper }))} 
        checkboxColor="#4CAF50"  
      />
      <FormCheckBox
        id={ID_LOWER_CASE_CHECKBOX}
        label="Lower Case Letter"
        isChecked={passwordReq.includeLower}
        onToggle={() => setPasswordReq(prev => ({ ...prev, includeLower: !prev.includeLower }))} 
        checkboxColor="#FF5722"
      />
      
      <FormCheckBox
        id={ID_SPECIAL_CHAR_CHECKBOX}
        label="Special Character"
        isChecked={passwordReq.includeSymbol}
        onToggle={() => setPasswordReq(prev => ({ ...prev, includeSymbol: !prev.includeSymbol }))}
        checkboxColor="#3F51B5" 
      />
      <FormCheckBox
        id={ID_NUMBERS_CHECKBOX}
        label="Numbers"
        isChecked={passwordReq.includeNumber}
        onToggle={() => setPasswordReq(prev => ({ ...prev, includeNumber: !prev.includeNumber }))} 
        checkboxColor="#FFC107"
      />
      
      <Output
        generatedPassword={generatedPassword}
        placeholder="Select Options..."
        handleCopy={handleCopyPassword}
      />

      <Btn type={btnType.Primary} title="Generate Password" onPress={handleGeneratePassword} />
      <Btn type={btnType.Danger} title="Reset" onPress={handleReset} />

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    color: '#000000',
    fontWeight:'bold',
  },
});


