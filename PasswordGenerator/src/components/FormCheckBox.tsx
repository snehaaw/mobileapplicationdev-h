import React from 'react';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { StyleSheet, View } from "react-native";

type FormCheckBoxProps = {
  id: string;
  label: string;
  isChecked: boolean;
  onToggle: () => void;
  checkboxColor: string;
};

function FormCheckBox({ id, label, isChecked, onToggle, checkboxColor = '#6200EE' }: FormCheckBoxProps) {
  return (
    <View style={styles.container}>
      <BouncyCheckbox
        isChecked={isChecked}
        text={label}
        fillColor={isChecked ? checkboxColor : '#E0E0E0'}
        unFillColor="#FFFFFF"
        iconStyle={{ borderColor: checkboxColor }}
        textStyle={{ textDecorationLine: 'none' }}  
        onPress={onToggle}  
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    alignItems: 'flex-start',
  },
});

export default FormCheckBox;
