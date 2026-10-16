export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/") {
      return new Response(
        "Smecherul Gold Signals este online.",
        { headers: { "content-type": "text/plain; charset=utf-8" } }
      );
    }

    if (url.pathname === "/telegram" && request.method === "POST") {
      const update = await request.json();
      const chatId = update.message?.chat?.id;
      const text = update.message?.text || "";

      if (chatId && text === "/start") {
        await fetch(
          `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`,
          {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
              chat_id: chatId,
              text: "Salut! Smecherul Gold Signals este conectat."
            })
          }
        );
      }

      return new Response("OK");
    }

    return new Response("Not found", { status: 404 });
  }
};
