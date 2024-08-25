# Babloo - Your Roadside Savior 🚗🛠️

**Stuck on the highway?**  
**Vehicle trouble on the road?**  
**We've got your back!**

Babloo is a revolutionary platform designed to bridge the gap between drivers in distress and skilled mechanics ready to help. Whether you're stranded on a highway or facing unexpected vehicle issues, Babloo is your trusted companion, ensuring you get back on the road swiftly and safely.

## Table of Contents

- [About Babloo](#about-babloo)
- [Features](#features)
- [How It Works](#how-it-works)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Set Up Environment Variables](#set-up-environment-variables)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## About Babloo

At its core, Babloo is committed to two things:

1. **Providing drivers with reliable, on-the-go assistance** - Whenever you're in need, Babloo connects you with skilled mechanics who are ready to jump into action, anytime, anywhere.

2. **Creating meaningful opportunities for mechanics** - Babloo offers mechanics steady work with opportunities to grow, connecting them with drivers in need.

As co-founders, we're dedicated to building a community where both drivers and mechanics thrive, ensuring safer and smoother journeys for everyone.

## Features

- **Driver Assistance:** Find nearby mechanics based on your current location.
- **Real-time Search:** Locate mechanics within a search radius, displayed in descending order based on ratings.
- **Mechanic Alerts:** Mechanics receive alerts when chosen by a driver and can accept or deny the request.
- **User-Friendly Interface:** Seamless registration and car management for drivers.
- **Ratings System:** Mechanics are rated based on their performance, ensuring quality service.

## How It Works

### For Drivers:
1. **Login/Register:** Users log in or register on the platform.
2. **Car Registration:** Users register their vehicles on Babloo.
3. **Search for Mechanics:** Users search for nearby mechanics within a specified radius.
4. **Mechanic Selection:** Available mechanics are displayed in descending order based on their ratings.
5. **Request Assistance:** The user chooses a mechanic, who then receives an alert.

### For Mechanics:
1. **Receive Alert:** Mechanics receive a notification when selected by a driver.
2. **Accept/Deny Request:** Mechanics can choose to accept or deny the request.
3. **Provide Assistance:** Upon acceptance, the mechanic travels to the driver's location to provide the needed assistance.

## Tech Stack

- **Frontend:** React Native, Expo, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL
- **Authentication:** Clerk
- **State Management:** Zustand
- **Payments:** Stripe
- **APIs:** Google Maps API for location services

## Getting Started

### Prerequisites

- Node.js
- React Native CLI
- PostgreSQL

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/Babloo.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Babloo
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Set Up Environment Variables

Create a new file named `.env` in the root of your project and add the following content:

```env
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=
EXPO_PUBLIC_PLACES_API_KEY=
EXPO_PUBLIC_DIRECTIONS_API_KEY=
DATABASE_URL=
EXPO_PUBLIC_SERVER_URL=https://Babloo.dev/
EXPO_PUBLIC_GEOAPIFY_API_KEY=
EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
```

### Running the Project

4. Run the development server:
   ```bash
   npm start
   ```

5. Start the React Native app:
   ```bash
   react-native run-android   # For Android
   react-native run-ios       # For iOS
   ```

## Usage

- **Drivers:** Log in, register your vehicle, and search for nearby mechanics. Choose a mechanic and wait for them to arrive at your location.
- **Mechanics:** Log in, receive alerts for nearby requests, and accept or deny them as per your availability.

## Contributing

We welcome contributions from the community! If you'd like to contribute to Babloo, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push to your forked repository.
5. Create a pull request.

Please ensure that your code adheres to our coding standards and includes necessary documentation.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
