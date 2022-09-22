import React from "react";
import { useEffect, useState } from "react";
import { Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import { Header } from "../../components/Header";
import { GameCard, GameCardProps } from "../../components/GameCard";
import { Background } from "../../components/Background";

import logoImg from "../../assets/logo-nlw-esports.png";

import { styles } from "./styles";

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([]);

  const navigation = useNavigation();

  function handleOpenGame({ id, title, bannerURL }: GameCardProps) {
    navigation.navigate("game", { id, title, bannerURL });
  }

  useEffect(() => {
    fetch("http://192.168.0.102:3333/games")
      .then((response) => response.json())
      .then((data) => {
        setGames(data[0]);
      });
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={logoImg} style={styles.logo} />
        <Header
          title={"Find your duo!"}
          subtitle={"Select the game you want to play..."}
        />
        <FlatList
          data={games}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <GameCard data={item} onPress={() => handleOpenGame(item)} />
          )}
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={styles.contentList}
        />
      </SafeAreaView>
    </Background>
  );
}
