import type { PropsWithChildren, ReactElement } from 'react';
import { StyleSheet, useColorScheme, TouchableOpacity } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';

import { ThemedView } from '@/components/ThemedView';

const HEADER_HEIGHT = 40;

type Props = PropsWithChildren<{
  headerImage: ReactElement;
  refresImage: ReactElement;
  headerBackgroundColor: { dark: string; light: string };
}>;

export default function ParallaxScrollView({
  children,
  headerImage,
  refresImage,
  headerBackgroundColor,
}: Props) {
  const colorScheme = useColorScheme() ?? 'light';
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);
  
  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(scrollOffset.value, [-HEADER_HEIGHT, 0, HEADER_HEIGHT], [2, 1, 1]),
        },
      ],
    };
  });
  const updateJobs = () => {
    console.log("updateJobs");
  }
  return (
    <ThemedView style={styles.container}>
      <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
        <Animated.View
          style={[
            styles.header,
            { backgroundColor: headerBackgroundColor[colorScheme] },
            headerAnimatedStyle,
          ]}>
          {headerImage}
          <TouchableOpacity onPress={updateJobs}>
          {refresImage}
          </TouchableOpacity>
        </Animated.View>
        <ThemedView style={styles.content}>{children}</ThemedView>
      </Animated.ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "darkgrey"
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 80,
    overflow: 'hidden',
    padding: 12,
    paddingBottom: 0,
  },
  content: {
    flex: 1,
    // padding: 10,
    gap: 16,
    overflow: 'hidden',
  },
});
