import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { GameParams } from '../../@types/navigation';

import { DuoInfo } from '../DuoInfo';

import { GameController } from 'phosphor-react-native';
import { THEME } from '../../theme';
import { styles } from './styles';

export interface DuoCardProps {
  id: string;
  name: string;
  yearsPlaying: number;
  weekDays: string[];
  hourStart: string;
  hourEnd: string;
  useVoiceChannel: boolean;
}

interface Props {
  data: DuoCardProps;
  onConnect: () => void;
}

export function DuoCard({ data, onConnect }: Props) {
  

  const navigation = useNavigation();
  const route = useRoute();
  const game = route.params as GameParams;

  

  return (
    <View style={styles.container}>
      <DuoInfo
        label="Nome"
        value={data.name}
      />
      <DuoInfo
        label="Tempo de jogo"
        value={data.yearsPlaying}
      />
      <DuoInfo
        label="Disponibilidade"
        value={`${data.weekDays.length} dias \u2022 ${data.hourStart} - ${data.hourEnd}` }
      />
      <DuoInfo
        label="Chamada de aúdio"
        value={data.useVoiceChannel ? 'Sim' : 'Não'}
        colorValue={data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={onConnect}
      >
        <GameController
          size={20}
          color={THEME.COLORS.TEXT}
        />

        <Text style={styles.buttonTitle}>
          Conectar
        </Text>
      </TouchableOpacity>
    </View>
  );
}