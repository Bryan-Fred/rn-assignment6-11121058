# 11121058

## Overview

This project is an e-commerce app built with React Native. It features a Home Screen where users can browse products and a Cart Screen where users can view and manage their cart items.

## Design Choices

### UI/UX

- **Header:** The header includes a logo centered horizontally, a menu icon on the left, and search and cart icons on the right. This ensures easy navigation and a clean, professional look.
- **Product Listing:** Products are displayed in a grid format using a `FlatList` for efficient rendering. Each product card contains an image, name, description, price, and an add-to-cart button.
- **Our Story Section:** This section includes an "OUR STORY" heading and category and filter icons, providing a brief introduction to the store and easy access to filters.
- **Cart Screen:** Displays products added to the cart, along with a checkout section showing the estimated total and a checkout button.

### Styling

- Used a combination of flexbox for layout and custom styles for consistency and aesthetics.
- Employed serif fonts for product names and descriptions to give a formal and elegant look.
- Used specific colors for prices and icons to highlight important elements.

## Data Storage

Data storage is implemented using `AsyncStorage` from `@react-native-async-storage/async-storage`. This allows us to persist the cart items across app sessions.

### Implementation Details

- **Add to Cart:** When a product is added to the cart, it is stored in AsyncStorage. If the product is already in the cart, a message is shown to the user.
- **Remove from Cart:** Products can be removed from the cart, and the updated cart is saved back to AsyncStorage.
- **Retrieve Cart Items:** On app launch, cart items are retrieved from AsyncStorage and displayed in the Cart Screen.

## Screenshots

### Home Screen
![Home Screen](assets/screenshot1.jpg)
![Home Screen2](assets/screenshot2.jpg)


### Cart Screen

![Cart Screen](assets/screenshot3.jpg)

## How to Run the App

1. Clone the repository:
```bash
git clone https://github.com/Bryan-Fred/rn-assignment6.git
```

2. Install dependencies:
```bash
npm install
```

3. Run the app:
```bash
npm run android # For Android
npm run ios  # For iOS
```

### Future Improvements

- Implement user authentication for personalized experience.
- Add more product categories and a search feature.
- Integrate a real backend for dynamic product listings and cart management.
