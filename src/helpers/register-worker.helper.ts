export const registerWorker = () => {
  navigator.serviceWorker.register('/worker.js', { scope: '/' })
}
