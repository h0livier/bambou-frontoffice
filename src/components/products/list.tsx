'use client'

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Product, Category } from "@/models/category"
import { useEffect, useState } from "react"
import { Ban } from "lucide-react" 

export default function ProductList({ selectPlaceholder, products, categories }: { selectPlaceholder: string, products: Product[], categories: Category[] }) {

    const [selectedCategory, setSelectedCategory] = useState(selectPlaceholder)
    const [searchTerm, setSearchTerm] = useState<string | undefined>()
    const [productsList, setProductList] = useState<Product[]>([])

    useEffect(() => {
        const filterByCategory = (product: Product) => selectedCategory != selectPlaceholder ? product.category === selectedCategory : product
        const filterBySearchterm = (product: Product) => (searchTerm !== undefined && searchTerm !== '') ? product.label.includes(searchTerm as string) : product
        setProductList(products.filter(filterByCategory).filter(filterBySearchterm))
    }, [searchTerm, selectedCategory, products])

    return (
        <div>
            <h1 className="text-2xl mb-2">Nos plats</h1>
            <p className="mb-3">Voici la liste des plats disponibles</p>
            <div className="flex gap-3">
                <Input onChange={e => setSearchTerm(e.target.value)} className="w-8/12" type="text" placeholder="Nouilles aux ..." />
                <Select onValueChange={(value) => setSelectedCategory(value)}>
                    <SelectTrigger className="w-4/12">
                        <SelectValue placeholder={selectPlaceholder} />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem key={"SelectPlaceholder"} value={selectPlaceholder}>{selectPlaceholder}</SelectItem>
                        {categories.map(c => <SelectItem key={c.label} value={c.label}>{c.label}</SelectItem>)}
                    </SelectContent>
                </Select>
            </div>
            <Table className="mt-8">
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Code</TableHead>
                        <TableHead>Nom</TableHead>
                        <TableHead>Catégorie</TableHead>
                        <TableHead className="text-right">Prix</TableHead>
                    </TableRow>
                </TableHeader>
                {productsList.length !== 0 &&
                    <TableBody>
                        {productsList.map((product) => (
                            <TableRow key={product.code}>
                                <TableCell className="font-medium">{product.code}</TableCell>
                                <TableCell>{product.label}</TableCell>
                                <TableCell>{product.category}</TableCell>
                                <TableCell className="text-right">{product.price} €</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>}
            </Table>
            {productsList.length === 0 && 
                <div className="mt-10 flex flex-col justify-center items-center">
                    <p><Ban size={50} /></p>
                    <p className="font-light text-center text-lg mt-2">Aucun plat trouvé</p>
                </div>
            }
        </div>
    )
}