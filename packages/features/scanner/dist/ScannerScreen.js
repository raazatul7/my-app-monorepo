import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView, Dimensions, TouchableOpacity, Alert, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Card, Button, Text } from '@myapp/ui';
// Dummy scan history data
const scanHistory = [
    {
        id: '1',
        type: 'qr',
        data: 'https://example.com/product/123',
        timestamp: '2 minutes ago',
        status: 'success',
        metadata: {
            format: 'QR Code',
            productId: 'PRD-2024-001',
            description: 'Product Link',
            location: 'Warehouse A',
        },
    },
    {
        id: '2',
        type: 'barcode',
        data: '1234567890123',
        timestamp: '15 minutes ago',
        status: 'success',
        metadata: {
            format: 'EAN-13',
            productId: 'PRD-2024-002',
            description: 'Product Barcode',
            location: 'Warehouse B',
        },
    },
    {
        id: '3',
        type: 'text',
        data: 'SCAN-2024-003',
        timestamp: '1 hour ago',
        status: 'success',
        metadata: {
            format: 'Text',
            productId: 'PRD-2024-003',
            description: 'Serial Number',
            location: 'Warehouse C',
        },
    },
    {
        id: '4',
        type: 'qr',
        data: 'Invalid QR Code',
        timestamp: '2 hours ago',
        status: 'error',
        metadata: {
            format: 'Unknown',
            description: 'Failed to decode',
        },
    },
];
const { width, height } = Dimensions.get('window');
export const ScannerScreen = ({ navigation }) => {
    const [selectedMode, setSelectedMode] = useState('auto');
    const [isScanning, setIsScanning] = useState(false);
    const scanModes = [
        {
            mode: 'auto',
            title: 'Auto Detect',
            icon: 'scan-outline',
            description: 'Automatically detect QR codes, barcodes, and text',
        },
        {
            mode: 'qr',
            title: 'QR Code',
            icon: 'qr-code-outline',
            description: 'Scan QR codes specifically',
        },
        {
            mode: 'barcode',
            title: 'Barcode',
            icon: 'barcode-outline',
            description: 'Scan barcodes and product codes',
        },
        {
            mode: 'text',
            title: 'Text',
            icon: 'text-outline',
            description: 'Scan and recognize text',
        },
    ];
    const handleScanModeSelect = (mode) => {
        setSelectedMode(mode);
        console.log(`Selected scan mode: ${mode}`);
    };
    const handleStartScan = () => {
        setIsScanning(true);
        Alert.alert('Scanner Started', `Scanner started in ${selectedMode} mode. Point camera at target.`, [
            {
                text: 'Stop Scan',
                onPress: () => setIsScanning(false),
                style: 'destructive',
            },
            {
                text: 'OK',
                onPress: () => console.log('Scan in progress...'),
            },
        ]);
    };
    const handleScanResult = (result) => {
        console.log('Scan result:', result);
        Alert.alert('Scan Result', `Type: ${result.type}\nData: ${result.data}`, [
            {
                text: 'View Details',
                onPress: () => console.log('View details for:', result.id),
            },
            {
                text: 'OK',
                style: 'default',
            },
        ]);
    };
    const handleHistoryItemPress = (result) => {
        handleScanResult(result);
    };
    const getScanModeIcon = (type) => {
        switch (type) {
            case 'qr':
                return 'qr-code';
            case 'barcode':
                return 'barcode';
            case 'text':
                return 'text';
            default:
                return 'document';
        }
    };
    const getStatusColor = (status) => {
        return status === 'success' ? '#34C759' : '#FF3B30';
    };
    const getStatusIcon = (status) => {
        return status === 'success' ? 'checkmark-circle' : 'close-circle';
    };
    return (_jsx(SafeAreaView, { style: styles.container, children: _jsxs(ScrollView, { showsVerticalScrollIndicator: false, children: [_jsx(View, { style: styles.header, children: _jsxs(View, { style: styles.headerTop, children: [_jsxs(View, { children: [_jsx(Text, { variant: "h1", children: "Scanner" }), _jsx(Text, { variant: "body", color: "#8E8E93", children: "Scan QR codes, barcodes, and text with your camera" })] }), _jsx(Button, { title: "Dashboard", variant: "outline", size: "small", onPress: () => navigation.navigate('dashboard'), leftIcon: _jsx(Ionicons, { name: "home-outline", size: 16, color: "#007AFF" }), style: styles.headerButton })] }) }), _jsxs(View, { style: styles.section, children: [_jsx(Text, { variant: "h3", style: styles.sectionTitle, children: "Scan Mode" }), _jsx(View, { style: styles.modeGrid, children: scanModes.map((modeInfo) => (_jsxs(TouchableOpacity, { style: [
                                    styles.modeCard,
                                    selectedMode === modeInfo.mode && styles.selectedModeCard,
                                ], onPress: () => handleScanModeSelect(modeInfo.mode), children: [_jsx(View, { style: styles.modeIcon, children: _jsx(Ionicons, { name: modeInfo.icon, size: 32, color: selectedMode === modeInfo.mode ? '#007AFF' : '#8E8E93' }) }), _jsx(Text, { variant: "body", weight: "600", color: selectedMode === modeInfo.mode ? '#007AFF' : '#000000', children: modeInfo.title }), _jsx(Text, { variant: "caption", color: "#8E8E93", align: "center", children: modeInfo.description })] }, modeInfo.mode))) })] }), _jsxs(View, { style: styles.section, children: [_jsx(Text, { variant: "h3", style: styles.sectionTitle, children: "Scanner Controls" }), _jsxs(Card, { variant: "elevated", style: styles.controlsCard, children: [_jsxs(View, { style: styles.controlInfo, children: [_jsx(View, { style: styles.controlIcon, children: _jsx(Ionicons, { name: "camera-outline", size: 24, color: "#007AFF" }) }), _jsxs(View, { style: styles.controlText, children: [_jsx(Text, { variant: "body", weight: "600", children: "Camera Scanner" }), _jsxs(Text, { variant: "caption", color: "#8E8E93", children: ["Selected mode: ", selectedMode.charAt(0).toUpperCase() + selectedMode.slice(1)] })] })] }), _jsx(Button, { title: isScanning ? 'Stop Scan' : 'Start Scan', variant: isScanning ? 'danger' : 'primary', size: "large", fullWidth: true, onPress: handleStartScan, leftIcon: _jsx(Ionicons, { name: isScanning ? 'stop-circle-outline' : 'play-circle-outline', size: 20, color: "#FFFFFF" }) })] })] }), _jsxs(View, { style: styles.section, children: [_jsx(Text, { variant: "h3", style: styles.sectionTitle, children: "Quick Actions" }), _jsxs(View, { style: styles.quickActions, children: [_jsx(Button, { title: "Manual Input", variant: "outline", size: "medium", style: styles.quickActionButton, onPress: () => console.log('Manual input pressed'), leftIcon: _jsx(Ionicons, { name: "keypad-outline", size: 16, color: "#007AFF" }) }), _jsx(Button, { title: "Import File", variant: "outline", size: "medium", style: styles.quickActionButton, onPress: () => console.log('Import file pressed'), leftIcon: _jsx(Ionicons, { name: "folder-open-outline", size: 16, color: "#007AFF" }) })] })] }), _jsxs(View, { style: styles.section, children: [_jsx(Text, { variant: "h3", style: styles.sectionTitle, children: "Recent Scans" }), scanHistory.map((result) => (_jsx(TouchableOpacity, { onPress: () => handleHistoryItemPress(result), children: _jsx(Card, { variant: "outlined", style: styles.historyCard, children: _jsxs(View, { style: styles.historyContent, children: [_jsx(View, { style: styles.historyIcon, children: _jsx(Ionicons, { name: getScanModeIcon(result.type), size: 24, color: "#007AFF" }) }), _jsxs(View, { style: styles.historyDetails, children: [_jsx(Text, { variant: "body", weight: "500", children: result.data }), _jsxs(Text, { variant: "caption", color: "#8E8E93", children: [result.metadata?.format, " \u2022 ", result.timestamp] }), result.metadata?.description && (_jsx(Text, { variant: "caption", color: "#8E8E93", children: result.metadata.description }))] }), _jsx(View, { style: styles.historyStatus, children: _jsx(Ionicons, { name: getStatusIcon(result.status), size: 20, color: getStatusColor(result.status) }) })] }) }) }, result.id)))] }), _jsx(View, { style: styles.bottomSpacing })] }) }));
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
        marginLeft: 10,
    },
    section: {
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    sectionTitle: {
        marginBottom: 16,
    },
    modeGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
    },
    modeCard: {
        width: (width - 64) / 2,
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 16,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'transparent',
    },
    selectedModeCard: {
        borderColor: '#007AFF',
        backgroundColor: '#F0F8FF',
    },
    modeIcon: {
        marginBottom: 8,
    },
    controlsCard: {
        padding: 20,
    },
    controlInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    controlIcon: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#F0F8FF',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 16,
    },
    controlText: {
        flex: 1,
    },
    quickActions: {
        flexDirection: 'row',
        gap: 12,
    },
    quickActionButton: {
        flex: 1,
    },
    historyCard: {
        marginBottom: 12,
    },
    historyContent: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 12,
    },
    historyIcon: {
        marginTop: 2,
    },
    historyDetails: {
        flex: 1,
    },
    historyStatus: {
        marginTop: 2,
    },
    bottomSpacing: {
        height: 20,
    },
});
