// app/(tabs)/_layout.tsx

import { Stack } from 'expo-router';

export default function TabLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }} />
  );
}
