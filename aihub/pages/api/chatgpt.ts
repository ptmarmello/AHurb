import React from 'react'

const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

// const [ chatResponse, setResponse ] = React.useState('');

export async function ChatRequestHandler(input: string, setResponse: Function){
    
    const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: input,
        temprature: 0,
        max_tokens:7,
    });

    setResponse(response);

}