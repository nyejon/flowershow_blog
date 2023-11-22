import fs from "fs";
import type { GetStaticProps, GetStaticPropsResult } from "next";
import { BlogsList, SimpleLayout } from "@portaljs/core";

import clientPromise from "@/lib/mddb.mjs";
import computeFields from "@/lib/computeFields";
import type { CustomAppProps } from "../_app";

interface BlogIndexPageProps extends CustomAppProps {
    blogs: any[]; // TODO types
}

export default function Blog({
    blogs,
    meta: { title, description },
}: BlogIndexPageProps) {
    return (
        <SimpleLayout title={title} description={description}>
            <BlogsList blogs={blogs} />
        </SimpleLayout>
    );
}

export const getStaticProps: GetStaticProps = async (): Promise<
    GetStaticPropsResult<BlogIndexPageProps>
> => {
    const mddb = await clientPromise;
    const blogFiles = await mddb.getFiles({ folder: "blog" });
    const blogsMetadataPromises = blogFiles.map(async (b) => {
        const source = fs.readFileSync(b.file_path, { encoding: "utf-8" });

        // TODO temporary replacement for contentlayer's computedFields
        const frontMatterWithComputedFields = await computeFields({
            frontMatter: b.metadata,
            urlPath: b.url_path,
            filePath: b.file_path,
            source,
        });

        return frontMatterWithComputedFields;
    });

    const blogsList = await Promise.all(blogsMetadataPromises);

    // Sort blogsList by the "created" property in descending order
    blogsList.sort((a, b) => {
        const dateA = new Date(a.created).getTime();
        const dateB = new Date(b.created).getTime();
        return dateB - dateA;
    });

    // console.log(blogsList);

    return {
        props: {
            meta: {
                title: "Blog posts",
                showSidebar: false,
                showToc: false,
                showComments: false,
                showEditLink: false,
                urlPath: "/blog",
            },
            blogs: blogsList,
        },
    };
};
