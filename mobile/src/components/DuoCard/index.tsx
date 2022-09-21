import React from "react";
import { View } from "react-native";
import { DuoInfo } from "../DuoInfo/";

import { styles } from "./styles";

export interface DuoCardProps {
  id: string;
  hourEnd: string;
  hourStart: string;
  name: string;
  useVoiceChannel: boolean;
  weekDays: string[];
  yearsPlaying: number;
}

interface Props {
  data: DuoCardProps;
}

export function DuoCard({ data }: Props) {
  return (
    <View style={styles.container}>
      <DuoInfo label="Nome" value={data.name} />
      <DuoInfo label="Tempo de jogo" value={`${data.yearsPlaying} anos`} />
      <DuoInfo label="Disponibilidade" value={`${data.weekDays.length} dias`} />
      <DuoInfo label="Nome" value={data.name} />
    </View>
  );
}
