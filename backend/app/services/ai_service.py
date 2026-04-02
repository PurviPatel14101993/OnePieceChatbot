from app.utils.prompts import LUFFY_SYSTEM_PROMPT


def generate_luffy_reply(user_message: str) -> str:
    """Stub AI service.

    Replace this with an OpenAI API call and inject the system prompt.
    """
    return (
        f"{LUFFY_SYSTEM_PROMPT}\n\n"
        f"Oi! You said: '{user_message}'. Let's go find the One Piece!"
    )
