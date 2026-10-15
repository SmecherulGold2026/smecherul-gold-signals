
export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/") {
      return new Response(
        "Smecherul Gold Signals - botul este pregatit.",
        { headers: { "content-type": "text/plain; charset=utf-8" } }
      );
    }

    return new Response("Not found", { status: 404 });
  }
};
