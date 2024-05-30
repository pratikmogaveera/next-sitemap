import Button from "@/components/Button";
import Wrapper from "@/components/utils/Wrapper";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const BCrumb = () => {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>Nested</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>)
}

export default function Nested() {
    return (
        <Wrapper>
            <h1 className="text-3xl font-bold">Nested</h1>
            <div className="flex gap-4">
                <Button href={"/nested/level-one"}>
                    Level One
                </Button>
                <Button href={"/nested/level-one-two"}>
                    Level One 2
                </Button>
            </div>

            <div className="absolute top-12 left-4">
                <BCrumb />
            </div>
        </Wrapper>
    )
}