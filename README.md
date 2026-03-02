# ☕ Two Mugs App

A full-stack mobile application for a workplace coffee container — built as a real-world portfolio project alongside AWS Cloud & FinOps certifications.

## 📱 What is Two Mugs?

Two Mugs is a real café container. This app replaces paper loyalty stamps and manual ordering with a fully digital experience — giving a small independent business the same systems advantage as major chains.

## ✨ Features

### Phase 1 — In Development
- [x] Home screen with Two Mugs branding
- [x] Order ahead with pickup time selection
- [ ] Digital loyalty tiers (Bronze / Silver / Gold)
- [ ] Rugby raffle entry system
- [ ] Live menu with push notifications
- [ ] AWS backend (Lambda, DynamoDB, API Gateway)

### Phase 2 — Planned
- [ ] Bean subscription service
- [ ] Digital gift cards
- [ ] Group orders
- [ ] Customer analytics dashboard

## 🏗️ AWS Architecture

| Service | Purpose | Est. Cost |
|---|---|---|
| React Native / Expo | Mobile app | Free |
| AWS Cognito | Authentication | Free tier |
| AWS API Gateway | REST API | Free tier |
| AWS Lambda x5 | Core functions | ~€1/mo |
| AWS DynamoDB | Database | Free tier |
| AWS S3 + CloudFront | Hosting & CDN | ~€0.02/mo |
| AWS SNS | Push notifications | Free tier |
| AWS SES | Email | Free tier |
| AWS CloudWatch | Monitoring | Free tier |
| AWS Budgets | Cost alerts | Free |

**Estimated total monthly cost: ~€3–8**

## 🛠️ Tech Stack

- **Frontend:** React Native, Expo
- **Backend:** AWS Lambda (Node.js)
- **Database:** AWS DynamoDB
- **Auth:** AWS Cognito
- **Payments:** Stripe
- **Monitoring:** AWS CloudWatch

## 📁 Project Structure

two-mugs-app/
├── App.js                  # Root component & navigation
├── screens/
│   ├── HomeScreen.js       # Home screen
│   ├── OrderScreen.js      # Menu & order flow
│   ├── RewardsScreen.js    # Loyalty tiers
│   ├── RaffleScreen.js     # Rugby raffle
│   └── ProfileScreen.js    # User account
├── components/             # Reusable UI components
└── assets/                 # Images & fonts

## 🎓 Portfolio Context

| Course | Status |
|---|---|
| Cloud Migration | 🔄 In Progress |
| AWS Architecture | ⏳ Upcoming |
| FinOps | ⏳ Upcoming |

## 📝 Changelog

### v0.1.0 — Home Screen
- Initial project setup with Expo
- Two Mugs theme and colour system
- Home screen with all components
- Bottom navigation (5 tabs)

## 👨‍💻 Developer

**Pulsefire Studio** — Building real apps to demonstrate cloud architecture and FinOps principles.
