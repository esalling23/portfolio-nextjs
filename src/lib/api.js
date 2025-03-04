const apiUrl = process.env.API_URL || 'http://localhost:8000'

export const getContent = async () => {
  return fetch(apiUrl + '/content')
}

export const getProjects = async () => {
  return fetch(apiUrl + '/projects')
}

export const getTools = async () => {
  return fetch(apiUrl + '/tools')
}

export const getCategories = async () => {
  return fetch(apiUrl + '/categories')
}

export const getArcade = async () => {
  return fetch(apiUrl + '/arcade/games')
}

