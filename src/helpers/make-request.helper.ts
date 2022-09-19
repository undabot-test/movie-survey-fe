type MakeRequestVariables = {
  url: string
  method: 'GET' | 'POST'
}

export const makeRequest = <T>({ url, method }: MakeRequestVariables): Promise<T> => {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
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
