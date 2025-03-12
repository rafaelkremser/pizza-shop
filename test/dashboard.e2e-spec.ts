import { expect, test } from '@playwright/test'

test('display month revenue metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('R$ 200,00')).toBeVisible()
  expect(page.getByText('+10% em relação ao mês passado')).toBeVisible()
})

test('display month orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('130').first()).toBeVisible()
  expect(
    page
      .locator('div')
      .filter({
        hasText: /^Pedidos \(mês\)130\+20% em relação ao mês passado$/,
      })
      .getByRole('paragraph'),
  ).toBeVisible()
})

test('display day orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('20', { exact: true })).toBeVisible()
  expect(page.getByText('-5% em relação a ontem')).toBeVisible()
})

test('display month canceled orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('130').nth(1)).toBeVisible()
  expect(
    page
      .locator('div')
      .filter({
        hasText: /^Cancelamentos \(mês\)130\+20% em relação ao mês passado$/,
      })
      .getByRole('paragraph'),
  ).toBeVisible()
})
