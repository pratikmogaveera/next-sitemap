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
                    <BreadcrumbPage>About</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>)
}
export default function About() {
    return (
        <Wrapper>
            <Head>
                <title>Next-Sitemap: About</title>
                <meta name="description" content="About page" />
            </Head>

            <h1 className="text-3xl font-bold">About</h1>

            <div className="absolute top-12 left-4">
                <BCrumb />
            </div>
        </Wrapper>
    )
}