import Head from 'next/head';
import { PageLayout } from '../components/layout/PageLayout';
import { Header } from '../components/layout/Header';
import { Main, MainHeading, MainParagraph } from '../components/layout/Main';
import { Section, SectionHeading, SectionParagraph, SectionSubheading } from '../components/layout/Section';
import { TextLink } from '../components/TextLink';
import { Footer } from '../components/layout/Footer';

export default function PrivacyPage() {
    return (
        <PageLayout>
            <Head>
                <title>yegair.io | Impressum</title>
            </Head>
            <Header />
            <Main className="mt-16">
                <MainHeading>Impressum</MainHeading>
                <MainParagraph className="text-xs">Last updated October 11, 2021</MainParagraph>
                <Section>
                    <div>
                        This page contains an Impressum, a statement of ownership legally mandated in Germany.
                        Accordingly, this page is not translated into English. The information contained on this page
                        are of purely legal character.
                    </div>
                </Section>
                <Section>
                    <SectionHeading>Angaben gemäß § 5 TMG</SectionHeading>
                    <SectionParagraph>
                        <div>Hauke Jäger</div>
                        <div>Nach dem Wieschen 7b</div>
                        <div>64291 Darmstadt</div>
                        <div>
                            Tel.: <img src="/tel.png" className="inline" alt="" />
                        </div>
                        <div>Email: hauke.jaeger@yegair.io</div>
                        <div>
                            Website: <TextLink href="https://yegair.io">yegair.io</TextLink>
                        </div>
                    </SectionParagraph>
                </Section>
                <Section>
                    <SectionHeading>Haftungsausschluss</SectionHeading>
                    <SectionSubheading>Haftung für Inhalte</SectionSubheading>
                    <SectionParagraph>
                        Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
                        Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als
                        Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
                        allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch
                        nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach
                        Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur
                        Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben
                        hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis
                        einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
                        Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                    </SectionParagraph>
                    <SectionSubheading>Haftung für Links</SectionSubheading>
                    <SectionParagraph>
                        Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss
                        haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                        Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
                        verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche
                        Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
                        erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
                        Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen
                        werden wir derartige Links umgehend entfernen.
                    </SectionParagraph>
                    <SectionSubheading>Urheberrecht</SectionSubheading>
                    <SectionParagraph>
                        Die Inhalte dieser Website unterliegen dem Urheberrecht, sofern nicht anders gekennzeichnet, und
                        dürfen nicht ohne vorherige schriftliche Zustimmung von Hauke Jäger weder als Ganzes noch in
                        Teilen verbreitet, verändert oder kopiert werden. Die auf dieser Website eingebundenen Bilder
                        dürfen nicht ohne vorherige schriftliche Zustimmung von Hauke Jäger verwendet werden. Auf den
                        Websites enthaltene Bilder unterliegen teilweise dem Urheberrecht Dritter. Soweit die Inhalte
                        auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet.
                        Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
                        Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei
                        Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                    </SectionParagraph>
                </Section>
            </Main>
            <Footer />
        </PageLayout>
    );
}
