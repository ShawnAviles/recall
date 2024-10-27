import { StyleSheet } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { WelcomeHeader } from '@/components/WelcomeHeader';
import { BrainExperienceBar } from '@/components/BrainExperienceBar';
import { GameButtonLayout } from '@/components/GameButtonLayout';
import Patients from '../(caregiver)/patients';

export default function HomeScreen() {
  return (
    <Patients />
    // <ThemedView style={styles.page} lightColor={Colors.primary} darkColor={Colors.primary}>
    //   <WelcomeHeader />
    //   <BrainExperienceBar />
    //   <GameButtonLayout />
    // </ThemedView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingTop: 10,
  }
});