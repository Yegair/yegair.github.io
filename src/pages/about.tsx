import { createElement } from 'react';
import cn from 'classnames';
import { PageLayout } from '../components/layout/PageLayout';
import { Header } from '../components/layout/Header';
import { Hero, HeroHeading } from '../components/layout/Hero';
import { Main } from '../components/layout/Main';
import { Section, SectionHeading, SectionParagraph } from '../components/layout/Section';
import { Footer } from '../components/layout/Footer';
import { TextLink } from '../components/TextLink';

export default function IndexPage() {
    return (
        <PageLayout>
            <Header>
                <Hero>
                    <HeroHeading>About me</HeroHeading>
                </Hero>
            </Header>
            <Main>
                <Section>
                    <SectionParagraph>
                        I was born in 1988 in Neustadt an der Weinstraße, Germany. After finishing School in 2007, I
                        studied Computer Sciences in Darmstadt and graduated with a Master{"'"}s degree in 2015. After
                        working for 3 years as a consultant and software developer for{' '}
                        <TextLink href="https://nterra.com" target="_blank" rel="noreferrer">
                            nterra
                        </TextLink>{' '}
                        and{' '}
                        <TextLink href="https://exxcellent.de" target="_blank" rel="noreferrer">
                            eXXcellent
                        </TextLink>
                        , I decided to quit my job and start working as a freelance software developer. Together with
                        two of my best friends and colleges, I founded <Skill src="/codinggene.svg">CodingGene</Skill>,
                        which to this day is the company we use for our freelance software development business.
                    </SectionParagraph>
                    <SectionParagraph>
                        Today I am still making a living as a freelancer, but in Spring 2021 we founded{' '}
                        <Skill src="/tyromind.png" href="https://tyromind.com">
                            Tyromind
                        </Skill>
                        , and took our first steps into the exciting world of product development.
                    </SectionParagraph>
                </Section>
                <Section>
                    <SectionHeading>How I learned what I know today</SectionHeading>
                    <SectionParagraph>
                        I started programming when I got my first computer at the age of 14. I was immediately drawn to
                        the web, so I initially taught myself{' '}
                        <Skill src="/html.svg" href="https://developer.mozilla.org/docs/Web/HTML">
                            HTML
                        </Skill>{' '}
                        and{' '}
                        <Skill src="/css.svg" href="https://developer.mozilla.org/docs/Web/CSS">
                            CSS
                        </Skill>
                        . Although web standards were a real mess at that time (IE 5.5 🤬), I had a whole lot of fun
                        learning and developing my skills. It didn{"'"}t take long until I noticed, that static web
                        pages are pretty useless in many cases, so I learned{' '}
                        <Skill src="/php.svg" href="https://www.php.net">
                            PHP
                        </Skill>{' '}
                        and{' '}
                        <Skill src="/mysql.svg" href="https://www.mysql.com">
                            MySQL
                        </Skill>{' '}
                        to make my pages interactive. At that time broadband internet was a real rarity in Germany, so I
                        had to use a 56k modem for connecting to the world. Often it was frustrating, but it very early
                        taught me the importance of optimizing pages for loading speed. At that time I also had my first
                        contact with{' '}
                        <Skill src="/javascript.svg" href="https://developer.mozilla.org/docs/Web/JavaScript">
                            JavaScript
                        </Skill>
                        , but I really disliked the language, and it would take the rise of NodeJS until I gave it
                        another look. In fact, for many years, I was actively advocating against the use of JavaScript
                        in web pages, except for purely cosmetic purposes.
                    </SectionParagraph>
                    <SectionParagraph>
                        I stuck to this technology stack until I got into University, where I was first introduced to
                        statically typed languages like{' '}
                        <Skill src="/cplusplus.svg" href="https://www.cplusplus.com">
                            C++
                        </Skill>{' '}
                        and{' '}
                        <Skill src="/java.svg" href="https://www.java.com">
                            Java
                        </Skill>
                        . It was love on first sight. Not that I wasn{"'"}t interested in other languages before, but I
                        always evaluated technologies by whether I was able to use them for one of my web projects. At
                        the time I couldn{"'"}t afford to spend money on servers for running a JVM, and web-space with
                        PHP/MySQL was essentially free. However, it took a few days of learning Java until I realized,
                        how much a statically typed language can help maintaining a large codebase. I really wanted to
                        not just learn it, but actually use it, so after one week of going to university, I applied for
                        a job as a student software developer at{' '}
                        <Skill src="/fraunhofer.svg" href="https://www.sit.fraunhofer.de">
                            Fraunhofer SIT
                        </Skill>
                        . They hired me, and even more importantly gave me access to the resources, as well as the
                        freedom I needed, to dive as deep into the Java universe as I wanted.
                    </SectionParagraph>
                    <SectionParagraph>
                        I stayed at Fraunhofer SIT until I got my Bachelor{"'"}s degree in Computer Sciences in 2012. It
                        was a great time, and sometimes I really miss the way I used to work there. Not only did I have
                        all the freedom I needed, but I also learned a lot about applied IT-Security, how to write
                        scientific texts, and met a great number of highly talented people.
                    </SectionParagraph>
                    <SectionParagraph>
                        However, after 3 years I felt that it was time to do something new and exciting. I wanted to get
                        a taste of startup-air, so I applied for a job at{' '}
                        <Skill src="/cosee.svg" href="https://cosee.biz">
                            CoSee
                        </Skill>
                        . And it was worth it. I never again learned so many new things, so many new concepts, tools,
                        and technologies in so little time. From the first day, I was working with a team of young,
                        highly talented software developers. I thought I already knew many of the tools they were using
                        (such as{' '}
                        <Skill src="/git.svg" href="https://git-scm.com">
                            Git
                        </Skill>{' '}
                        for example) , but I quickly realized how much more there was to learn, and so I did. Over the
                        next year, I worked on my first{' '}
                        <Skill src="/android.svg" href="https://android.com">
                            Android
                        </Skill>{' '}
                        app, dived through a huge{' '}
                        <Skill src="/java.svg" href="https://en.wikipedia.org/wiki/Jakarta_EE">
                            JEE
                        </Skill>{' '}
                        backend codebase, queried{' '}
                        <Skill src="/elasticsearch.svg" href="https://www.elastic.co">
                            Elasticsearch
                        </Skill>{' '}
                        and a massive{' '}
                        <Skill src="/oracle.svg" href="https://www.oracle.com/database">
                            Oracle
                        </Skill>{' '}
                        database, and last but not least applied my knowledge about web technologies, this time with{' '}
                        <Skill src="/java.svg" href="https://projects.eclipse.org/projects/ee4j.jsp">
                            JSP
                        </Skill>{' '}
                        as a framework.
                    </SectionParagraph>
                    <SectionParagraph>
                        Unfortunately, after one year of working and learning at CoSee, I was forced to search for a new
                        job. My main occupation was still studying computer sciences at the university, but my parents
                        could no longer afford to pay for my rent, so I had to earn more money.
                    </SectionParagraph>
                    <SectionParagraph>
                        After looking around for a while, I was offered a job as a student assistant at{' '}
                        <Skill src="/nterra.svg" href="https://nterra.com">
                            nterra
                        </Skill>
                        , a consulting company near Darmstadt. They just started a business unit for Java Enterprise
                        consulting, and so I got even deeper into the Java web and backend world. Meanwhile the web
                        started to discover Single Page Applications and new JavaScript frameworks were being used for
                        frontend development.
                    </SectionParagraph>
                    <SectionParagraph>
                        During a project led by my university in collaboration with some industry partners, I had first
                        contact with a SPA framework:{' '}
                        <Skill src="/knockoutjs.svg" href="https://knockoutjs.com">
                            Knockout.js
                        </Skill>
                        . To this point I had only ever done server side rendering, but the possibilities of creating a
                        much better UX with SPAs really resonated with me. I immediately started to learn all I could
                        about the world of frontend{' '}
                        <Skill src="/javascript.svg" href="https://developer.mozilla.org/docs/Web/JavaScript">
                            JavaScript
                        </Skill>{' '}
                        frameworks and build tools. However, being used to work with large codebases, I was wondering
                        how to write big applications with them. So, it took not long until I started to use{' '}
                        <Skill src="/typescript.svg" href="https://www.typescriptlang.org">
                            TypeScript
                        </Skill>{' '}
                        for all of my frontend work, and I never looked back since.
                    </SectionParagraph>
                    <SectionParagraph>
                        After writing my Master-Thesis, I started working full-time as a consultant for nterra. I was
                        sent to clients to support them with Java Enterprise and Web development projects.
                        Unfortunately, the world of enterprise software development in Germany is quiet slow when it
                        comes to adopting new technologies. Hence I was forced to mostly work with{' '}
                        <Skill src="/java.svg" href="https://en.wikipedia.org/wiki/Jakarta_Server_Faces">
                            JSF
                        </Skill>
                        , which in my opinion is the worst web-framework that ever existed. During this time I didn{"'"}
                        t really get to know exciting new technologies, except for{' '}
                        <Skill src="/spring.svg" href="https://spring.io/projects/spring-boot">
                            Spring Boot
                        </Skill>
                        , but I learned a lot about how to deal with customers and clients.
                    </SectionParagraph>
                    <SectionParagraph>
                        As two years of writing enterprise software had passed, I felt like it was once again time for
                        something new. I craved for new knowledge, and even more for people I could learn from. So I
                        started to search for companies where I could find what I was looking for, and finally I found{' '}
                        <Skill src="/exxcellent.svg" href="https://www.exxcellent.de">
                            eXXcellent
                        </Skill>
                        . Once again I was surrounded by highly talented people. Also it was the first time I got hired
                        as a team-/technical-lead developer. I was assigned an in-house project, and I was more or less
                        free to choose the technologies for implementing it. After some research we started with{' '}
                        <Skill src="/react.svg" href="https://reactjs.org">
                            React
                        </Skill>{' '}
                        and{' '}
                        <Skill src="/typescript.svg" href="https://www.typescriptlang.org">
                            TypeScript
                        </Skill>{' '}
                        for the frontend,{' '}
                        <Skill src="/java.svg" href="https://www.java.com">
                            Java
                        </Skill>{' '}
                        for the backend and{' '}
                        <Skill src="/postgresql.svg" href="https://www.postgresql.org">
                            PostgreSQL
                        </Skill>{' '}
                        for persistence. It was a pleasant mixture of professional software development and learning new
                        stuff.
                    </SectionParagraph>
                    <SectionParagraph>
                        Then came one of these days that turned my professional life upside-down. I was talking to a
                        good friend of mine I knew from my time at CoSee, and he asked me, whether I would like to found
                        a company and get into freelancing. At first I denied, because I had just started working at
                        eXXcellent, and I really liked it so far. However, after thinking about it for a while I agreed.
                        The main reason was, that I always dreamt about having my own company, being my own boss and
                        making my own decisions. Although I always imagined having a company which creates and sells a
                        great product, getting into freelancing seemed like a good first step into the right direction.
                        And of course you can just earn so much more money as a freelancer. To this day I am still
                        unsure if german software developers are generally underpaid, or if freelancers are way
                        overpaid, because of the large gap between the two. In my case my income increased by 450% over
                        night, for doing nearly exactly the same work. So, we founded CodingGene.
                    </SectionParagraph>
                    <SectionParagraph>
                        My first client, a company that I knew from my time at nterra, let me participate in the
                        modernisation of their customer portal. Everything should change at once, backend, frontend,
                        database. Sounds challenging? Yep, it was. However, from a technological point of view it was
                        just great. It was the first time I got to work with{' '}
                        <Skill src="/docker.svg" href="https://docker.com">
                            Docker
                        </Skill>{' '}
                        in a client project. We used{' '}
                        <Skill src="/ansible.svg" href="https://ansible.com">
                            Ansible
                        </Skill>{' '}
                        for automating deployments, as well as setting up our own infrastructure for CI/CD with{' '}
                        <Skill src="/gitlab.svg" href="https://gitlab.com">
                            GitLab
                        </Skill>
                        . I introduced the development team to{' '}
                        <Skill src="/react.svg" href="https://reactjs.org">
                            React
                        </Skill>{' '}
                        and{' '}
                        <Skill src="/typescript.svg" href="https://www.typescriptlang.org">
                            TypeScript
                        </Skill>
                        , which was quiet challenging, since the in-house engineers used to work with JSF for many
                        years, if not decades.
                    </SectionParagraph>
                    <SectionParagraph>
                        6 months later the project failed completely. I think mainly because creating everything from
                        scratch just took too much time, but I never got to know the exact reason for the cancellation.
                        In any case it opened my eyes regarding something, that every developer thinks or says at least
                        once in their career:{' '}
                        <i>
                            {'"'}We should rewrite everything from scratch, then it will be much better{'"'}
                        </i>
                        . Today my mantra is{' '}
                        <i>
                            {'"'}You should never rewrite everything from scratch, unless there really is no other way.
                            {'"'}
                        </i>{' '}
                        When it comes to modernizing large software systems, you should find a way to do it in small
                        increments, while keeping the system as a whole operational.
                    </SectionParagraph>
                    <SectionParagraph>
                        That is what we did the next 6 months. We took the old customer portal and injected small pieces
                        of new technology, focusing on improving the user experience as well as the developer
                        experience, without breaking any existing functionality. It worked so well, that we were able to
                        complete several small projects in time with ease, which happened at this company very rarely.
                        After one exciting year I left the project with the great feeling, that I had made an impact on
                        where they were headed in the future.
                    </SectionParagraph>
                    <SectionParagraph>
                        I already had my next project and client waiting, with lots of work to be done. It was a company
                        based in Australia, which had just opened an office in Germany. At the time they had outsourced
                        most of their software development, but that no longer worked for them. They wanted to
                        transition to in-house development teams, but due to the lack of enough qualified candidates for
                        employment, they needed some external help to get started.
                    </SectionParagraph>
                    <SectionParagraph>
                        It felt like being part of a start-up. Everyone was fully committed to their product. The
                        in-house developers really wanted to take responsibility, and not only be a replacement for the
                        old external software development company. It was more than a pleasure to help them achieve
                        their goal. Technology wise I got to work with{' '}
                        <Skill src="/aws.svg" href="https://aws.amazon.com">
                            AWS
                        </Skill>{' '}
                        for the first time, wrote some small tools with{' '}
                        <Skill src="/golang.svg" href="https://golang.org">
                            Go
                        </Skill>
                        , and worked with an architecture, the old software development company called {'"'}
                        Microservices{'"'} (although I would call it {'"'}A lot of separately deployed services sharing
                        a huge database{'"'}, which is not exactly what the term <i>Microservices</i> stands for in my
                        opinion). Besides that it was a technology stack, I already felt comfortable with:{' '}
                        <Skill src="/react.svg" href="https://reactjs.org">
                            React
                        </Skill>{' '}
                        ,{' '}
                        <Skill src="/nextjs.svg" href="https://nextjs.org">
                            Next.js
                        </Skill>{' '}
                        ,{' '}
                        <Skill src="/typescript.svg" href="https://www.typescriptlang.org">
                            TypeScript
                        </Skill>
                        , and{' '}
                        <Skill src="/java.svg" href="https://www.java.com">
                            Java
                        </Skill>
                        , with{' '}
                        <Skill src="/mysql.svg" href="https://www.mysql.com">
                            MySQL
                        </Skill>
                        ,{' '}
                        <Skill src="/oracle.svg" href="https://www.oracle.com/database">
                            Oracle
                        </Skill>
                        , and{' '}
                        <Skill src="/elasticsearch.svg" href="https://www.elastic.co">
                            Elasticsearch
                        </Skill>{' '}
                        for persistence.
                    </SectionParagraph>
                    <SectionParagraph>
                        After working for this company for about half a year, I was assigned to a very urgent project.
                        One of their existing systems for B2B sales needed a modification and extension at its very
                        core. Due to performance reasons (I was told) most of the critical business logic was
                        implemented in SQL, with{' '}
                        <Skill src="/mysql.svg" href="https://www.mysql.com">
                            MySQL
                        </Skill>{' '}
                        being the RDBMS. It was very challenging. We got it done in time and there were no major
                        catastrophes despite the fact, that we made an open-heart surgery on a system we had never
                        worked with up to this point. However, I quickly noticed what a poor choice MySQL was for this
                        system. Whenever I searched for a good solution to a weird SQL problem, I found a great solution
                        for PostgreSQL and a poor/hacky solution for MySQL. I accepted it, because there was nothing I
                        could do about it, but since that time, I am convinced, that PostgreSQL almost always is the
                        better choice when it comes to selecting an RDBMS.
                    </SectionParagraph>
                    <SectionParagraph>
                        I stayed with this company for more than one and a half year. During that time I also did some
                        small projects for other clients, but they were mostly about consulting and giving advice rather
                        than writing software.
                    </SectionParagraph>
                    <SectionParagraph>
                        I was now working as a freelancer for 3 years. I had earned a lot more money than before, but I
                        never changed my lifestyle. Instead, I put all that extra money aside, so I could use it to
                        finally create my second company and get into product development. Together with two friends, I
                        started this endeavour in spring 2021. We experimented a lot and again, I got to know so many
                        new technologies in very little time.
                    </SectionParagraph>
                    <SectionParagraph>
                        We started with a{' '}
                        <Skill src="/golang.svg" href="https://golang.org">
                            Go
                        </Skill>{' '}
                        and{' '}
                        <Skill src="/postgresql.svg" href="https://www.postgresql.org">
                            PostgreSQL
                        </Skill>{' '}
                        based serverless backend running on{' '}
                        <Skill src="/gcp.svg" href="https://cloud.google.com">
                            Google Cloud Platform
                        </Skill>
                        , which we operated through{' '}
                        <Skill src="/terraform.svg" href="https://www.terraform.io">
                            Terraform
                        </Skill>
                        . Additionally we used{' '}
                        <Skill src="/react.svg" href="https://reactjs.org">
                            React
                        </Skill>{' '}
                        ,{' '}
                        <Skill src="/nextjs.svg" href="https://nextjs.org">
                            Next.js
                        </Skill>{' '}
                        , and{' '}
                        <Skill src="/typescript.svg" href="https://www.typescriptlang.org">
                            TypeScript
                        </Skill>{' '}
                        for our frontend, which to this day is my most favorite technology stack. However, we quickly
                        realized, that the backend technology stack caused unnecessary development overhead, which is
                        especially bad if you are prototyping. Thus we searched for a better alternative and found{' '}
                        <Skill src="/supabase.svg" href="https://supabase.io">
                            Supabase
                        </Skill>
                        . It integrated seamlessly with our frontend and gave us an enormous productivity boost. It then
                        didn{"'"}t take long until we launched our first small SaaS product{' '}
                        <Skill src="/scribeclub.png" href="https://scribe.club">
                            Scribe Club
                        </Skill>
                        .
                    </SectionParagraph>
                    <SectionParagraph>
                        From here on I can{"'"}t tell you what happened next, because that is the future. I often hear
                        people saying, that you should specialize on a specific set of technologies, that fullstack
                        developers know everything but are good at nothing. I couldn{"'"}t disagree more. Being one, I
                        am of course highly biased, but so far it served me well. I am convinced that in order to create
                        a great Product, it is not only necessary, but required to have at least one really good
                        fullstack developer on your team. Someone who sees the big picture, but also understands the
                        problems of those, that have specialized on specific technologies.
                    </SectionParagraph>
                </Section>
            </Main>
            <Footer />
        </PageLayout>
    );
}

type SkillProps = {
    readonly src: string;
    readonly href?: string;
    readonly className?: string;
    readonly children?: string;
};

function Skill({ src, href, className, children }: SkillProps) {
    return createElement(
        href ? TextLink : 'div',
        {
            href,
            target: href ? '_blank' : undefined,
            rel: href ? 'noreferrer' : undefined,
            className: cn('inline-flex items-baseline', className),
        },
        <img className="inline h-3 mr-1" src={src} alt={children} />,
        children,
    );
}
