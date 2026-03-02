import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>☕ Two Mugs</Text>
        <Text style={styles.headerSub}>Good morning, Ciarán ✌️</Text>
      </View>

      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>

        {/* Hero Order Card */}
        <TouchableOpacity style={styles.heroCard}>
          <Text style={styles.heroLabel}>ORDER AHEAD</Text>
          <Text style={styles.heroTitle}>Your usual is waiting{'\n'}to be ordered</Text>
          <View style={styles.heroBtn}>
            <Text style={styles.heroBtnText}>Order for 8:15am →</Text>
          </View>
        </TouchableOpacity>

        {/* Quick Access Grid */}
        <Text style={styles.sectionLabel}>QUICK ACCESS</Text>
        <View style={styles.grid}>
          <TouchableOpacity style={styles.gridItem}>
            <Text style={styles.gridIcon}>☕</Text>
            <Text style={styles.gridLabel}>Coffee</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gridItem}>
            <Text style={styles.gridIcon}>🥪</Text>
            <Text style={styles.gridLabel}>Food</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gridItem}>
            <Text style={styles.gridIcon}>🫘</Text>
            <Text style={styles.gridLabel}>Beans</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gridItem}>
            <Text style={styles.gridIcon}>🎂</Text>
            <Text style={styles.gridLabel}>Cakes</Text>
          </TouchableOpacity>
        </View>

        {/* Raffle Banner */}
        <TouchableOpacity style={styles.raffleBanner}>
          <Text style={styles.raffleIcon}>🏉</Text>
          <View style={styles.raffleText}>
            <Text style={styles.raffleTitle}>Ireland v France Raffle</Text>
            <Text style={styles.raffleSub}>Closes Sunday · 2 tickets up for grabs</Text>
          </View>
          <View style={styles.raffleBadge}>
            <Text style={styles.raffleBadgeText}>14 entries</Text>
          </View>
        </TouchableOpacity>

        {/* Loyalty Snapshot */}
        <View style={styles.loyaltyCard}>
          <View>
            <Text style={styles.loyaltyLabel}>YOUR TIER</Text>
            <Text style={styles.loyaltyTier}>Silver ✦</Text>
            <Text style={styles.loyaltyPoints}>486 pts · €12.30 from Gold</Text>
          </View>
          <View style={styles.loyaltyBarBg}>
            <View style={styles.loyaltyBarFill} />
          </View>
        </View>

      </ScrollView>

      {/* Bottom Nav */}
      <View style={styles.nav}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🏠</Text>
          <Text style={[styles.navLabel, styles.navActive]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>☕</Text>
          <Text style={styles.navLabel}>Order</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>⭐</Text>
          <Text style={styles.navLabel}>Rewards</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🏉</Text>
          <Text style={styles.navLabel}>Raffle</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>👤</Text>
          <Text style={styles.navLabel}>You</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1C0F0A' },
  
  header: {
    backgroundColor: '#3D1F0F',
    paddingTop: 56,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(196,123,43,0.3)',
  },
  headerTitle: { fontWeight: '800', fontSize: 22, color: '#E8A838', marginBottom: 4 },
  headerSub: { fontSize: 14, color: '#F5EFE0' },

  scroll: { flex: 1, paddingHorizontal: 16, paddingTop: 20 },

  heroCard: {
    backgroundColor: '#C47B2B',
    borderRadius: 20,
    padding: 24,
    marginBottom: 24,
  },
  heroLabel: { fontSize: 10, color: 'rgba(255,255,255,0.7)', letterSpacing: 2, marginBottom: 8 },
  heroTitle: { fontSize: 22, fontWeight: '800', color: '#fff', marginBottom: 16, lineHeight: 30 },
  heroBtn: { backgroundColor: '#1C0F0A', borderRadius: 50, paddingVertical: 10, paddingHorizontal: 20, alignSelf: 'flex-start' },
  heroBtnText: { color: '#E8A838', fontWeight: '600', fontSize: 13 },

  sectionLabel: { fontSize: 11, color: '#8B7355', letterSpacing: 2, marginBottom: 12 },

  grid: { flexDirection: 'row', gap: 10, marginBottom: 20 },
  gridItem: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  },
  gridIcon: { fontSize: 24, marginBottom: 6 },
  gridLabel: { fontSize: 11, color: '#8B7355' },

  raffleBanner: {
    backgroundColor: '#2D5016',
    borderRadius: 14,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  raffleIcon: { fontSize: 28 },
  raffleText: { flex: 1 },
  raffleTitle: { color: '#fff', fontWeight: '600', fontSize: 13 },
  raffleSub: { color: 'rgba(255,255,255,0.6)', fontSize: 11, marginTop: 2 },
  raffleBadge: { backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: 50, paddingVertical: 4, paddingHorizontal: 10 },
  raffleBadgeText: { color: '#fff', fontSize: 11 },

  loyaltyCard: {
    backgroundColor: '#8B6914',
    borderRadius: 20,
    padding: 20,
    marginBottom: 100,
  },
  loyaltyLabel: { fontSize: 10, color: 'rgba(255,255,255,0.7)', letterSpacing: 2, marginBottom: 4 },
  loyaltyTier: { fontSize: 28, fontWeight: '800', color: '#fff', marginBottom: 4 },
  loyaltyPoints: { fontSize: 13, color: 'rgba(255,255,255,0.8)', marginBottom: 14 },
  loyaltyBarBg: { backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: 10, height: 8 },
  loyaltyBarFill: { width: '62%', height: 8, backgroundColor: 'rgba(255,255,255,0.8)', borderRadius: 10 },

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
  navActive: { color: '#E8A838' },
});