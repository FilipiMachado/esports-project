import React from "react";
import { useEffect, useState } from "react";
import { Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Header } from "../../components/Header";
import { GameCard, GameCardProps } from "../../components/GameCard";

import logoImg from "../../assets/logo-nlw-esports.png";

import { styles } from "./styles";

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([]);

  useEffect(() => {
    fetch("http://192.168.0.102:3333/games")
      .then((response) => response.json())
      .then((data) => {
        setGames(data[0]);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image source={logoImg} style={styles.logo} />
      <Header
        title={"Encontre seu duo!"}
        subtitle={"Selecione o game que deseja jogar..."}
      />
      <FlatList
        data={games}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GameCard data={item} />}
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.contentList}
      />
    </SafeAreaView>
  );
}
