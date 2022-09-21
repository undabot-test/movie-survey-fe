export const registerWorker = async () => {
  const registration = await navigator.serviceWorker.register('/worker.js', { scope: '/' })
  const worker = registration.installing

  if (!worker) {
    return
  }
  worker.onstatechange = () => {
    worker.state === 'installed' && window.location.reload()
  }
}
