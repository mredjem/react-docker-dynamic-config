const fetchConfig = async () => {
  const request = {
    method: 'GET',
    mode: 'cors',
    headers: new Headers()
  }
  const response = await fetch(`${window.location.href}config/config.json`, request)
  return response.json()
}

export default {
  fetchConfig
}
