import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Card, Button, Text } from '@myapp/ui';
import { UserProfile, ProfileSection, ProfileMenuItem } from './types';
import { StackNavigationProp } from '@react-navigation/stack';

// Define navigation types
type RootStackParamList = {
  dashboard: undefined;
  scanner: undefined;
  profile: undefined;
};

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'profile'>;

interface ProfileScreenProps {
  navigation: ProfileScreenNavigationProp;
}

// Dummy user profile data
const userProfile: UserProfile = {
  id: '1',
  name: 'John Doe',
  email: 'john.doe@company.com',
  avatar: 'https://via.placeholder.com/100x100/007AFF/FFFFFF?text=JD',
  role: 'Senior Scanner',
  department: 'Operations',
  joinDate: 'March 2023',
  lastActive: '2 minutes ago',
  totalScans: 1247,
  successRate: 94.2,
};

// Profile sections with menu items
const profileSections: ProfileSection[] = [
  {
    id: '1',
    title: 'Account',
    items: [
      {
        id: '1',
        title: 'Personal Information',
        subtitle: 'Update your personal details',
        icon: 'person-outline',
        action: 'edit_profile',
      },
      {
        id: '2',
        title: 'Change Password',
        subtitle: 'Update your password',
        icon: 'lock-closed-outline',
        action: 'change_password',
      },
      {
        id: '3',
        title: 'Two-Factor Authentication',
        subtitle: 'Enhanced security',
        icon: 'shield-checkmark-outline',
        action: '2fa',
        badge: 'ON',
        badgeColor: '#34C759',
      },
    ],
  },
  {
    id: '2',
    title: 'Preferences',
    items: [
      {
        id: '4',
        title: 'Notifications',
        subtitle: 'Manage notification settings',
        icon: 'notifications-outline',
        action: 'notifications',
      },
      {
        id: '5',
        title: 'Privacy',
        subtitle: 'Control your privacy settings',
        icon: 'eye-outline',
        action: 'privacy',
      },
      {
        id: '6',
        title: 'Language',
        subtitle: 'English (US)',
        icon: 'language-outline',
        action: 'language',
      },
    ],
  },
  {
    id: '3',
    title: 'Support',
    items: [
      {
        id: '7',
        title: 'Help Center',
        subtitle: 'Get help and support',
        icon: 'help-circle-outline',
        action: 'help',
      },
      {
        id: '8',
        title: 'Contact Support',
        subtitle: 'Reach out to our team',
        icon: 'chatbubble-outline',
        action: 'contact_support',
      },
      {
        id: '9',
        title: 'Feedback',
        subtitle: 'Share your thoughts',
        icon: 'chatbox-outline',
        action: 'feedback',
      },
    ],
  },
  {
    id: '4',
    title: 'About',
    items: [
      {
        id: '10',
        title: 'App Version',
        subtitle: '2.1.0 (Build 210)',
        icon: 'information-circle-outline',
        action: 'version_info',
      },
      {
        id: '11',
        title: 'Terms of Service',
        subtitle: 'Read our terms',
        icon: 'document-text-outline',
        action: 'terms',
      },
      {
        id: '12',
        title: 'Privacy Policy',
        subtitle: 'Read our privacy policy',
        icon: 'shield-outline',
        action: 'privacy_policy',
      },
    ],
  },
];

export const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation }) => {
  const handleProfileAction = (action: string) => {
    console.log(`Profile action: ${action}`);
    // Handle different profile actions here
  };

  const handleLogout = () => {
    console.log('Logout pressed');
    // Handle logout logic here
  };

  const renderProfileHeader = () => (
    <Card variant="elevated" style={styles.profileHeader}>
      <View style={styles.profileInfo}>
        <Image source={{ uri: userProfile.avatar }} style={styles.avatar} />
        <View style={styles.profileDetails}>
          <Text variant="h2">{userProfile.name}</Text>
          <Text variant="caption" color="#8E8E93">{userProfile.email}</Text>
          <Text variant="caption" color="#007AFF">{userProfile.role}</Text>
        </View>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => handleProfileAction('edit_profile')}
        >
          <Ionicons name="pencil-outline" size={20} color="#007AFF" />
        </TouchableOpacity>
      </View>
      
      <View style={styles.profileStats}>
        <View style={styles.statItem}>
          <Text variant="h3" color="#007AFF">{userProfile.totalScans}</Text>
          <Text variant="caption">Total Scans</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text variant="h3" color="#34C759">{userProfile.successRate}%</Text>
          <Text variant="caption">Success Rate</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text variant="caption" color="#8E8E93">{userProfile.department}</Text>
          <Text variant="caption">Department</Text>
        </View>
      </View>
    </Card>
  );

  const renderProfileSection = (section: ProfileSection) => (
    <View key={section.id} style={styles.section}>
      <Text variant="h3" style={styles.sectionTitle}>{section.title}</Text>
      <Card variant="outlined" style={styles.sectionCard}>
        {section.items.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.menuItem}
            onPress={() => handleProfileAction(item.action)}
          >
            <View style={styles.menuItemLeft}>
              <View style={styles.menuItemIcon}>
                <Ionicons name={item.icon as any} size={20} color="#007AFF" />
              </View>
              <View style={styles.menuItemContent}>
                <Text variant="body" weight="500">{item.title}</Text>
                {item.subtitle && (
                  <Text variant="caption" color="#8E8E93">{item.subtitle}</Text>
                )}
              </View>
            </View>
            <View style={styles.menuItemRight}>
              {item.badge && (
                <View style={[styles.badge, { backgroundColor: item.badgeColor + '20' }]}>
                  <Text variant="caption" color={item.badgeColor}>{item.badge}</Text>
                </View>
              )}
              <Ionicons name="chevron-forward" size={16} color="#C7C7CC" />
            </View>
          </TouchableOpacity>
        ))}
      </Card>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <View>
              <Text variant="h1">Profile</Text>
              <Text variant="body" color="#8E8E93">
                Manage your account and preferences
              </Text>
            </View>
            <Button
              title="Dashboard"
              variant="outline"
              size="small"
              onPress={() => navigation.navigate('dashboard')}
              leftIcon={<Ionicons name="home-outline" size={16} color="#007AFF" />}
              style={styles.headerButton}
            />
          </View>
        </View>

        {/* Profile Information */}
        {renderProfileHeader()}

        {/* Profile Sections */}
        {profileSections.map(renderProfileSection)}

        {/* Logout Button */}
        <View style={styles.logoutSection}>
          <Button
            title="Sign Out"
            variant="danger"
            size="large"
            fullWidth
            onPress={handleLogout}
            leftIcon={<Ionicons name="log-out-outline" size={20} color="#FFFFFF" />}
          />
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  profileHeader: {
    margin: 20,
    marginTop: 0,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  profileDetails: {
    flex: 1,
  },
  editButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: '#F2F2F7',
  },
  profileStats: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#E5E5EA',
  },
  statItem: {
    alignItems: 'center',
  },
  statDivider: {
    width: 1,
    height: 30,
    backgroundColor: '#E5E5EA',
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    marginBottom: 12,
  },
  sectionCard: {
    padding: 0,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F7',
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  menuItemIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F2F2F7',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  menuItemContent: {
    flex: 1,
  },
  menuItemRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  logoutSection: {
    padding: 20,
    paddingTop: 0,
  },
  bottomSpacing: {
    height: 20,
  },
});
