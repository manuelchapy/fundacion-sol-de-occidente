// Planchas management utilities

export interface PlanchaFile {
  name: string
  filename: string
  displayName: string
  author: string
  description?: string
}

// List of available planchas
// In a real application, this would be fetched from an API or file system
export const AVAILABLE_PLANCHAS: PlanchaFile[] = [
  {
    name: 'El cincel y el hombre león de Stadel',
    filename: 'El cincel y el hombre león de Stadel - Manuel Chaparro.pdf',
    displayName: 'El cincel y el hombre león de Stadel',
    author: 'Manuel Chaparro',
    description: 'Una reflexión sobre la simbología masónica y su conexión con la antigüedad.'
  }
]

export const getPlanchaByFilename = (filename: string): PlanchaFile | undefined => {
  return AVAILABLE_PLANCHAS.find(plancha => plancha.filename === filename)
}

export const getAllPlanchas = (): PlanchaFile[] => {
  return AVAILABLE_PLANCHAS
}

// Author information
export const AUTHOR_INFO = {
  name: 'Manuel Chaparro',
  grade: 'Apr Mas',
  lodge: 'Sol de Occidente N283'
}
