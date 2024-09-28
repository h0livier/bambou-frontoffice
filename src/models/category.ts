export interface Category{
    label: string
}

export interface Product{
    label: string
    price: number
    code: string
    category: string
}

export interface Menu{
    label: string
    indication: string
    content: string[]
}