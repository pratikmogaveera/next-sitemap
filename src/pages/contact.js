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
                    <BreadcrumbPage>Contact</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>)
}

export default function Contact() {
    return (
        <Wrapper>
            <Head>
                <title>Next-Sitemap: Contact</title>
                <meta name="description" content="Contact page" />
            </Head>
            <h1 className="text-3xl font-bold">Contact</h1>

        </Wrapper>
    )
}