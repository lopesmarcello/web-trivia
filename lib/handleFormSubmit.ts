export const getFormData = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  const formData = new FormData(e.target as HTMLFormElement)
  const formProps = Object.fromEntries(formData)
  return formProps
}
