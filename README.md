# Ideal Café - React Web Application

A modern, responsive web application for Ideal Café, featuring a complete ice cream and dessert ordering system.

## Features

- Responsive navigation bar with dark mode toggle
- Home page with hero banner, popular dishes, and testimonials
- Menu page with filtering and sorting options
- Shopping cart with quantity controls
- User authentication (frontend only)
- Contact form and location information
- Special offers and promotions
- Dark mode support

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ideal-cafe.git
cd ideal-cafe
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## Project Structure

```
ideal-cafe/
├── public/
│   ├── images/          # Store all images here
│   └── index.html
├── src/
│   ├── components/      # React components
│   │   ├── Cart.js
│   │   ├── Contact.js
│   │   ├── Home.js
│   │   ├── Locations.js
│   │   ├── Menu.js
│   │   ├── nav.js
│   │   ├── Offers.js
│   │   └── SignIn.js
│   ├── App.js           # Main application component
│   ├── App.css
│   ├── index.js
│   ├── index.css
│   └── styles.css
└── package.json
```

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from Create React App

## Technologies Used

- React.js
- React-Bootstrap
- Bootstrap
- React Router
- Font Awesome
- CSS3

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Create React App
- React-Bootstrap team
- Font Awesome
- All contributors and supporters
