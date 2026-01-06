# 🪨 GRVL DRMA

> **The Most Unnecessarily Over-Engineered Gravel Bike Race Website in Existence**

[![Build Status](https://img.shields.io/badge/build-over--engineered-purple)](https://github.com)
[![Deployment](https://img.shields.io/badge/deployment-kubernetes-blue)](https://kubernetes.io)
[![Tech Stack](https://img.shields.io/badge/tech%20stack-excessive-red)](https://github.com)
[![Lines of Code](https://img.shields.io/badge/LOC-50%2C000%2B-green)](https://github.com)
[![Absurdity Level](https://img.shields.io/badge/absurdity-MAXIMUM-ff69b4)](https://github.com)
[![Coffee Consumed](https://img.shields.io/badge/coffee-999%20cups-brown)](https://github.com)

Welcome to **GRVL DRMA** - a satirical gravel bike race website that makes fun of gravel bike racing by being so gold-plated, silver-gilded, and over-engineered to the nth degree that anyone who visits will ask: **"Why the fuck does a gravel bike race need THIS much technology?"**

## 🎯 Mission Statement

To create a website so absurdly over-engineered that it becomes a meme in itself. Because if you're going to build a website for people who pay $300 to ride their bikes on dirt roads, you might as well use:

- ✅ Blockchain technology
- ✅ Artificial Intelligence
- ✅ Real-time 3D graphics
- ✅ Kubernetes orchestration
- ✅ Microservices architecture
- ✅ And approximately **47 other technologies** that nobody asked for

---

## 🏗️ Architecture Overview

This project uses a **ridiculously complex** monorepo architecture managed by Turborepo, because we couldn't just use a single `index.html` file like normal people.

```
grvl-drma/
├── apps/
│   └── web/                    # Next.js 14 app (App Router, RSC, Server Actions)
├── packages/
│   ├── database/               # Prisma + PostgreSQL (for a static site)
│   ├── ui/                     # Design system (coming soon™)
│   └── config/                 # Shared configs (coming soon™)
├── services/
│   ├── api/                    # tRPC + GraphQL APIs (both at once!)
│   ├── websocket/              # Real-time telemetry server
│   └── blockchain/             # NFT minting service (lol)
├── k8s/                        # Kubernetes manifests
├── .github/workflows/          # CI/CD pipeline with 8 jobs
└── docker-compose.yml          # Because containers are cool
```

---

## 🚀 Tech Stack

### Frontend (Web App)
- **Next.js 14** - App Router, Server Components, Server Actions
- **React 18** - With all the latest features
- **TypeScript** - Strictest config possible (no `any` allowed!)
- **Tailwind CSS** - Custom design system with 50 shades of gravel
- **Framer Motion** - Animations everywhere
- **Three.js / React Three Fiber** - 3D gravel particles & terrain visualization
- **TensorFlow.js** - AI-powered gravel classifier (yes, really)
- **Web3 / Ethers.js** - Blockchain NFT race bibs (why not)
- **Zustand + Jotai + React Query** - All the state management solutions
- **Mapbox GL** - Interactive maps
- **D3.js + Recharts** - Data visualization
- **cmdk** - Command palette (⌘K)
- **PWA** - Offline support for... a race website

### Backend & APIs
- **tRPC** - Type-safe APIs
- **GraphQL (Apollo)** - Also type-safe APIs (we use both!)
- **Prisma** - ORM with PostgreSQL
- **Redis** - Caching layer
- **WebSockets (Socket.io)** - Real-time race telemetry
- **Node.js** - Runtime

### Infrastructure
- **Docker** - Containerization
- **Docker Compose** - Local development
- **Kubernetes** - Production orchestration (with HPA!)
- **Nginx** - Reverse proxy & load balancer
- **Prometheus** - Metrics collection
- **Grafana** - Metrics visualization
- **PostgreSQL 16** - Primary database
- **Redis 7** - Cache & sessions

### DevOps & Tooling
- **Turborepo** - Monorepo build system
- **pnpm** - Fast package manager
- **GitHub Actions** - CI/CD with 8 parallel jobs
- **Playwright** - E2E testing
- **Jest** - Unit testing
- **Storybook** - Component development
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Type checking

### Monitoring & Analytics
- **Vercel Analytics** - Web analytics
- **Vercel Speed Insights** - Performance monitoring
- **PostHog** - Product analytics
- **Mixpanel** - User analytics
- **Sentry** - Error tracking

---

## 🎨 Features

### Core Features (Actually Useful)
- 🌓 **Three Theme Modes**: Light, Dark, and exclusive **Gravel Mode™** (50 shades of gray)
- ⌨️ **Command Palette**: Press `⌘K` to access keyboard shortcuts
- 📱 **Progressive Web App**: Works offline (for some reason)
- 🌍 **Internationalization**: Support for 20+ languages
- ♿ **Accessibility**: WCAG 2.1 AAA compliant

### Ridiculous Features (The Memes)

#### 🤖 AI-Powered Gravel Classifier
Upload a photo of gravel, and our **TensorFlow.js machine learning model** will identify:
- Gravel type (Premium Belgian, Artisanal Limestone, etc.)
- Roughness index (0-100)
- Dustiness level (0-100)
- Chunkiness factor (0-100)

**Disclaimer**: This is completely made up and doesn't actually work.

#### ⛓️ Blockchain NFT Race Bibs
Your race bib number is minted as an **NFT on the Ethereum blockchain** because:
- Paper bibs are so 2019
- We wanted to contribute to climate change
- Gas fees add excitement

**Features**:
- Unique on-chain artwork
- Zero utility or value
- Absolutely no rights or ownership
- Perfect for flexing on your gravel group chat

#### 🎮 Real-time 3D Telemetry
Watch live race data with:
- WebGL particle systems showing dust clouds
- Real-time WebSocket updates
- 3D terrain visualization with dynamic lighting
- Metrics nobody cares about (like "Dust Level")

#### 🗺️ 3D Course Visualization
Interactive Three.js terrain with:
- Elevation profiles
- Dynamic lighting
- Orbit controls
- Way too many polygons

---

## 📦 Installation

### Prerequisites
- **Node.js 18+** (or just use 20 like we do)
- **pnpm 8+** (because npm is for peasants)
- **Docker** (if you want the full experience)
- **Kubernetes cluster** (if you're truly insane)
- **Ethereum wallet** (for the NFTs, obviously)

### Quick Start

```bash
# Clone this monument to over-engineering
git clone https://github.com/yourusername/grvl-drma.git
cd grvl-drma

# Install dependencies
pnpm install

# Start PostgreSQL and Redis
docker-compose up -d postgres redis

# Set up the database
pnpm run db:migrate
pnpm run db:seed

# Start the development server
pnpm run dev

# Open http://localhost:3000 and prepare to be amazed
```

### Full Production Setup (For the Brave)

```bash
# Build everything
pnpm run build

# Start all services
docker-compose up -d

# Deploy to Kubernetes
kubectl apply -f k8s/

# Monitor with Grafana
open http://localhost:3001
```

---

## 🎯 Development Scripts

```bash
# Development
pnpm dev                 # Start dev server with hot reload
pnpm build              # Build for production
pnpm start              # Start production server

# Database
pnpm db:migrate         # Run database migrations
pnpm db:seed            # Seed the database
pnpm db:studio          # Open Prisma Studio

# Testing
pnpm test               # Run unit tests
pnpm test:e2e          # Run E2E tests
pnpm test:integration  # Run integration tests
pnpm test:load         # Run load tests (k6)

# Code Quality
pnpm lint               # Lint code
pnpm format             # Format code
pnpm type-check         # Type check

# Infrastructure
pnpm docker:up          # Start Docker services
pnpm docker:down        # Stop Docker services
pnpm k8s:apply          # Apply Kubernetes configs

# Analysis
pnpm analyze            # Analyze bundle size
pnpm storybook          # Start Storybook
```

---

## 🏗️ Project Structure Explained

### `/apps/web`
The Next.js 14 application with:
- **App Router** - Because we're cutting edge
- **Server Components** - For that sweet performance
- **Server Actions** - Type-safe mutations
- **Middleware** - For auth, redirects, etc.

### `/packages/database`
Prisma schema with models for:
- Users (with way too many fields)
- Race telemetry (sub-second accuracy)
- Gravel analysis results
- NFT race bibs
- Analytics events

### `/k8s`
Kubernetes manifests including:
- Deployment with 3 replicas
- HorizontalPodAutoscaler (3-10 pods)
- Service (LoadBalancer)
- Ingress (with TLS)
- All the YAML you could ever want

---

## 🎨 Design System

### Colors
- **Brand Primary**: `#FF6B35` - Orange (like the dust)
- **Brand Secondary**: `#F7931E` - Gold (like the sponsors' money)
- **Gravel**: 50 shades from `gravel-50` to `gravel-950`

### Theme Modes
1. **Light Mode** - For morning rides
2. **Dark Mode** - For night rides
3. **Gravel Mode™** - Exclusive grayscale experience

### Typography
- **Display**: Bebas Neue - For big hero text
- **Sans**: Inter - For body text
- **Mono**: JetBrains Mono - For code and metrics

---

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file:

```bash
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/grvldrma"
REDIS_URL="redis://localhost:6379"

# APIs
NEXT_PUBLIC_API_URL="http://localhost:3000/api"
NEXT_PUBLIC_WS_URL="ws://localhost:3001"

# Blockchain (lol)
NEXT_PUBLIC_ETH_CONTRACT_ADDRESS="0x..."
NEXT_PUBLIC_ALCHEMY_API_KEY="your-key"

# AI/ML
NEXT_PUBLIC_TENSORFLOW_MODEL_URL="/models/gravel-classifier"

# Analytics
NEXT_PUBLIC_POSTHOG_KEY="your-key"
NEXT_PUBLIC_MIXPANEL_TOKEN="your-token"
SENTRY_DSN="your-dsn"

# Maps
NEXT_PUBLIC_MAPBOX_TOKEN="your-token"
```

---

## 🚀 Deployment

### Vercel (Easy Mode)
```bash
vercel deploy
```

### Docker (Medium Mode)
```bash
docker-compose up -d
```

### Kubernetes (Hard Mode)
```bash
# Create namespace
kubectl create namespace grvl-drma

# Create secrets
kubectl create secret generic grvl-drma-secrets \
  --from-literal=database-url=$DATABASE_URL \
  --from-literal=redis-url=$REDIS_URL \
  -n grvl-drma

# Deploy
kubectl apply -f k8s/

# Check status
kubectl get pods -n grvl-drma
kubectl get svc -n grvl-drma
```

---

## 📊 Monitoring

### Prometheus Metrics
Available at `http://localhost:9090`:
- Request rate
- Response time
- Error rate
- Resource usage
- Gravel analysis count
- NFT mint count

### Grafana Dashboards
Available at `http://localhost:3001`:
- Real-time telemetry
- System metrics
- Application metrics
- Business metrics

---

## 🧪 Testing

We have **way too many tests**:

### Unit Tests (Jest)
```bash
pnpm test
```

### E2E Tests (Playwright)
```bash
pnpm test:e2e
```

### Load Tests (k6)
```bash
pnpm test:load
```

### Visual Regression (Chromatic)
```bash
pnpm chromatic
```

---

## 🎯 Performance

We take performance seriously (even though we added 50MB of JavaScript):

- **Lighthouse Score**: 100/100 (somehow)
- **Core Web Vitals**: Green across the board
- **Bundle Size**: Optimized with code splitting
- **Images**: Next.js Image component with AVIF/WebP
- **Caching**: Aggressive caching with Redis
- **CDN**: Global edge network

---

## 🔒 Security

Security features include:
- ✅ Strict CSP headers
- ✅ HTTPS everywhere
- ✅ Rate limiting
- ✅ DDoS protection
- ✅ Input validation with Zod
- ✅ SQL injection prevention (Prisma)
- ✅ XSS protection
- ✅ CSRF tokens
- ✅ Secure headers
- ✅ Dependency scanning
- ✅ Vulnerability scanning (Trivy)

---

## 📚 Documentation

- [Architecture Decision Records](./docs/adr/) - Why we made terrible decisions
- [API Documentation](./docs/api/) - tRPC + GraphQL schemas
- [Component Library](./docs/components/) - Storybook
- [Database Schema](./docs/database/) - Prisma schema docs
- [Deployment Guide](./docs/deployment/) - How to deploy this monster

---

## 🤝 Contributing

We welcome contributions that make this project **even more absurd**!

### Ideas for More Over-Engineering
- [ ] WebAssembly modules for "performance"
- [ ] Machine learning model for tire pressure prediction
- [ ] VR/AR support for immersive course preview
- [ ] Voice commands via Web Speech API
- [ ] Real-time multiplayer gravel analysis
- [ ] Integration with smart trainers
- [ ] Quantum computing for route optimization (why not?)
- [ ] Distributed ledger for recording finish times
- [ ] Neural network for predicting chainsuck events
- [ ] Edge computing with CloudFlare Workers

### Contribution Guidelines
1. Make it more complex
2. Add more dependencies
3. Increase bundle size
4. Add unnecessary features
5. Write extensive tests
6. Document everything

---

## 📜 License

MIT License - Because we're generous with our over-engineering.

Copyright (c) 2024 GRVL DRMA Team

Permission is hereby granted to anyone crazy enough to use this code.

---

## 🙏 Acknowledgments

Special thanks to:
- **Every JavaScript framework** - For making this possible
- **The npm ecosystem** - For the 2,147 dependencies
- **Our coffee supplier** - For keeping us awake
- **The gravel community** - For inspiring this madness
- **Vercel** - For somehow deploying this
- **Kubernetes** - For making deployment complicated
- **The blockchain** - For existing

---

## 📞 Support

If you need help with this project, please:
1. Read the documentation
2. Search existing issues
3. Ask yourself: "Do I really need this?"
4. If yes, create an issue
5. If no, walk away slowly

---

## 🎪 Fun Stats

- **Lines of Code**: 50,000+
- **npm Packages**: 2,147
- **Docker Images**: 6
- **Kubernetes Resources**: 15
- **CI/CD Jobs**: 8
- **Unnecessary Features**: 47+
- **Coffees Consumed**: 999
- **Sanity Remaining**: 0%

---

## 💬 FAQ

**Q: Why?**
A: Why not?

**Q: Is this a joke?**
A: Yes. But it works.

**Q: Should I use this in production?**
A: Absolutely not.

**Q: Can I fork this?**
A: Please do. Make it worse.

**Q: How much did this cost to build?**
A: Our sanity.

**Q: Does it actually mint NFTs?**
A: No. It's all fake. Save your ETH.

**Q: Is the AI real?**
A: It's random numbers with extra steps.

**Q: Why Kubernetes for a small website?**
A: For the meme.

---

## 🎬 Conclusion

This project is a **satirical masterpiece** of over-engineering. It demonstrates what happens when you apply enterprise-grade architecture to a simple gravel bike race website.

**Use it as a reference for what NOT to do.**

Or, if you're feeling adventurous, use it as a template for your next ridiculously over-engineered project.

---

<div align="center">

**Built with ❤️, ☕, and way too much free time**

[Website](https://grvldrma.com) • [Twitter](https://twitter.com/grvldrma) • [Discord](https://discord.gg/grvldrma)

⭐ Star this repo if you appreciate unnecessary complexity ⭐

</div>
