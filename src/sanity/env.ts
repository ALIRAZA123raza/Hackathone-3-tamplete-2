export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-18'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)
export const token = assertValue(
 "skCzwfszMl8cNn4qrffZoYfzKP7dNhAKbOVgDuxYIXfDwxVIReI6vDp5wKd5nXF351Li5jZkuQbXlmSOidb3mxLvAlYIAQNoHAY5lsGXu2gKPVVt1mMztQ7CvZiusa7Kh4EYtSnxxL82S3CQj71hixqdRsC5dikNqfGtgBAC86o2n3wOY0W0",
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
