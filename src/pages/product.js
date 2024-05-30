import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Wrapper from "@/components/utils/Wrapper"
import Head from "next/head"

const BCrumb = () => {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>Products</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>)
}

export default function Product() {
    return (
        <Wrapper>
            <Head>
                <title>Next-Sitemap: Product</title>
                <meta name="description" content="Product page" />
            </Head>

            <h1 className="text-3xl font-bold">Product</h1>

            <div className="absolute top-12 left-4">
                <BCrumb />
            </div>
        </Wrapper>
    )
}