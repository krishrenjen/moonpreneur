type FieldConfig = {
  field: string
  value: string | number | boolean | null | undefined
  type?: 'string' | 'number' | 'boolean'
  isTrue?: boolean
  minLength?: number
  maxLength?: number
  minValue?: number
  maxValue?: number
  required?: boolean
  regex?: RegExp
  acceptedValues?: string[]
  onlyAllowAcceptedValues?: boolean
}

type ValidationResult = {
  valid: boolean
  errors: Record<string, string[]>
}

export default function VerifyFields(fields: FieldConfig[]): ValidationResult {
  const errors: Record<string, string[]> = {}

  const addError = (field: string, message: string) => {
    if (!errors[field]) {
      errors[field] = []
    }
    errors[field].push(message)
  }

  for (const {
    field,
    value,
    type,
    isTrue,
    minLength,
    maxLength,
    minValue,
    maxValue,
    required,
    regex,
    acceptedValues,
    onlyAllowAcceptedValues,
  } of fields) {
    const isEmpty = value === null || value === undefined || value === ''

    if (required && isEmpty) {
      addError(field, `Required.`)
      continue // Skip further checks if required field is missing
    }

    if (acceptedValues && acceptedValues.length > 0) {
      if (onlyAllowAcceptedValues) {
        if (!acceptedValues.includes(value as string)) {
          addError(field, `Must be one of the accepted values: ${acceptedValues.join(', ')}.`)
        }
      }
    }

    if (typeof value === 'string') {
      if (minLength !== undefined && value.length < minLength) {
        addError(field, `Must be at least ${minLength} characters long.`)
      }
      if (maxLength !== undefined && value.length > maxLength) {
        addError(field, `Must be at most ${maxLength} characters long.`)
      }
      if (regex && !regex.test(value)) {
        addError(field, `Not in the correct format.`)
      }
    }

    if (typeof value === 'number') {
      if (minValue !== undefined && value < minValue) {
        addError(field, `Must be at least ${minValue}.`)
      }
      if (maxValue !== undefined && value > maxValue) {
        addError(field, `Must be at most ${maxValue}.`)
      }
    }

    if (typeof value === 'boolean' && isTrue !== undefined) {
      if (value !== isTrue) {
        addError(field, `Must be ${isTrue ? 'true' : 'false'}.`)
      }
    }
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  }
}
