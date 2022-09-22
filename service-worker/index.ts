/// <reference lib="WebWorker" />
declare const self: ServiceWorkerGlobalScope

import GET_SURVEY from './get-survey.json'
import GET_ANSWERS from './get-answers.json'

const version = 'v1.0.3'

self.oninstall = () => {
  console.log('installed', version)
  self.skipWaiting()
}

self.onactivate = () => {
  console.log('activated', version)
}

self.onfetch = (event) => {
  const { url, method } = event.request
  // if (method === 'GET' && /survey$/.test(url)) {
  //   return event.respondWith(new Response(JSON.stringify(GET_SURVEY)))
  // }
  if (method === 'POST' && /answers$/.test(url)) {
    return event.respondWith(new Response(JSON.stringify(GET_ANSWERS)))
  }
}
