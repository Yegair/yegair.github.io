import type { HTMLAttributes, ReactNode } from 'react';
import { createElement, forwardRef } from 'react';
import cn from 'classnames';
import { PageLayout } from '../components/layout/PageLayout';
import { Header } from '../components/layout/Header';
import { Hero, HeroHeading } from '../components/layout/Hero';
import { Main } from '../components/layout/Main';
import { Section } from '../components/layout/Section';
import { Footer } from '../components/layout/Footer';

export default function IndexPage() {
    return (
        <PageLayout>
            <Header>
                <Hero>
                    <HeroHeading>Hi, I{"'"}m Hauke 👋</HeroHeading>
                </Hero>
            </Header>
            <Main>
                <Section>
                    <Pills>
                        <Pill>
                            <PillHeading href="/about">Fullstack Developer</PillHeading>
                            <Skills>
                                <Skill src="/typescript.svg" alt="TypeScript" href="https://www.typescriptlang.org" />
                                <Skill
                                    src="/javascript.svg"
                                    alt="JavaScript"
                                    href="https://developer.mozilla.org/docs/Web/JavaScript"
                                />
                                <Skill src="/tailwindcss.svg" alt="TailwindCSS" href="https://tailwindcss.com/" />
                                <Skill src="/react.svg" alt="React" href="https://reactjs.org" />
                                <Skill src="/nextjs.svg" alt="Next.js" href="https://nextjs.org" />
                                <Skill src="/golang.svg" alt="Go" href="https://golang.org" />
                                <Skill src="/rust.svg" alt="Rust" href="https://www.rust-lang.org" />
                                <Skill src="/kotlin.svg" alt="Kotlin" href="https://kotlinlang.org" />
                                <Skill src="/java.svg" alt="Java" href="https://www.java.com" />
                                <Skill src="/mysql.svg" alt="MySQL" href="https://www.mysql.com" />
                                <Skill src="/postgresql.svg" alt="PostgreSQL" href="https://www.postgresql.org" />
                                <Skill src="/supabase.svg" alt="Supabase" href="https://supabase.io" />
                            </Skills>
                        </Pill>
                        <Pill>
                            <PillHeading href="/about">DevOps Affine</PillHeading>
                            <Skills>
                                <Skill src="/gcp.svg" alt="Google Cloud Platform" href="https://cloud.google.com" />
                                <Skill src="/terraform.svg" alt="Terraform" href="https://www.terraform.io" />
                                <Skill src="/github.svg" alt="GitHub" href="https://github.com" />
                                <Skill src="/gitlab.svg" alt="GitLab" href="https://about.gitlab.com" />
                                <Skill src="/vercel.svg" alt="Vercel" href="https://vercel.com" />
                                <Skill src="/netlify.svg" alt="Netlify" href="https://www.netlify.com" />
                            </Skills>
                        </Pill>
                        <Pill>
                            <PillHeading href="/about">Ethereum Enthusiast</PillHeading>
                            <Skills>
                                <Skill src="/ethereum.svg" alt="Ethereum" href="https://ethereum.org" />
                                <Skill src="/solidity.svg" alt="Solidity" href="https://soliditylang.org" />
                                <Skill src="/web3.svg" alt="Web3" />
                                <Skill src="/snippidy.svg" alt="snippidy" href="https://snippidy.com" />
                            </Skills>
                        </Pill>
                        <Pill>
                            <PillHeading href="/about">Self Employed</PillHeading>
                            <Skills>
                                <Skill src="/codinggene.svg" alt="CodingGene" />
                                <Skill src="/tyromind.png" alt="Tyromind" href="https://tyromind.com/" />
                            </Skills>
                        </Pill>
                        <Pill>
                            <PillHeading href="/about">Past</PillHeading>
                            <Skills>
                                <Skill
                                    src="/fraunhofer.svg"
                                    alt="Fraunhofer SIT"
                                    href="https://www.sit.fraunhofer.de"
                                />
                                <Skill src="/cosee.svg" alt="CoSee" href="https://www.cosee.biz" />
                                <Skill src="/nterra.svg" alt="CoSee" href="https://www.nterra.com" />
                                <Skill src="/exxcellent.svg" alt="eXXcellent" href="https://www.exxcellent.de" />
                            </Skills>
                        </Pill>
                    </Pills>
                </Section>
            </Main>
            <Footer />
        </PageLayout>
    );
}

const Pills = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
    return <div {...props} ref={ref} className={cn('flex flex-wrap -mt-8 -ml-8', className)} />;
});

const Pill = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
    return (
        <div
            {...props}
            ref={ref}
            className={cn(
                'flex-auto flex flex-col items-center justify-center transition-all',
                'mt-8 ml-8',
                'p-4',
                'space-y-4',
                'bg-white',
                'shadow-sm',
                className,
            )}
        />
    );
});

type PillHeadingProps = {
    readonly href?: string;
    readonly className?: string;
    readonly children?: ReactNode;
};

function PillHeading({ href, className, children }: PillHeadingProps) {
    return createElement(
        href ? 'a' : 'div',
        {
            href,
            className: cn(
                'select-none',
                href && 'text-blue-800 hover:text-blue',
                'transition transition-colors duration-150',
                className,
            ),
        },
        <h3>{children}</h3>,
    );
}

const Skills = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
    return <div {...props} ref={ref} className={cn('flex flex-wrap -ml-2 -mt-2', className)} />;
});

type SkillProps = {
    readonly src: string;
    readonly alt: string;
    readonly href?: string;
    readonly className?: string;
};

function Skill({ src, alt, href, className }: SkillProps) {
    return createElement(
        href ? 'a' : 'div',
        {
            href,
            target: href ? '_blank' : undefined,
            rel: href ? 'noreferrer' : undefined,
            className: cn(
                'ml-2 mt-2 p-1',
                'rounded',
                href && 'bg-white hover:bg-blue-100',
                'transition-colors duration-300',
                className,
            ),
        },
        <img className="h-4" src={src} alt={alt} />,
    );
}
