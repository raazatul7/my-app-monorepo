export interface ScanResult {
    id: string;
    type: 'qr' | 'barcode' | 'text';
    data: string;
    timestamp: string;
    status: 'success' | 'error';
    metadata?: {
        format?: string;
        productId?: string;
        description?: string;
        location?: string;
    };
}
export interface ScanHistory {
    id: string;
    scanResult: ScanResult;
    action: 'view' | 'edit' | 'delete' | 'share';
}
export type ScanMode = 'qr' | 'barcode' | 'text' | 'auto';
//# sourceMappingURL=types.d.ts.map