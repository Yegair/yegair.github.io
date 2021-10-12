import path from 'path';
import fs from 'fs';

type BlogArticleData = {
    readonly slug: string;
    readonly title: string;
    readonly date: string;
    readonly markdown: string;
};

export function loadBlog(slug: string): Promise<BlogArticleData> {
    return new Promise<BlogArticleData>((resolve, reject) => {
        const articlePath = path.join(process.cwd(), 'blog', `${slug}.md`);
        fs.readFile(articlePath, 'utf8', (err, text) => {
            if (err) {
                return reject(err);
            }

            if (!text.startsWith('---\n')) {
                return reject(new Error(`missing meta data start marker in article ${articlePath}`));
            }

            const metadataEndIndex = text.slice(4).indexOf('---\n');

            if (metadataEndIndex < 0) {
                return reject(new Error(`missing meta data end marker in article ${articlePath}`));
            }

            const metadata = Object.fromEntries(
                text
                    .slice(4, metadataEndIndex + 3)
                    .split('\n')
                    .map(line => line.split(/:(.*)/, 2))
                    .map(([name, value]) => [name.trim(), value.trim()]),
            );

            const markdown = text.slice(metadataEndIndex + 8);
            console.log(markdown);

            return resolve({
                slug,
                title: metadata.title,
                date: metadata.date,
                markdown,
            });
        });
    });
}

type BlogArticleRef = {
    readonly slug: string;
    readonly path: string;
};

export function listBlogArticles(): Promise<readonly BlogArticleRef[]> {
    return new Promise((resolve, reject) => {
        const blogDir = path.join(process.cwd(), 'blog');
        fs.readdir(blogDir, (err, data) => {
            if (err) {
                return reject(err);
            }

            const articles = data
                .filter(it => it.endsWith('.md'))
                .map(it => {
                    const slug = it.slice(0, -3);
                    return {
                        slug,
                        path: path.join(blogDir, it),
                    };
                });

            return resolve(articles);
        });
    });
}
