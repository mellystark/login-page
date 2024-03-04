import {StyleSheet, View} from 'react-native';
import React from 'react';
import {useFormik} from 'formik';
import validationSchema from './validations';
import {Box, FormControl, Input, WarningOutlineIcon, Button} from 'native-base';

export default function FormWithFormik() {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleSubmit,
    handleChange,
    handleBlur,
  } = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },
    onSubmit: async (values, bag) => {
      await new Promise(r => setTimeout(r, 1000));
      bag.resetForm();
      console.log(values);
      console.log(bag);
    },
    validationSchema,
  });

  return (
    <View style={styles.container}>
      <Box alignItems="center" mb={4}>
        <FormControl
          isInvalid={errors.username && touched.username}
          w="75%"
          maxW="300px">
          <FormControl.Label>Username</FormControl.Label>
          <Input
            placeholder="Enter username"
            value={values.username}
            onChangeText={handleChange('username')}
            onBlur={handleBlur('username')}
            height={50}
            fontSize={18}
          />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            {errors.username}
          </FormControl.ErrorMessage>
        </FormControl>
      </Box>
      <Box alignItems="center" mb={4}>
        <FormControl
          isInvalid={errors.email && touched.email}
          w="75%"
          maxW="300px">
          <FormControl.Label>E-mail</FormControl.Label>
          <Input
            placeholder="Enter email"
            value={values.email}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            autoCapitalize="none"
            keyboardType="email-address"
            height={50}
            fontSize={18}
          />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            {errors.email}
          </FormControl.ErrorMessage>
        </FormControl>
      </Box>
      <Box alignItems="center" mb={4}>
        <FormControl
          isInvalid={errors.password && touched.password}
          w="75%"
          maxW="300px">
          <FormControl.Label>Password</FormControl.Label>
          <Input
            placeholder="Enter password"
            value={values.password}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            secureTextEntry
            height={50}
            fontSize={18}
          />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            {errors.password}
          </FormControl.ErrorMessage>
        </FormControl>
      </Box>
      <Box alignItems="center" mb={3}>
        <FormControl
          isInvalid={errors.passwordConfirm && touched.passwordConfirm}
          w="75%"
          maxW="300px">
          <FormControl.Label>Password Confirm</FormControl.Label>
          <Input
            placeholder="Enter password confirm"
            value={values.passwordConfirm}
            onChangeText={handleChange('passwordConfirm')}
            onBlur={handleBlur('passwordConfirm')}
            height={50}
            fontSize={18}
            secureTextEntry
          />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            {errors.passwordConfirm}
          </FormControl.ErrorMessage>
        </FormControl>
      </Box>
      <View style={styles.item}>
        <Button
        size={"lg"}
        width={100}
          alignSelf={'center'}
          onPress={handleSubmit}
          isLoading={isSubmitting}
          isLoadingText="Submitting"
          disabled={isSubmitting}>
          REGISTER
        </Button>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
  },
  error: {
    color: 'red',
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
