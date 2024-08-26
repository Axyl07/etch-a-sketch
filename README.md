
# Etch-A-Sketch

## Project Overview

This project is a digital recreation of the classic Etch-A-Sketch toy. Users can draw on a grid, change the size of the grid, choose colors, enable random color mode, toggle an eraser mode, and clear the sketchpad. This project is implemented using HTML, CSS, and JavaScript.

## Features

- **Grid Creation**: Generates a customizable grid where users can draw by hovering the mouse over the cells.
- **Color Picker**: Allows users to choose a specific color for drawing.
- **Random Color Mode**: When enabled, cells will be filled with random colors as you draw.
- **Eraser Mode**: Enables users to erase parts of their drawing by turning the cells back to white.
- **Click Mode**: Toggle between drawing on hover or only when the mouse is clicked.
- **Grid Size Adjustment**: Users can set the grid size (ranging from 2x2 to 100x100).
- **Clear Sketchpad**: Clears the entire grid to start a new drawing.

## Technologies Used

- **HTML**: Structures the content of the webpage.
- **CSS**: Provides styling and layout.
- **JavaScript**: Implements the interactive functionality.

## Setup and Usage

### Prerequisites

Ensure you have a modern web browser installed to run the application locally.

### Instructions

1. **Clone the repository**: 
   ```bash
   git clone https://github.com/yourusername/etch-a-sketch.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd etch-a-sketch
   ```
3. **Open `index.html` in your browser**:
   ```bash
   open index.html
   ```

### How to Use

- **Change Grid Size**: Click on the "Change Size" button and enter a value between 2 and 100. The grid will resize accordingly.
- **Color Picker**: Select a color from the color picker, and the selected color will be used for drawing.
- **Random Color Mode**: Check the "Random colors?" checkbox to enable random colors while drawing.
- **Click Mode**: Check the "Change to click mode?" checkbox to require a mouse click to draw.
- **Eraser Mode**: Check the "Erase Mode" checkbox to switch to erasing instead of drawing.
- **Clear Sketchpad**: Click the "Clear Sketchpad" button to reset the entire grid to white.

## Customization

You can modify the grid size, colors, and other features by editing the JavaScript and CSS files.

- **JavaScript (`script.js`)**: Controls the interactive features like grid creation, drawing, erasing, and more.
- **CSS (`style.css`)**: Manages the styling, including colors, layout, and fonts.

