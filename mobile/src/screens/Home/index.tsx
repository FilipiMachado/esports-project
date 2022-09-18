import React from "react";
import { View, Image } from "react-native";

import { Header } from "../../components/Header";
import logoImg from "../../assets/logo-nlw-esports.png";

import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo} />
      <Header title={'Encontre seu duo!'} subtitle={'Selecione o game que deseja jogar...'}/>
    </View>
  );
}
