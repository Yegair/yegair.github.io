import type { GetStaticProps } from 'next';
import { PageLayout } from '../../components/layout/PageLayout';
import { Header } from '../../components/layout/Header';
import { Main } from '../../components/layout/Main';
import { Footer } from '../../components/layout/Footer';
import { Hero, HeroHeading } from '../../components/layout/Hero';
import { IntlDate } from '../../components/IntlDate';
import { Section, SectionHeading } from '../../components/layout/Section';
import { listBlogArticles, loadBlog } from '../../utils/blog';

type Props = {
    readonly articles: ReadonlyArray<ArticleProps>;
};

type ArticleProps = {
    readonly slug: string;
    readonly title: string;
    readonly date: string;
};

export default function BlogIndexPage({ articles }: Props) {
    return (
        <PageLayout>
            <Header>
                <Hero>
                    <HeroHeading>Blog</HeroHeading>
                </Hero>
            </Header>
            <Main className="mt-16">
                {articles.map(article => (
                    <a key={article.slug} href={`/blog/${article.slug}`}>
                        <Section>
                            <SectionHeading>{article.title}</SectionHeading>
                            <div className="text-sm">
                                <IntlDate date={article.date} />
                            </div>
                        </Section>
                    </a>
                ))}
            </Main>
            <Footer />
        </PageLayout>
    );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
    const articles: ArticleProps[] = [];

    for (const { slug } of await listBlogArticles()) {
        const { title, date } = await loadBlog(slug);
        articles.push({ slug, title, date });
    }

    return { props: { articles } };
};
