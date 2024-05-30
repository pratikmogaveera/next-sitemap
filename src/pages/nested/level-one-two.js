import Button from "@/components/Button";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Wrapper from "@/components/utils/Wrapper";
import Head from "next/head";

const BCrumb = () => {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink href="/nested">Nested</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>Level One 2</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>)
}
export default function LevelTwo() {
    return (
        <Wrapper>
            <Head>
                <title>Next-Sitemap: Level One 2</title>
                <meta name="description" content="Level One 2 page" />
            </Head>


            <h1 className="text-3xl font-bold">Level One 2</h1>

            <div className="absolute top-12 left-4">
                <BCrumb />
            </div>
        </Wrapper>
    )
}