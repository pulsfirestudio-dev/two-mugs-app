// App.js — Two Mugs App
// Root component — handles navigation between all screens
// Uses tab-based navigation with 5 tabs

import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

// Import all screens
import HomeScreen from './screens/HomeScreen';
import OrderScreen from './screens/OrderScreen';

// Placeholder screens — we'll build these next

const RewardsScreen = () => (
  <View style={styles.placeholder}>
    <Text style={styles.placeholderText}>⭐ Rewards Screen</Text>
  </View>
);
const RaffleScreen = () => (
  <View style={styles.placeholder}>
    <Text style={styles.placeholderText}>🏉 Raffle Screen</Text>
  </View>
);
const ProfileScreen = () => (
  <View style={styles.placeholder}>
    <Text style={styles.placeholderText}>👤 Profile Screen</Text>
  </View>
);

// Tab configuration — defines each tab's icon, label and screen
const TABS = [
  { id: 'home', icon: '🏠', label: 'Home', screen: HomeScreen },
  { id: 'order', icon: '☕', label: 'Order', screen: OrderScreen },
  { id: 'rewards', icon: '⭐', label: 'Rewards', screen: RewardsScreen },
  { id: 'raffle', icon: '🏉', label: 'Raffle', screen: RaffleScreen },
  { id: 'you', icon: '👤', label: 'You', screen: ProfileScreen },
];

export default function App() {
  // Track which tab is currently active
  const [activeTab, setActiveTab] = useState('home');

  // Find the active screen component
  const ActiveScreen = TABS.find(t => t.id === activeTab).screen;

  return (
    <View style={styles.container}>
      {/* Render the active screen */}
      <ActiveScreen />

      {/* Bottom Navigation Bar */}
      <View style={styles.nav}>
        {TABS.map(tab => (
          <TouchableOpacity
            key={tab.id}
            style={styles.navItem}
            onPress={() => setActiveTab(tab.id)}
          >
            <Text style={styles.navIcon}>{tab.icon}</Text>
            <Text style={[styles.navLabel, activeTab === tab.id && styles.navLabelActive]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1C0F0A' },

  // Placeholder screen styles — used until each screen is built
  placeholder: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1C0F0A',
  },
  placeholderText: { fontSize: 24, marginBottom: 8 },
  placeholderSub: { fontSize: 14, color: '#8B7355' },

  // Bottom navigation
  nav: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.06)',
    paddingVertical: 12,
    paddingBottom: 24,
  },
  navItem: { flex: 1, alignItems: 'center', gap: 3 },
  navIcon: { fontSize: 18 },
  navLabel: { fontSize: 9, color: 'rgba(255,255,255,0.4)', letterSpacing: 0.5 },
  navLabelActive: { color: '#E8A838' },
});
