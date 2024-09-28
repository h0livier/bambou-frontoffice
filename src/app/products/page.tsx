
import products from "@/../static/products.json"
import categories from "@/../static/categories.json"
import ProductList from "@/components/products/list"

export default function ProductsPage() {

    const selectPlaceholder = "Catégorie"

    return (
        <div className="flex justify-center">
            <div className="m-3 md:w-2/3 lg:w-2/3 xl:w-1/2">
                <ProductList selectPlaceholder={selectPlaceholder} products={products} categories={categories} />
            </div>
        </div>
    )
}