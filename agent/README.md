# NeuroAid+ - AI Voice Therapy Assistant

![NeuroAid+ Banner](public/banner.png)

## Problem Statement

Mental health support is often inaccessible due to:
-  High therapy costs
-  Long waitlists
-  Awkward in-person sessions
-  Limited availability
-  Geographic constraints

Many people need someone to talk to but face barriers in accessing traditional therapy. This creates a gap between those who need mental health support and those who can access it.

## Approach & Solution

NeuroAid+ is an AI-powered voice therapy assistant that provides:
- Voice-first conversations that feel natural and comfortable
- Real-time emotional pattern tracking and analysis
- Private, secure, and judgment-free space for self-expression
- Immediate availability without appointments or waitlists
- Session summaries with actionable insights

## Features

### Core Features
- **Voice-First Conversations**: Natural, spoken interactions with the AI
- **Emotional Pattern Tracking**: Analysis of tone, pace, and sentiment
- **Session Summaries**: Detailed breakdowns of each conversation
- **Progress Visualization**: Track emotional growth over time
- **Privacy-Focused**: End-to-end encryption and data protection

### Session Analysis
- Emotional journey tracking
- Key topics identification
- Coping technique suggestions
- Personalized insights
- Progress metrics

### Security & Privacy
- Encrypted conversations
- Anonymized data
- No data used for training
- Secure storage
- Privacy-first approach

## Tech Stack

### Frontend
- React 18
- Vite
- TailwindCSS
- Lucide React (Icons)
- Vapi AI SDK

### Development Tools
- ESLint
- PostCSS
- Autoprefixer
- TypeScript

## Screenshots

### Landing Page
![Landing Page](public/landing.png)

### Therapy Session
![Therapy Session](public/session.png)

### Session Summary
![Session Summary](public/summary.png)

## Run Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Vapi AI API key

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/neuroaid-plus.git
cd neuroaid-plus
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory:
```env
VITE_VAPI_PUBLIC_KEY=your_vapi_public_key
VITE_VAPI_ASSISTANT_ID=your_assistant_id
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Vapi AI for the voice AI technology
- The open-source community for the amazing tools and libraries
- All contributors who have helped shape this project
