import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Card, Button, Text } from '@myapp/ui';
import { ScanResult, ScanMode } from './types';
import { StackNavigationProp } from '@react-navigation/stack';

// Define navigation types
type RootStackParamList = {
  dashboard: undefined;
  scanner: undefined;
  profile: undefined;
};

type ScannerScreenNavigationProp = StackNavigationProp<RootStackParamList, 'scanner'>;

interface ScannerScreenProps {
  navigation: ScannerScreenNavigationProp;
}

// Dummy scan history data
const scanHistory: ScanResult[] = [
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

export const ScannerScreen: React.FC<ScannerScreenProps> = ({ navigation }) => {
  const [selectedMode, setSelectedMode] = useState<ScanMode>('auto');
  const [isScanning, setIsScanning] = useState(false);

  const scanModes: { mode: ScanMode; title: string; icon: string; description: string }[] = [
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

  const handleScanModeSelect = (mode: ScanMode) => {
    setSelectedMode(mode);
    console.log(`Selected scan mode: ${mode}`);
  };

  const handleStartScan = () => {
    setIsScanning(true);
    Alert.alert(
      'Scanner Started',
      `Scanner started in ${selectedMode} mode. Point camera at target.`,
      [
        {
          text: 'Stop Scan',
          onPress: () => setIsScanning(false),
          style: 'destructive',
        },
        {
          text: 'OK',
          onPress: () => console.log('Scan in progress...'),
        },
      ]
    );
  };

  const handleScanResult = (result: ScanResult) => {
    console.log('Scan result:', result);
    Alert.alert(
      'Scan Result',
      `Type: ${result.type}\nData: ${result.data}`,
      [
        {
          text: 'View Details',
          onPress: () => console.log('View details for:', result.id),
        },
        {
          text: 'OK',
          style: 'default',
        },
      ]
    );
  };

  const handleHistoryItemPress = (result: ScanResult) => {
    handleScanResult(result);
  };

  const getScanModeIcon = (type: string) => {
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

  const getStatusColor = (status: string) => {
    return status === 'success' ? '#34C759' : '#FF3B30';
  };

  const getStatusIcon = (status: string) => {
    return status === 'success' ? 'checkmark-circle' : 'close-circle';
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <View>
              <Text variant="h1">Scanner</Text>
              <Text variant="body" color="#8E8E93">
                Scan QR codes, barcodes, and text with your camera
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

        {/* Scanner Mode Selection */}
        <View style={styles.section}>
          <Text variant="h3" style={styles.sectionTitle}>Scan Mode</Text>
          <View style={styles.modeGrid}>
            {scanModes.map((modeInfo) => (
              <TouchableOpacity
                key={modeInfo.mode}
                style={[
                  styles.modeCard,
                  selectedMode === modeInfo.mode && styles.selectedModeCard,
                ]}
                onPress={() => handleScanModeSelect(modeInfo.mode)}
              >
                <View style={styles.modeIcon}>
                  <Ionicons
                    name={modeInfo.icon as any}
                    size={32}
                    color={selectedMode === modeInfo.mode ? '#007AFF' : '#8E8E93'}
                  />
                </View>
                <Text
                  variant="body"
                  weight="600"
                  color={selectedMode === modeInfo.mode ? '#007AFF' : '#000000'}
                >
                  {modeInfo.title}
                </Text>
                <Text variant="caption" color="#8E8E93" align="center">
                  {modeInfo.description}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Scanner Controls */}
        <View style={styles.section}>
          <Text variant="h3" style={styles.sectionTitle}>Scanner Controls</Text>
          <Card variant="elevated" style={styles.controlsCard}>
            <View style={styles.controlInfo}>
              <View style={styles.controlIcon}>
                <Ionicons name="camera-outline" size={24} color="#007AFF" />
              </View>
              <View style={styles.controlText}>
                <Text variant="body" weight="600">Camera Scanner</Text>
                <Text variant="caption" color="#8E8E93">
                  Selected mode: {selectedMode.charAt(0).toUpperCase() + selectedMode.slice(1)}
                </Text>
              </View>
            </View>
            <Button
              title={isScanning ? 'Stop Scan' : 'Start Scan'}
              variant={isScanning ? 'danger' : 'primary'}
              size="large"
              fullWidth
              onPress={handleStartScan}
              leftIcon={
                <Ionicons
                  name={isScanning ? 'stop-circle-outline' : 'play-circle-outline'}
                  size={20}
                  color="#FFFFFF"
                />
              }
            />
          </Card>
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text variant="h3" style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.quickActions}>
            <Button
              title="Manual Input"
              variant="outline"
              size="medium"
              style={styles.quickActionButton}
              onPress={() => console.log('Manual input pressed')}
              leftIcon={<Ionicons name="keypad-outline" size={16} color="#007AFF" />}
            />
            <Button
              title="Import File"
              variant="outline"
              size="medium"
              style={styles.quickActionButton}
              onPress={() => console.log('Import file pressed')}
              leftIcon={<Ionicons name="folder-open-outline" size={16} color="#007AFF" />}
            />
          </View>
        </View>

        {/* Recent Scans */}
        <View style={styles.section}>
          <Text variant="h3" style={styles.sectionTitle}>Recent Scans</Text>
          {scanHistory.map((result) => (
            <TouchableOpacity
              key={result.id}
              onPress={() => handleHistoryItemPress(result)}
            >
              <Card variant="outlined" style={styles.historyCard}>
                <View style={styles.historyContent}>
                  <View style={styles.historyIcon}>
                    <Ionicons
                      name={getScanModeIcon(result.type)}
                      size={24}
                      color="#007AFF"
                    />
                  </View>
                  <View style={styles.historyDetails}>
                    <Text variant="body" weight="500">{result.data}</Text>
                    <Text variant="caption" color="#8E8E93">
                      {result.metadata?.format} • {result.timestamp}
                    </Text>
                    {result.metadata?.description && (
                      <Text variant="caption" color="#8E8E93">
                        {result.metadata.description}
                      </Text>
                    )}
                  </View>
                  <View style={styles.historyStatus}>
                    <Ionicons
                      name={getStatusIcon(result.status)}
                      size={20}
                      color={getStatusColor(result.status)}
                    />
                  </View>
                </View>
              </Card>
            </TouchableOpacity>
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
