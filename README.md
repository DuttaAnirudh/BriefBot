# BriefBot

BriefBot is an article summarizer application connected to OpenAI's GPT model using Redux Toolkit Query. The application leverages the OpenAI API through the Rapid Hub API to provide concise summaries of lengthy articles [LIVE](https://briefbot.netlify.app/).

## How It Works

Users can input the URL of a lengthy article into the app's input element, and the AI will quickly generate a summary of the entire article.

![BriefBot UI](/BriefBot-UI.png)

## Tech Stack

- React.js
- Tailwind CSS
- Redux (RTK) Query
- [Rapid Hub API](https://rapidapi.com/restyler/api/article-extractor-and-summarizer)
- Vite

## Features

1. **Article Summarization**: Users can input the URL of a lengthy article, and the web app utilizes AI to provide a concise summary of the article content.
2. **Redux Toolkit Query**: Utilizes the advanced capabilities of Redux Toolkit (RTK) Query for making API requests. These requests fire conditionally based on specific criteria, optimizing data fetching and management.
3. **History Feature**: The app includes a history feature, allowing users to save summaries locally, providing a convenient way to revisit and manage their reading history.
4. **Clipboard Functionality**: Enables users to easily share or store the summarized content by copying it to their clipboard.

## Learnings

1. **Redux Toolkit Query**: Learned to use the Redux Toolkit Query library to make web API requests and its advanced features.
2. **Rapid Hub**: Discovered Rapid Hub, home to thousands of APIs, and learned how to use them to create web applications.
