# Speech Text Reader

A web-based application that provides speech synthesis and recognition capabilities for communication assistance.

## Description

This project is a simple web app designed to help users communicate using text-to-speech and speech-to-text features. It includes pre-loaded cards for common expressions and allows users to add custom items. The app also features a speech recognition page to transcribe spoken words into text.

## Features

- **Text-to-Speech Cards**: Pre-loaded cards with images and text that can be clicked to hear the spoken text.
- **Custom Items**: Add, edit, and delete custom cards with text and images.
- **Voice Selection**: Choose from available voices for speech synthesis.
- **Read Custom Text**: Input and read any text aloud.
- **Speech Recognition**: Transcribe speech into text, with options to copy or download the transcription.
- **Responsive Design**: Built with Bootstrap for mobile and desktop compatibility.

## Demo

View the live demo: <a href="https://werdienjihed.github.io/speech-text-reader/">https://werdienjihed.github.io/speech-text-reader/</a>

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/WerdienJihed/speech-text-reader.git
   ```
2. Navigate to the project directory:
   ```
   cd speech-text-reader
   ```
3. Open `index.html` in your web browser.

## Usage

- **Main Page (index.html)**: View and interact with cards. Use the settings buttons to add items, change voice, or read text.
- **Speech Recognition Page (SpeechRecognition.html)**: Click the microphone button to start listening and transcribe speech.

## Project Structure

```
speech-text-reader/
├── index.html                 # Main page with text-to-speech cards
├── SpeechRecognition.html     # Speech recognition page
├── script.js                  # Main JavaScript file
├── style.css                  # Custom styles
├── images/                    # Image assets
│   ├── default.png
│   ├── favicon.ico
│   ├── hungry.jpg
│   ├── scared.jpg
│   ├── thirsty.png
│   └── tired.jpg
└── modules/                   # JavaScript modules
    ├── card.js                # Card component logic
    ├── helper.js              # Helper functions
    ├── speechRecognition.js   # Speech recognition functionality
    └── modals/                # Modal components
        ├── change-voice-modal.js
        ├── confirmation-modal.js
        ├── create-modal.js
        ├── edit-modal.js
        └── text-reader-modal.js
```

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6 Modules)
- Bootstrap 5
- Web Speech API (for speech synthesis and recognition)

## License

This project is open source and available under the <a>MIT License</a>.
