// lib/contentful.js
import { Category, Menu, Product } from '@/models/category';
import { createClient } from 'contentful';
import {writeFile} from "fs/promises";
import {join} from "path";

export const client = createClient({
    space: '553ypbr6ru5t',//process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: 'UXQ5tEu9TfSX9x08K8X9FQNM1xpB5S2PWd90UXM1rfM'//process.env.CONTENTFUL_ACCESS_TOKEN as string,
});

export async function fetchEntries() {
    const entries = await client.getEntries();

    const products: Product[] = []
    const categories: Category[] = []
    const menus: Menu[] = []

    entries.items!.map(item => {
        //console.log(item.sys.contentType.sys.id)
        if(item.sys.contentType.sys.id === 'product') {
            // @ts-expect-error
            const cat = item.fields.category!.fields as Category
            products.push({
                label: item.fields.label as string,
                price: item.fields.price as number,
                code: item.fields.code as string,
                category: cat.label
            })
        }else if(item.sys.contentType.sys.id === 'category'){
            categories.push({label: item.fields.label as string})
        }else if(item.sys.contentType.sys.id === 'menu') {
            menus.push({label: item.fields.label as string, indication: item.fields.indication as string, content: item.fields.content as string[]})
        }
    }) 

    const orderByCategoryFunc = (a:Product, b:Product) => a.code.localeCompare(b.code);
    const orderedProducts = products.sort(orderByCategoryFunc);

    writeFile(join(__dirname, `../../static/products.json`), JSON.stringify([...orderedProducts]), { encoding: 'utf8' });
    writeFile(join(__dirname, `../../static/menus.json`), JSON.stringify([...menus]), { encoding: 'utf8' });
    writeFile(join(__dirname, `../../static/categories.json`), JSON.stringify([...categories]), { encoding: 'utf8' });

    if (entries.items) return entries.items;
    console.log(`Error getting Entries.`);
}