// OrderScreen.js — Two Mugs App
// This screen handles the menu display and order ahead functionality
// Users can browse menu items, select a pickup time, and add items to cart

import { useState } from 'react';
import { 
  StyleSheet, Text, View, ScrollView, 
  TouchableOpacity 
} from 'react-native';

// Menu data — this will later come from AWS DynamoDB via Lambda
const MENU_ITEMS = {
  Coffee: [
    { id: 1, name: 'Flat White', desc: 'Double shot · Oat milk', price: '€3.80', icon: '☕' },
    { id: 2, name: 'Americano', desc: 'Double shot · Black', price: '€3.20', icon: '☕' },
    { id: 3, name: 'Cappuccino', desc: 'Single shot · Whole milk', price: '€3.50', icon: '☕' },
    { id: 4, name: 'Latte', desc: 'Double shot · Steamed milk', price: '€3.80', icon: '🥛' },
  ],
  Food: [
    { id: 5, name: 'Ham & Cheese Toastie', desc: 'Sourdough · Made fresh', price: '€6.50', icon: '🥪' },
    { id: 6, name: 'Chicken Wrap', desc: 'Grilled chicken · Salad', price: '€7.00', icon: '🌯' },
    { id: 7, name: 'Soup of the Day', desc: 'Ask at counter', price: '€4.50', icon: '🍲' },
  ],
  Beans: [
    { id: 8, name: 'House Blend 250g', desc: 'Medium roast · Fruity notes', price: '€12.00', icon: '🫘' },
    { id: 9, name: 'Single Origin 250g', desc: 'Light roast · Ethiopian', price: '€14.00', icon: '🫘' },
  ],
  Cakes: [
    { id: 10, name: 'Dark Chocolate Brownie', desc: 'Just out of the oven 🔥', price: '€3.20', icon: '🍫' },
    { id: 11, name: 'Blueberry Muffin', desc: 'Baked fresh daily', price: '€2.80', icon: '🫐' },
    { id: 12, name: 'Banana Bread', desc: 'With butter', price: '€3.00', icon: '🍌' },
  ],
};

// Available pickup time slots
const PICKUP_TIMES = ['8:00am', '8:15am', '8:30am', '8:45am', '9:00am', '9:15am', '9:30am'];

export default function OrderScreen() {
  // Track which menu category is selected
  const [activeCategory, setActiveCategory] = useState('Coffee');
  
  // Track items added to cart — object with item id as key and quantity as value
  const [cart, setCart] = useState({});
  
  // Track selected pickup time
  const [pickupTime, setPickupTime] = useState('8:15am');
  
  // Track whether pickup time selector is showing
  const [showTimePicker, setShowTimePicker] = useState(false);

  // Add an item to the cart
  const addToCart = (itemId) => {
    setCart(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
  };

  // Calculate total number of items in cart
  const cartCount = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  // Calculate total price of cart
  const cartTotal = () => {
    let total = 0;
    Object.entries(cart).forEach(([id, qty]) => {
      // Find the item across all categories
      Object.values(MENU_ITEMS).flat().forEach(item => {
        if (item.id === parseInt(id)) {
          total += parseFloat(item.price.replace('€', '')) * qty;
        }
      });
    });
    return total.toFixed(2);
  };

  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Order Ahead</Text>
          <Text style={styles.headerSub}>Choose your items & pickup time</Text>
        </View>
        {/* Cart badge — shows number of items in cart */}
        {cartCount > 0 && (
          <View style={styles.cartBadge}>
            <Text style={styles.cartBadgeText}>{cartCount}</Text>
          </View>
        )}
      </View>

      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>

        {/* Pickup Time Selector */}
        <TouchableOpacity 
          style={styles.pickupBar} 
          onPress={() => setShowTimePicker(!showTimePicker)}
        >
          <Text style={styles.pickupIcon}>🕐</Text>
          <View style={styles.pickupText}>
            <Text style={styles.pickupLabel}>PICKUP TIME</Text>
            <Text style={styles.pickupTime}>Today · {pickupTime}</Text>
          </View>
          <Text style={styles.pickupChange}>{showTimePicker ? 'Close ↑' : 'Change ↓'}</Text>
        </TouchableOpacity>

        {/* Time picker dropdown — shows when user taps Change */}
        {showTimePicker && (
          <View style={styles.timePicker}>
            {PICKUP_TIMES.map(time => (
              <TouchableOpacity 
                key={time}
                style={[styles.timeSlot, pickupTime === time && styles.timeSlotActive]}
                onPress={() => { setPickupTime(time); setShowTimePicker(false); }}
              >
                <Text style={[styles.timeSlotText, pickupTime === time && styles.timeSlotTextActive]}>
                  {time}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* Category Tabs */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.catTabs}>
          {Object.keys(MENU_ITEMS).map(category => (
            <TouchableOpacity
              key={category}
              style={[styles.catTab, activeCategory === category && styles.catTabActive]}
              onPress={() => setActiveCategory(category)}
            >
              <Text style={[styles.catTabText, activeCategory === category && styles.catTabTextActive]}>
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Menu Items — shows items for the active category */}
        <View style={styles.menuItems}>
          {MENU_ITEMS[activeCategory].map(item => (
            <View key={item.id} style={styles.menuItem}>
              {/* Item icon */}
              <View style={styles.menuItemIcon}>
                <Text style={styles.menuItemIconText}>{item.icon}</Text>
              </View>
              {/* Item details */}
              <View style={styles.menuItemInfo}>
                <Text style={styles.menuItemName}>{item.name}</Text>
                <Text style={styles.menuItemDesc}>{item.desc}</Text>
              </View>
              {/* Price */}
              <Text style={styles.menuItemPrice}>{item.price}</Text>
              {/* Add to cart button — shows quantity if already in cart */}
              <TouchableOpacity style={styles.addBtn} onPress={() => addToCart(item.id)}>
                <Text style={styles.addBtnText}>
                  {cart[item.id] ? `+${cart[item.id]}` : '+'}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

      </ScrollView>

      {/* Cart Summary Bar — only shows when items are in cart */}
      {cartCount > 0 && (
        <TouchableOpacity style={styles.cartBar}>
          <Text style={styles.cartBarCount}>{cartCount} items</Text>
          <Text style={styles.cartBarLabel}>View Order</Text>
          <Text style={styles.cartBarTotal}>€{cartTotal()}</Text>
        </TouchableOpacity>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1C0F0A' },

  // Header styles
  header: {
    backgroundColor: '#3D1F0F',
    paddingTop: 56,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(196,123,43,0.3)',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  headerTitle: { fontWeight: '800', fontSize: 22, color: '#E8A838', marginBottom: 4 },
  headerSub: { fontSize: 12, color: '#8B7355' },

  // Cart badge in header
  cartBadge: {
    backgroundColor: '#E8A838',
    width: 32, height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartBadgeText: { color: '#1C0F0A', fontWeight: '800', fontSize: 14 },

  scroll: { flex: 1, paddingHorizontal: 16, paddingTop: 16 },

  // Pickup time bar
  pickupBar: {
    backgroundColor: 'rgba(232,168,56,0.1)',
    borderWidth: 1,
    borderColor: 'rgba(232,168,56,0.3)',
    borderRadius: 12,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 8,
  },
  pickupIcon: { fontSize: 20 },
  pickupText: { flex: 1 },
  pickupLabel: { fontSize: 10, color: '#8B7355', letterSpacing: 1 },
  pickupTime: { fontSize: 15, fontWeight: '600', color: '#E8A838', marginTop: 2 },
  pickupChange: { fontSize: 12, color: '#C47B2B' },

  // Time picker dropdown
  timePicker: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 16,
    backgroundColor: 'rgba(255,255,255,0.03)',
    borderRadius: 12,
    padding: 12,
  },
  timeSlot: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  timeSlotActive: { backgroundColor: '#C47B2B', borderColor: '#C47B2B' },
  timeSlotText: { fontSize: 13, color: '#8B7355' },
  timeSlotTextActive: { color: '#fff', fontWeight: '600' },

  // Category tabs
  catTabs: { marginBottom: 16 },
  catTab: {
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    marginRight: 8,
  },
  catTabActive: { backgroundColor: '#C47B2B', borderColor: '#C47B2B' },
  catTabText: { fontSize: 13, color: '#8B7355' },
  catTabTextActive: { color: '#fff', fontWeight: '600' },

  // Menu items
  menuItems: { gap: 10, paddingBottom: 120 },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: 'rgba(255,255,255,0.04)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
    borderRadius: 14,
    padding: 12,
  },
  menuItemIcon: {
    width: 44, height: 44,
    borderRadius: 10,
    backgroundColor: 'rgba(196,123,43,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuItemIconText: { fontSize: 22 },
  menuItemInfo: { flex: 1 },
  menuItemName: { fontSize: 13, fontWeight: '600', color: '#F5EFE0' },
  menuItemDesc: { fontSize: 11, color: '#8B7355', marginTop: 2 },
  menuItemPrice: { fontSize: 13, color: '#E8A838', fontWeight: '600' },

  // Add to cart button
  addBtn: {
    width: 30, height: 30,
    borderRadius: 15,
    backgroundColor: '#C47B2B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addBtnText: { color: '#fff', fontSize: 16, fontWeight: '800' },

  // Cart summary bar at bottom
  cartBar: {
    position: 'absolute',
    bottom: 0, left: 0, right: 0,
    backgroundColor: '#C47B2B',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 20,
    paddingBottom: 32,
  },
  cartBarCount: { color: 'rgba(255,255,255,0.8)', fontSize: 13 },
  cartBarLabel: { color: '#fff', fontWeight: '800', fontSize: 15 },
  cartBarTotal: { color: '#fff', fontWeight: '800', fontSize: 15 },
});
