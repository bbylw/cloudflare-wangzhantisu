addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  let url = new URL(request.url);
  url.hostname = "项目地址"; ##项目地址

  let newRequest = new Request(url, {
    method: request.method,
    headers: request.headers,
    body: request.method !== 'GET' && request.method !== 'HEAD' ? request.body : null,
    redirect: 'manual'
  });

  return fetch(newRequest);
}
