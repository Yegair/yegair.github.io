import type { GetStaticPaths, GetStaticProps } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { MDXRemote } from 'next-mdx-remote';
import type { MDXProviderComponentsProp } from '@mdx-js/react';
import { MDXProvider } from '@mdx-js/react';
import { PageLayout } from '../../components/layout/PageLayout';
import { Header } from '../../components/layout/Header';
import { Main } from '../../components/layout/Main';
import { Footer } from '../../components/layout/Footer';
import {
    BlogArticle,
    BlogCode,
    BlogHeading1,
    BlogHeading2,
    BlogHeading3,
    BlogInlineCode,
    BlogLink,
    BlogParagraph,
    BlogPre,
} from '../../components/blog';
import { listBlogArticles, loadBlog } from '../../utils/blog';

type Props = {
    readonly source: MDXRemoteSerializeResult;
};

const MDXComponents: MDXProviderComponentsProp = {
    h1: BlogHeading1,
    h2: BlogHeading2,
    h3: BlogHeading3,
    p: BlogParagraph,
    pre: BlogPre,
    code: BlogCode,
    inlineCode: BlogInlineCode,
    a: BlogLink,
};

export default function TestPage({ source }: Props) {
    return (
        <PageLayout>
            <Header />
            <Main className="mt-16">
                <BlogArticle>
                    <MDXProvider components={MDXComponents}>
                        <MDXRemote {...source} />
                    </MDXProvider>
                </BlogArticle>
            </Main>
            <Footer />
        </PageLayout>
    );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const slug = params?.['slug'];

    if (typeof slug !== 'string') {
        return { notFound: true };
    }

    const { markdown } = await loadBlog(slug);
    const mdxSource = await serialize(markdown);
    return { props: { source: mdxSource } };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const articles = await listBlogArticles();

    return {
        paths: articles.map(({ slug }) => ({
            params: { slug },
        })),
        fallback: false,
    };
};
