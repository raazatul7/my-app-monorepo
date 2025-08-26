import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Card, Button, Text } from '@myapp/ui';
import { DashboardStats, RecentActivity, QuickAction } from './types';
import { StackNavigationProp } from '@react-navigation/stack';

// Define navigation types
type RootStackParamList = {
  dashboard: undefined;
  scanner: undefined;
  profile: undefined;
};

type DashboardScreenNavigationProp = StackNavigationProp<RootStackParamList, 'dashboard'>;

interface DashboardScreenProps {
  navigation: DashboardScreenNavigationProp;
}

// Dummy data for dashboard
const dashboardStats: DashboardStats[] = [
  {
    id: '1',
    title: 'Total Scans',
    value: '1,247',
    change: '+12%',
    changeType: 'positive',
    icon: 'scan-outline',
    color: '#007AFF',
  },
  {
    id: '2',
    title: 'Active Sessions',
    value: '8',
    change: '+2',
    changeType: 'positive',
    icon: 'time-outline',
    color: '#34C759',
  },
  {
    id: '3',
    title: 'Success Rate',
    value: '94.2%',
    change: '+1.8%',
    changeType: 'positive',
    icon: 'trending-up-outline',
    color: '#FF9500',
  },
  {
    id: '4',
    title: 'Total Users',
    value: '156',
    change: '+23',
    changeType: 'positive',
    icon: 'people-outline',
    color: '#AF52DE',
  },
];

const recentActivities: RecentActivity[] = [
  {
    id: '1',
    type: 'scan',
    title: 'QR Code Scanned',
    description: 'Product ID: PRD-2024-001',
    timestamp: '2 minutes ago',
    status: 'success',
  },
  {
    id: '2',
    type: 'user',
    title: 'New User Registered',
    description: 'John Doe joined the platform',
    timestamp: '15 minutes ago',
    status: 'info',
  },
  {
    id: '3',
    type: 'error',
    title: 'Scan Failed',
    description: 'Invalid QR code format',
    timestamp: '1 hour ago',
    status: 'error',
  },
  {
    id: '4',
    type: 'update',
    title: 'System Update',
    description: 'App updated to version 2.1.0',
    timestamp: '2 hours ago',
    status: 'info',
  },
];

const quickActions: QuickAction[] = [
  { id: '1', title: 'New Scan', icon: 'scan-outline', action: 'scan' },
  { id: '2', title: 'Add User', icon: 'person-add-outline', action: 'add_user' },
  { id: '3', title: 'Reports', icon: 'document-text-outline', action: 'reports' },
  { id: '4', title: 'Settings', icon: 'settings-outline', action: 'settings' },
];

const { width } = Dimensions.get('window');

export const DashboardScreen: React.FC<DashboardScreenProps> = ({ navigation }) => {
  const handleQuickAction = (action: string) => {
    console.log(`Quick action: ${action}`);
    
    // Handle different quick actions with navigation
    switch (action) {
      case 'scan':
        navigation.navigate('scanner');
        break;
      case 'add_user':
        // Navigate to profile for user management
        navigation.navigate('profile');
        break;
      case 'reports':
        // Stay on dashboard for reports (could be expanded later)
        console.log('Reports feature - staying on dashboard');
        break;
      case 'settings':
        // Navigate to profile for settings
        navigation.navigate('profile');
        break;
      default:
        console.log(`Unknown action: ${action}`);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success':
        return '#34C759';
      case 'error':
        return '#FF3B30';
      case 'info':
        return '#007AFF';
      default:
        return '#8E8E93';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return 'checkmark-circle-outline';
      case 'error':
        return 'close-circle-outline';
      case 'info':
        return 'information-circle-outline';
      default:
        return 'ellipse-outline';
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <View>
              <Text variant="h1">Dashboard</Text>
              <Text variant="body" color="#8E8E93">
                Welcome back! Here's what's happening today.
              </Text>
            </View>
            <View style={styles.headerActions}>
              <Button
                title="Scanner"
                variant="outline"
                size="small"
                onPress={() => navigation.navigate('scanner')}
                leftIcon={<Ionicons name="scan-outline" size={16} color="#007AFF" />}
                style={styles.headerButton}
              />
              <Button
                title="Profile"
                variant="outline"
                size="small"
                onPress={() => navigation.navigate('profile')}
                leftIcon={<Ionicons name="person-outline" size={16} color="#007AFF" />}
                style={styles.headerButton}
              />
            </View>
          </View>
        </View>

        {/* Statistics Grid */}
        <View style={styles.statsContainer}>
          {dashboardStats.map((stat) => (
            <Card key={stat.id} variant="elevated" style={styles.statCard}>
              <View style={styles.statContent}>
                <View style={[styles.statIcon, { backgroundColor: stat.color + '20' }]}>
                  <Ionicons name={stat.icon as any} size={24} color={stat.color} />
                </View>
                <View style={styles.statText}>
                  <Text variant="h2" color={stat.color}>{stat.value}</Text>
                  <Text variant="caption">{stat.title}</Text>
                  <View style={styles.statChange}>
                    <Ionicons
                      name={stat.changeType === 'positive' ? 'trending-up' : 'trending-down'}
                      size={12}
                      color={stat.changeType === 'positive' ? '#34C759' : '#FF3B30'}
                    />
                    <Text
                      variant="caption"
                      color={stat.changeType === 'positive' ? '#34C759' : '#FF3B30'}
                      style={styles.changeText}
                    >
                      {stat.change}
                    </Text>
                  </View>
                </View>
              </View>
            </Card>
          ))}
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text variant="h3" style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.quickActionsGrid}>
            {quickActions.map((action) => (
              <Button
                key={action.id}
                title={action.title}
                variant="outline"
                size="small"
                style={styles.quickActionButton}
                onPress={() => handleQuickAction(action.action)}
                leftIcon={
                  <Ionicons name={action.icon as any} size={16} color="#007AFF" style={styles.actionIcon} />
                }
              />
            ))}
          </View>
        </View>

        {/* Recent Activities */}
        <View style={styles.section}>
          <Text variant="h3" style={styles.sectionTitle}>Recent Activities</Text>
          {recentActivities.map((activity) => (
            <Card key={activity.id} variant="outlined" style={styles.activityCard}>
              <View style={styles.activityContent}>
                <View style={styles.activityIcon}>
                  <Ionicons
                    name={getStatusIcon(activity.status)}
                    size={20}
                    color={getStatusColor(activity.status)}
                  />
                </View>
                <View style={styles.activityDetails}>
                  <Text variant="body" weight="600">{activity.title}</Text>
                  <Text variant="caption">{activity.description}</Text>
                  <Text variant="caption" color="#C7C7CC">{activity.timestamp}</Text>
                </View>
              </View>
            </Card>
          ))}
        </View>

        {/* Bottom Spacing */}
        <View style={styles.bottomSpacing} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  header: {
    padding: 20,
    paddingBottom: 10,
  },
  headerTop: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  headerActions: {
    flexDirection: 'row',
    gap: 10,
  },
  headerButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    gap: 12,
  },
  statCard: {
    width: (width - 52) / 2,
    marginBottom: 12,
  },
  statContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  statIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statText: {
    flex: 1,
  },
  statChange: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 4,
  },
  changeText: {
    fontWeight: '600',
  },
  section: {
    padding: 20,
    paddingTop: 0,
  },
  sectionTitle: {
    marginBottom: 16,
  },
  quickActionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  quickActionButton: {
    flex: 1,
    minWidth: (width - 64) / 2,
  },
  actionIcon: {
    marginRight: 6,
  },
  activityCard: {
    marginBottom: 12,
  },
  activityContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  activityIcon: {
    marginTop: 2,
  },
  activityDetails: {
    flex: 1,
  },
  bottomSpacing: {
    height: 20,
  },
});
