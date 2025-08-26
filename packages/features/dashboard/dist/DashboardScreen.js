import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { View, StyleSheet, ScrollView, SafeAreaView, Dimensions, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Card, Button, Text } from '@myapp/ui';
// Dummy data for dashboard
const dashboardStats = [
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
const recentActivities = [
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
const quickActions = [
    { id: '1', title: 'New Scan', icon: 'scan-outline', action: 'scan' },
    { id: '2', title: 'Add User', icon: 'person-add-outline', action: 'add_user' },
    { id: '3', title: 'Reports', icon: 'document-text-outline', action: 'reports' },
    { id: '4', title: 'Settings', icon: 'settings-outline', action: 'settings' },
];
const { width } = Dimensions.get('window');
export const DashboardScreen = () => {
    const handleQuickAction = (action) => {
        console.log(`Quick action: ${action}`);
        // Handle different quick actions here
    };
    const getStatusColor = (status) => {
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
    const getStatusIcon = (status) => {
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
    return (_jsx(SafeAreaView, { style: styles.container, children: _jsxs(ScrollView, { showsVerticalScrollIndicator: false, children: [_jsxs(View, { style: styles.header, children: [_jsx(Text, { variant: "h1", children: "Dashboard" }), _jsx(Text, { variant: "body", color: "#8E8E93", children: "Welcome back! Here's what's happening today." })] }), _jsx(View, { style: styles.statsContainer, children: dashboardStats.map((stat) => (_jsx(Card, { variant: "elevated", style: styles.statCard, children: _jsxs(View, { style: styles.statContent, children: [_jsx(View, { style: [styles.statIcon, { backgroundColor: stat.color + '20' }], children: _jsx(Ionicons, { name: stat.icon, size: 24, color: stat.color }) }), _jsxs(View, { style: styles.statText, children: [_jsx(Text, { variant: "h2", color: stat.color, children: stat.value }), _jsx(Text, { variant: "caption", children: stat.title }), _jsxs(View, { style: styles.statChange, children: [_jsx(Ionicons, { name: stat.changeType === 'positive' ? 'trending-up' : 'trending-down', size: 12, color: stat.changeType === 'positive' ? '#34C759' : '#FF3B30' }), _jsx(Text, { variant: "caption", color: stat.changeType === 'positive' ? '#34C759' : '#FF3B30', style: styles.changeText, children: stat.change })] })] })] }) }, stat.id))) }), _jsxs(View, { style: styles.section, children: [_jsx(Text, { variant: "h3", style: styles.sectionTitle, children: "Quick Actions" }), _jsx(View, { style: styles.quickActionsGrid, children: quickActions.map((action) => (_jsx(Button, { title: action.title, variant: "outline", size: "small", style: styles.quickActionButton, onPress: () => handleQuickAction(action.action), leftIcon: _jsx(Ionicons, { name: action.icon, size: 16, color: "#007AFF", style: styles.actionIcon }) }, action.id))) })] }), _jsxs(View, { style: styles.section, children: [_jsx(Text, { variant: "h3", style: styles.sectionTitle, children: "Recent Activities" }), recentActivities.map((activity) => (_jsx(Card, { variant: "outlined", style: styles.activityCard, children: _jsxs(View, { style: styles.activityContent, children: [_jsx(View, { style: styles.activityIcon, children: _jsx(Ionicons, { name: getStatusIcon(activity.status), size: 20, color: getStatusColor(activity.status) }) }), _jsxs(View, { style: styles.activityDetails, children: [_jsx(Text, { variant: "body", weight: "600", children: activity.title }), _jsx(Text, { variant: "caption", children: activity.description }), _jsx(Text, { variant: "caption", color: "#C7C7CC", children: activity.timestamp })] })] }) }, activity.id)))] }), _jsx(View, { style: styles.bottomSpacing })] }) }));
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
