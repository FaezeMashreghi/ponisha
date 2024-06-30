
# Shopping

This is a React project using Redux for state management and Material-UI (MUI) for UI components.


## Introduction

This project is a simple and scalable React application using Redux and MUI. The goal is to provide a foundation for building robust applications with a clean and organized codebase.

## Features

- **React**: A JavaScript library for building user interfaces.
- **Redux**: A predictable state container for JavaScript apps.
- **Material-UI (MUI)**: A popular React UI framework.
- **Redux Toolkit**: The official, recommended way to write Redux logic.

## Installation

To get started, clone the repository and install the dependencies.

```bash
git clone https://github.com/FaezeMashreghi/ponisha.git
cd ponisha/shop/
npm install
```

## Usage

To start the development server, run:

```bash
npm start
```

This will start the application at `http://localhost:3000`.

To build the application for production, run:

## Project Structure

The project structure is organized as follows:

```
my-react-project/
├── public/
│   ├── index.html
│   └── static
        └── fonts
        └── images
├── src/
│   ├── components/
│   │   ├── CheckBoxCard
│   │   ├── FormTextField
│   │   ├── NavigationButton
│   │   ├── SelectableCard
│   │   └── Switch
│   ├── Containers/
│   │   ├── OrderSteps/
│   │   │   ├── _components/
│   │   │   │   ├── AddOns
│   │   │   │   ├── PersonalInfo
│   │   │   │   ├── Plans
│   │   │   │   ├── Steps
│   │   │   │   ├── Summary
│   │   │   │   └── ThankYou
│   ├── features/
│   │   ├── shopInfo/
│   │   │   └── shopInfoSlice.js
│   │   └── store.js
│   ├── shared/
│   │   ├── constants/
│   │   │   ├── addons.js
│   │   │   ├── orderPlaned.js
│   │   │   ├── screenSize.js
│   │   │   └── steps.js
│   ├── hooks/
│   │   │   └── useMediaQueryBrakPointDown.js
│   ├── App.js
│   ├── index.js
│   └── ...
├── .gitignore
├── package.json
├── README.md
└── ...
```

### Directories

- **public/**: Contains static files like `index.html` and assets like images and fonts.
- **src/**: Contains the source code.
    - **assets/**: Contains static assets like images and fonts.
    - **components/**: The components folder contains reusable components that can be utilized throughout the entire application.
    - **components/**:  The container folder implements the main tasks and includes a components folder that contains small components related to these tasks.
    - **redux/**: Contains Redux-related files.
    - **App.js**: The root component.
    - **index.js**: The entry point of the application.


