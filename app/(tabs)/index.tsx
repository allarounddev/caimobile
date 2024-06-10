import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useContext, useState, useEffect } from "react";
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Logo from '@/components/assets/Logo';
import Refresh from '@/components/assets/Refresh';
import NewSvg from '@/components/assets/New';
import OpenSvg from '@/components/assets/Open';

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState("Open");

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={<Logo width={200} height={40} />}
      refresImage={<Refresh width={30} height={30} />}
    >
      <ThemedView style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "Open" ? styles.activeTab : null]}
          onPress={() => setActiveTab("Open")}
        >
          <OpenSvg width={20} height={20} />
          <ThemedText style={styles.tabText}>Open Jobs</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === "New" ? styles.activeTab : null]}
          onPress={() => setActiveTab("New")}
        >
          <NewSvg width={20} height={20} />
          <ThemedText style={styles.tabText}>New Jobs</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  tabContainer: {
    
    backgroundColor: "darkgrey",
    flexDirection: "row",
    // justifyContent: "space-around",
    // borderBottomWidth: 1,
    // borderBottomColor: "#ccc",
    // borderRadius: 20,
  },
  tab: {
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  activeTab: {
    // backgroundColor: "#ffffff",
    // borderBottomWidth: 2,
    // borderBottomColor: "#000",
  },
  tabText: {
    // fontSize: 16,
    // color: "#000",
    marginLeft: 5,
  },
});
