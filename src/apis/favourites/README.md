## Favourites api

```typescript
type Product {
  id: number,
  pagetitle: string,
  menutitle: string | null,
  alias: string,
  hidemenu: boolean,
  uri: string,
  image: string | null,
  price: Price | null,
  old_price: Price | null,
  createdon: number,
  publishedon: number | null,
  tvs: TV[] | null,
}

type TV {
  tv_id: number,
  caption: string,
  value: string,
}

type Price {
  value: number,
  format: string,
  currency: string,
}
```

#### GET api/favourites/add

params
```typescript
{
  id: number,
}
```

response
```typescript
{
  success: boolean,
}
```

#### GET api/favourites/remove

params
```typescript
{
  id: number,
}
```

response
```typescript
type Response {
  success: boolean,
}
```

#### GET api/favourites/list

params
```typescript
{
  limit?: number,
  page?: number,
  sort?: string,
  dir?: 'ASC' | 'DESC',
}
```

response
```typescript
type Response {
  success: boolean,
  limit: number,
  page: number,
  total: number,
  object: Product[],
}
```
