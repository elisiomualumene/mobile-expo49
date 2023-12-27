import { Stack } from "expo-router";

export default function Stacks() {
  return (
    <Stack screenOptions={{ headerShown: false, presentation: "modal" }}>
      <Stack.Screen
        name="modal"
        options={{
          animation: "slide_from_bottom",
          presentation: "modal",
          gestureEnabled: true,
        }}
      />
    </Stack>
  );
}
