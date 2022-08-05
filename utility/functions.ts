export const buildData = (data: any) => (
  data && data.map((item: any) => ({
    name: `${item.firstName} ${item.lastName}`,
    phone: item.phone,
    email: item.email,
    id: item.id,
  }))
)

export const buildSnackVariant = (variantCase: 'success' | 'error'): any => {
  const obj = {
    variant: variantCase, 
    anchorOrigin: { horizontal: 'right', vertical: 'top' },
  }
  return obj
}