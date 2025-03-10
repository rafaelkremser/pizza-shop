import { expect, test } from '@playwright/test'

test('sign up successfully', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page
    .getByRole('textbox', { name: 'Nome do estabelecimento' })
    .fill('Pizza Shop')

  await page.getByRole('textbox', { name: 'Seu nome' }).fill('Jonh Doe')

  await page
    .getByRole('textbox', { name: 'Seu número de telefone' })
    .fill('1234567890')

  await page
    .getByRole('textbox', { name: 'Seu e-mail' })
    .fill('jonhdoe@email.com')

  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

  const toast = page.getByText('Restaurante cadastrado!')

  await expect(toast).toBeVisible()
})

test('sign up with error', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page
    .getByRole('textbox', { name: 'Nome do estabelecimento' })
    .fill('Wrong Restaurant Name')

  await page.getByRole('textbox', { name: 'Seu nome' }).fill('Jonh Doe')

  await page
    .getByRole('textbox', { name: 'Seu número de telefone' })
    .fill('1234567890')

  await page
    .getByRole('textbox', { name: 'Seu e-mail' })
    .fill('jonhdoe@email.com')

  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

  const toast = page.getByText('Erro ao cadastrar o restaurante.')

  await expect(toast).toBeVisible()
})

test('navigate to sign in page', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'aqui' }).click()

  expect(page.url()).toContain('/sign-in')
})
