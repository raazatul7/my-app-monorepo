import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { View, StyleSheet, ScrollView, SafeAreaView, Image, TouchableOpacity, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Card, Button, Text } from '@myapp/ui';
// Dummy user profile data
const userProfile = {
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
const profileSections = [
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
export const ProfileScreen = ({ navigation }) => {
    const handleProfileAction = (action) => {
        console.log(`Profile action: ${action}`);
        // Handle different profile actions here
    };
    const handleLogout = () => {
        console.log('Logout pressed');
        // Handle logout logic here
    };
    const renderProfileHeader = () => (_jsxs(Card, { variant: "elevated", style: styles.profileHeader, children: [_jsxs(View, { style: styles.profileInfo, children: [_jsx(Image, { source: { uri: userProfile.avatar }, style: styles.avatar }), _jsxs(View, { style: styles.profileDetails, children: [_jsx(Text, { variant: "h2", children: userProfile.name }), _jsx(Text, { variant: "caption", color: "#8E8E93", children: userProfile.email }), _jsx(Text, { variant: "caption", color: "#007AFF", children: userProfile.role })] }), _jsx(TouchableOpacity, { style: styles.editButton, onPress: () => handleProfileAction('edit_profile'), children: _jsx(Ionicons, { name: "pencil-outline", size: 20, color: "#007AFF" }) })] }), _jsxs(View, { style: styles.profileStats, children: [_jsxs(View, { style: styles.statItem, children: [_jsx(Text, { variant: "h3", color: "#007AFF", children: userProfile.totalScans }), _jsx(Text, { variant: "caption", children: "Total Scans" })] }), _jsx(View, { style: styles.statDivider }), _jsxs(View, { style: styles.statItem, children: [_jsxs(Text, { variant: "h3", color: "#34C759", children: [userProfile.successRate, "%"] }), _jsx(Text, { variant: "caption", children: "Success Rate" })] }), _jsx(View, { style: styles.statDivider }), _jsxs(View, { style: styles.statItem, children: [_jsx(Text, { variant: "caption", color: "#8E8E93", children: userProfile.department }), _jsx(Text, { variant: "caption", children: "Department" })] })] })] }));
    const renderProfileSection = (section) => (_jsxs(View, { style: styles.section, children: [_jsx(Text, { variant: "h3", style: styles.sectionTitle, children: section.title }), _jsx(Card, { variant: "outlined", style: styles.sectionCard, children: section.items.map((item) => (_jsxs(TouchableOpacity, { style: styles.menuItem, onPress: () => handleProfileAction(item.action), children: [_jsxs(View, { style: styles.menuItemLeft, children: [_jsx(View, { style: styles.menuItemIcon, children: _jsx(Ionicons, { name: item.icon, size: 20, color: "#007AFF" }) }), _jsxs(View, { style: styles.menuItemContent, children: [_jsx(Text, { variant: "body", weight: "500", children: item.title }), item.subtitle && (_jsx(Text, { variant: "caption", color: "#8E8E93", children: item.subtitle }))] })] }), _jsxs(View, { style: styles.menuItemRight, children: [item.badge && (_jsx(View, { style: [styles.badge, { backgroundColor: item.badgeColor + '20' }], children: _jsx(Text, { variant: "caption", color: item.badgeColor, children: item.badge }) })), _jsx(Ionicons, { name: "chevron-forward", size: 16, color: "#C7C7CC" })] })] }, item.id))) })] }, section.id));
    return (_jsx(SafeAreaView, { style: styles.container, children: _jsxs(ScrollView, { showsVerticalScrollIndicator: false, children: [_jsx(View, { style: styles.header, children: _jsxs(View, { style: styles.headerTop, children: [_jsxs(View, { children: [_jsx(Text, { variant: "h1", children: "Profile" }), _jsx(Text, { variant: "body", color: "#8E8E93", children: "Manage your account and preferences" })] }), _jsx(Button, { title: "Dashboard", variant: "outline", size: "small", onPress: () => navigation.navigate('dashboard'), leftIcon: _jsx(Ionicons, { name: "home-outline", size: 16, color: "#007AFF" }), style: styles.headerButton })] }) }), renderProfileHeader(), profileSections.map(renderProfileSection), _jsx(View, { style: styles.logoutSection, children: _jsx(Button, { title: "Sign Out", variant: "danger", size: "large", fullWidth: true, onPress: handleLogout, leftIcon: _jsx(Ionicons, { name: "log-out-outline", size: 20, color: "#FFFFFF" }) }) }), _jsx(View, { style: styles.bottomSpacing })] }) }));
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
