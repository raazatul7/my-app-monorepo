# My App Monorepo

A configuration-driven mobile app monorepo using **Expo**, **Turborepo**, and **EAS** for building and deploying multiple branded applications from a single codebase.

## 🏗️ Architecture Overview

This monorepo follows a **configuration-driven approach** where:
- **Shared code** lives in packages (UI, core, features)
- **Client-specific apps** are built using configuration files
- **Build profiles** in EAS control which configuration is used
- **One codebase** produces multiple branded applications

```
my-app-monorepo/
├── apps/                    # App entry points
│   ├── client-app/         # Client App (DLF, etc.)
│   └── customer-app/       # Customer-facing App
├── packages/               # Shared packages
│   ├── ui/                # Shared UI components
│   ├── core/              # Shared logic (API, auth, config)
│   └── features/          # Feature modules
│       ├── scanner/       # QR/Barcode scanner
│       ├── dashboard/     # Dashboard module
│       └── profile/       # Profile management
├── config/                # Client configurations
│   ├── base.json         # Base configuration
│   └── dlf.json          # DLF client config (example)
└── eas.json              # Expo build profiles
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Expo CLI
- EAS CLI

### Installation
```bash
# Install dependencies
npm install

# Install EAS CLI globally
npm install -g @expo/eas-cli

# Login to Expo
eas login
```

### Development
```bash
# Start development server
npm run dev

# Start specific app
cd apps/client-app
npm start
```

## 🏭 Building Apps

### Build Commands
```bash
# Build DLF Client App
npm run build:dlf-client

# Build DLF Customer App  
npm run build:dlf-customer
```

### Build Profiles
The `eas.json` contains build profiles for DLF:
- `dlf_client` - Builds DLF client app with DLF configuration
- `dlf_customer` - Builds DLF customer app with DLF configuration

## 🔧 Configuration System

### How It Works
1. **Base Configuration** (`config/base.json`) - Common settings
2. **Client Configuration** (`config/dlf.json`) - Client-specific overrides
3. **Runtime Merging** - Core package merges configs at runtime
4. **Build-time Selection** - EAS build profile determines which config to use

### Configuration Structure
```json
{
  "client": {
    "id": "dlf",
    "name": "DLF",
    "displayName": "DLF Client App"
  },
  "branding": {
    "primaryColor": "#1E40AF",
    "logo": "./assets/dlf-logo.png"
  },
  "features": {
    "scanner": {
      "enabled": true,
      "scanTypes": ["qr", "barcode", "nfc"]
    }
  }
}
```

## 📱 App Types

### Client App
- **Purpose**: Internal business operations
- **Features**: Scanner, Dashboard, Profile management
- **Users**: Company employees, field workers

### Customer App  
- **Purpose**: Customer-facing interface
- **Features**: Limited feature set for end users
- **Users**: End customers, clients

## 🔄 OTA Updates

### Update Commands
```bash
# Update DLF apps
npm run update:dlf
```

### Update Channels
- `dlf_client` - Updates DLF client app
- `dlf_customer` - Updates DLF customer app

## 🧪 Testing

```bash
# Run all tests
npm test

# Test specific package
cd packages/core
npm test
```

## 📦 Package Development

### Core Package
- Configuration management
- API client
- Authentication
- State management

### UI Package  
- Shared components (Button, Card, Input)
- Theme system
- Responsive design utilities

### Feature Packages
- Self-contained modules
- Can be enabled/disabled per client
- Independent versioning

## 🚀 Deployment

### App Store Deployment
1. Build app with specific profile: `npm run build:dlf-client`
2. Submit to stores: `eas submit --profile dlf_client`
3. Apps are published to respective store accounts

### OTA Updates
1. Make code changes
2. Push to update channel: `npm run update:dlf`
3. Users receive updates automatically

## 🔍 Troubleshooting

### Common Issues
- **Build fails**: Check EAS login and project configuration
- **Config not loading**: Verify client ID in build profile
- **Dependencies missing**: Run `npm install` in root directory

### Debug Commands
```bash
# Clean all builds
npm run clean

# Check EAS status
eas whoami

# View build logs
eas build:list
```

## 📚 Additional Resources

- [Expo Documentation](https://docs.expo.dev/)
- [EAS Build Documentation](https://docs.expo.dev/build/introduction/)
- [Turborepo Documentation](https://turbo.build/repo/docs)
- [React Native Documentation](https://reactnative.dev/)

## 🤝 Contributing

1. Follow the established monorepo structure
2. Keep packages focused and independent
3. Test changes across multiple client configurations
4. Update documentation for new features

---

**Built with ❤️ using Expo, Turborepo, and EAS**
