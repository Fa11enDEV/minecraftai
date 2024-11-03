export default 
{
    "minecraft_version": "1.21.1", // supports up to 1.21.1
    "host": "127.0.0.1", // or "localhost", "your.ip.address.here"
    "port": 11111,
    "auth": "offline", // or "microsoft"
    
    "profiles": [
        "./WardenAI.json",
        //"./profiles/gpt.json",
        // "./profiles/claude.json",
        // "./profiles/gemini.json",
        // "./profiles/llama.json",

        // using more than 1 profile requires you to /msg each bot indivually
    ],
    "load_memory": false, // load memory from previous session
    "init_message": "Say hello world and your name", // sends to all on spawn

    "language": "pt", // translate to/from this language. Supports these language names: https://cloud.google.com/translate/docs/languages
    "show_bot_views": true, // show bot's view in browser at localhost:3000, 3001...

    "allow_insecure_coding": true, // allows newAction command and model can write/run code on your computer. enable at own risk
    "code_timeout_mins": 10, // minutes code is allowed to run. -1 for no timeout

    "max_messages": 15, // max number of messages to keep in context
    "max_commands": -1, // max number of commands to use in a response. -1 for no limit
    "verbose_commands": false, // show full command syntax
    "narrate_behavior": true, // chat simple automatic actions ('Picking up item!')
}

