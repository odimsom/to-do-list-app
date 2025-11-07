import OperationResult from '../dominio/common/operation_result'

export default class LocalStorageManager<T> {
  save(key: string, value: T): OperationResult<T> {
    try {
      localStorage.setItem(key, JSON.stringify(value))
      return OperationResult.Success<T>(value, 'Data saved successfully.')
    } catch (error) {
      return OperationResult.Failure<T>([(error as Error).message])
    }
  }
  load(key: string): OperationResult<T | null> {
    try {
      const item = localStorage.getItem(key)
      if (item) {
        const parsedItem: T = JSON.parse(item)
        return OperationResult.Success<T | null>(parsedItem, 'Data loaded successfully.')
      } else {
        return OperationResult.Success<T | null>(null, 'No data found for the given key.')
      }
    } catch (error) {
      return OperationResult.Failure<T | null>([(error as Error).message])
    }
  }
  loadAll(): OperationResult<T[]> {
    try {
      const items: T[] = []
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        if (key) {
          const item = localStorage.getItem(key)
          if (item) {
            const parsedItem: T = JSON.parse(item)
            items.push(parsedItem)
          }
        }
      }
      return OperationResult.Success<T[]>(items, 'All data loaded successfully.')
    } catch (error) {
      return OperationResult.Failure<T[]>([(error as Error).message])
    }
  }
  delete(key: string): OperationResult<null> {
    try {
      localStorage.removeItem(key)
      return OperationResult.Success<null>(null, 'Data deleted successfully.')
    } catch (error) {
      return OperationResult.Failure<null>([(error as Error).message])
    }
  }
  update(key: string, value: T): OperationResult<T> {
    try {
      if (localStorage.getItem(key)) {
        localStorage.setItem(key, JSON.stringify(value))
        return OperationResult.Success<T>(value, 'Data updated successfully.')
      } else {
        return OperationResult.Failure<T>(['No data found for the given key to update.'])
      }
    } catch (error) {
      return OperationResult.Failure<T>([(error as Error).message])
    }
  }
}
