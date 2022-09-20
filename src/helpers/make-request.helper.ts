type MakeRequestVariables = {
  url: string
  method: 'GET' | 'POST'
  body?: Record<string, unknown>
}

export const makeRequest = <T>({ url, method, body }: MakeRequestVariables): Promise<T> => {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  }

  if (body) {
    Object.assign(options, {
      body: JSON.stringify(body),
    })
  }

  return fetch(process.env.SURVEY_API + url, options)
    .then((response) => response.json())
    .then(({ errors, data }) => {
      if (errors) {
        return Promise.reject(errors)
      }
      return data
    })
}
