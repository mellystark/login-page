import {
  StyleSheet,
  Text,
  TextComponent,
  View,
  TextInput,
  Button,
} from 'react-native';
import React, {useState} from 'react';

export default function Form() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleSubmit = () => {
    console.log(username, email, password, passwordConfirm);
  };

  const [email, setEmail] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <TextInput
          style={styles.input}
          placeholder="username"
          autoCapitalize="none"
          value={Form.username}
          onChangeText={text => setUsername(text)}></TextInput>
      </View>
      <View style={styles.item}>
        <TextInput
          style={styles.input}
          placeholder="email"
          value={form.email}
          onChangeText={text => setEmail(text)}></TextInput>
      </View>
      <View style={styles.item}>
        <TextInput
          style={styles.input}
          placeholder="password"
          secureTextEntry
          value={form.password}
          onChangeText={text => setPassword(text)}></TextInput>
      </View>
      <View style={styles.item}>
        <TextInput
          style={styles.input}
          placeholder="password confirm"
          secureTextEntry
          value={form.passwordConfirm}
          onChangeText={text => setPasswordConfirm(text)}></TextInput>
      </View>
      <View style={styles.item}>
        <Button title="register" onPress={handleSubmit}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    borderColor: '#999',
    fontSize: 25,
    width: '100%',
  },
  item: {
    marginBottom: 5,
  },
});
