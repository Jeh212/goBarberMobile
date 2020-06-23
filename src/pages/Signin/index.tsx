import React, { useCallback, useRef } from 'react';
import {
  Container,
  Title,
  ForgotPassword,
  ForgotPasswordText,
  CreatAccountButton,
  CreateAccountButtonText,
} from './styles';
import { useNavigation } from '@react-navigation/native';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  View,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import Icon from 'react-native-vector-icons/Feather';
import logoImg from '../../assets/logo.png';
import Input from '../../components/Input/index';
import Button from '../../components/Button/index';
import getValidationErrors from '../../utils/getValidationErros';
import * as Yup from 'yup';

interface SignInFormData {
  email: string;
  password: string;
}

const Signin: React.FC = () => {
  const navigation = useNavigation();

  const handleSignIn = useCallback(async (data: SignInFormData) => {
    //Validações//
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-Mail Obrigatio ')
          .email('Digite o E-mail'),
        password: Yup.string().required('Senha Obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      // await signIn({
      //   email: data.email,
      //   password: data.password,
      // });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        return;
      }

      Alert.alert(
        'Erro na Autenticação',
        'Ocorreu um erro ao fazer Login cheque as credenciais',
      );
    }
  }, []);

  const passwordRef = useRef<TextInput>(null);
  const formRef = useRef<FormHandles>(null);

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          contentContainerStyle={{ flex: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <Container>
            <Image source={logoImg} />
            <View>
              <Title>Faça seu Logon</Title>
            </View>

            <Form ref={formRef} onSubmit={handleSignIn}>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                name="email"
                icon="mail"
                placeholder="E-Mail"
                returnKeyType="next"
                onSubmitEditing={() => {}}
              />
              <Input
                ref={passwordRef}
                secureTextEntry
                onSubmitEditing={() => {
                  formRef.current?.submitForm();
                }}
                returnKeyType="send"
                name="password"
                icon="lock"
                placeholder="Password"
              />

              <Button
                onPress={() => {
                  formRef.current?.submitForm();
                }}
              >
                Entrar
              </Button>
            </Form>

            <ForgotPassword
              onPress={() => {
                console.log('OIi');
              }}
            >
              <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
            </ForgotPassword>
          </Container>
        </ScrollView>

        <CreatAccountButton onPress={() => navigation.navigate('SignUp')}>
          <Icon name="log-in" size={20} color="#ff9000" />
          <CreateAccountButtonText> Criar uma Conta </CreateAccountButtonText>
        </CreatAccountButton>
      </KeyboardAvoidingView>
    </>
  );
};

export default Signin;
