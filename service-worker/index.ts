/// <reference lib="WebWorker" />
declare const self: ServiceWorkerGlobalScope

import GET_SURVEY from './get-survey.json'

const version = 'v1.0.2'

self.oninstall = () => {
  console.log('installed', version)
  self.skipWaiting()
}

self.onactivate = () => {
  console.log('activated', version)
}

self.onfetch = (event) => {
  const { url, method } = event.request
  if (method === 'GET' && url.includes('v1/survey')) {
    return event.respondWith(new Response(JSON.stringify(GET_SURVEY)))
  }
}
