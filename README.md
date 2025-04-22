# E-commerce Price Comparison Website

A modern web application that helps users compare product prices across different e-commerce platforms including Amazon, Flipkart, eBay, and ShopClues. Built with React and Tailwind CSS.

![E-commerce Price Comparison](screenshot.png)

## Features

- 🔍 Real-time product search functionality
- 💰 Price comparison across multiple platforms
- ₹ Prices displayed in Indian Rupees (INR)
- 🎯 Best price highlighting
- 📱 Responsive design for all devices
- ✨ Modern UI with smooth animations
- 🚀 Fast and efficient performance
- 📊 Sorted display with best prices at the top

## Tech Stack

- **Frontend Framework**: React 18
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Package Manager**: npm/yarn
- **Code Quality**: ESLint

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/e-commerce-website.git
cd e-commerce-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and visit `http://localhost:5173`

## Project Structure

```
e-commerce-website/
├── src/
│   ├── components/
│   │   └── ProductCard.jsx
│   ├── data/
│   │   ├── AMAZON.json
│   │   ├── FLIPKART.json
│   │   ├── EBAY.json
│   │   └── SHOPCLUES.json
│   ├── hooks/
│   │   └── useProductData.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── package.json
└── README.md
```

## Features in Detail

### Product Display
- Products are displayed in cards with detailed information
- Each card shows:
  - Product image
  - Product name
  - Product description
  - Prices from different platforms
  - Availability status
  - Best price indicator

### Price Comparison
- Automatic price sorting with lowest prices displayed first
- Visual indicators for the best available price
- Prices formatted in Indian Rupees (₹)
- Platform-wise price breakdown

### Search Functionality
- Real-time search as you type
- Search across all product attributes
- Clear and visible search results

### Responsive Design
- Works seamlessly on desktop and mobile devices
- Adaptive layout for different screen sizes
- Touch-friendly interface

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Vite for the blazing fast build tool
- All contributors who participate in this project

## Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter)
Project Link: [https://github.com/yourusername/e-commerce-website](https://github.com/yourusername/e-commerce-website)
